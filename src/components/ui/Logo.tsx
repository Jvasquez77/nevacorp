import Image from 'next/image';
import { siteConfig } from '@/config/site';

// Emblema + wordmark. El texto "NEVA" usa la tipografía serif de marca (font-brand).
export function Logo({ size = 32 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <Image src={siteConfig.brand.emblem} alt="" width={size} height={size} priority />
      <span className="flex flex-col leading-none">
        <span className="font-brand text-xl font-semibold tracking-[0.12em] text-white">NEVA</span>
        <span className="mt-0.5 text-[0.55rem] font-medium uppercase tracking-[0.38em] text-neva-gold">Corporation</span>
      </span>
    </span>
  );
}
