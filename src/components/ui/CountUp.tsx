'use client';

import { useEffect, useRef, useState } from 'react';

// Anima cifras tipo "+1,200" de 0 al valor final cuando entran en pantalla.
// El servidor renderiza el valor final, así el dato es correcto sin JS y para crawlers.
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\D*)([\d,]+)(.*)$/);
  const prefix = match?.[1] ?? '';
  const target = match ? Number(match[2].replace(/,/g, '')) : 0;
  const suffix = match?.[3] ?? '';

  const ref = useRef<HTMLSpanElement>(null);
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setCurrent(0);
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const duration = 1600;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        setCurrent(Math.round(target * eased));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    });
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {current.toLocaleString('en-US')}
      {suffix}
    </span>
  );
}
