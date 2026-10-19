// Ilustraciones SVG por división (decorativas). Sustituyen fotografías de stock y se mantienen
// nítidas a cualquier resolución con peso casi nulo.
const gold = '#D4AF37';
const sky = '#3B9BD1';

function FiberArt() {
  const strands = [-60, -36, -12, 12, 36, 60];
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      {strands.map((offset, i) => (
        <g key={offset}>
          <path d={`M-10 ${90 + offset} C 100 ${90 + offset}, 140 90, 330 90`} fill="none" stroke="rgb(255 255 255 / 0.08)" />
          <path
            d={`M-10 ${90 + offset} C 100 ${90 + offset}, 140 90, 330 90`}
            fill="none"
            stroke={i % 2 ? sky : gold}
            strokeWidth="1.5"
            strokeDasharray="6 34"
            className="animate-flow"
            style={{ animationDuration: `${1.4 + i * 0.25}s` }}
          />
        </g>
      ))}
      <circle cx="250" cy="90" r="18" fill="rgb(212 175 55 / 0.1)" stroke="rgb(212 175 55 / 0.5)" />
      <circle cx="250" cy="90" r="4" fill={gold} />
    </svg>
  );
}

function SignalArt() {
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      {[30, 60, 90, 120, 150].map((r, i) => (
        <circle
          key={r}
          cx="160"
          cy="150"
          r={r}
          fill="none"
          stroke={i % 2 ? sky : gold}
          strokeOpacity={0.55 - i * 0.09}
          strokeDasharray={i === 2 ? '3 6' : undefined}
        />
      ))}
      {[
        [70, 80],
        [250, 70],
        [110, 40],
        [215, 115],
        [40, 130],
      ].map(([cx, cy]) => (
        <g key={`${cx}-${cy}`}>
          <line x1="160" y1="150" x2={cx} y2={cy} stroke="rgb(255 255 255 / 0.08)" />
          <circle cx={cx} cy={cy} r="3.5" fill="#07090F" stroke={sky} strokeWidth="1.5" />
        </g>
      ))}
      <circle cx="160" cy="150" r="10" fill="rgb(212 175 55 / 0.15)" className="animate-glow" style={{ transformOrigin: '160px 150px' }} />
      <circle cx="160" cy="150" r="5" fill={gold} />
    </svg>
  );
}

function CodeArt() {
  const lines = [
    [0, 90, gold],
    [16, 140, 'rgb(255 255 255 / 0.25)'],
    [16, 70, sky],
    [32, 110, 'rgb(255 255 255 / 0.18)'],
    [32, 60, gold],
    [16, 120, 'rgb(255 255 255 / 0.25)'],
    [0, 40, sky],
  ] as const;
  return (
    <svg viewBox="0 0 320 180" className="h-full w-full">
      <rect x="40" y="18" width="240" height="148" rx="10" fill="rgb(255 255 255 / 0.03)" stroke="rgb(255 255 255 / 0.1)" />
      <circle cx="56" cy="32" r="3" fill="rgb(255 255 255 / 0.2)" />
      <circle cx="68" cy="32" r="3" fill="rgb(255 255 255 / 0.2)" />
      <circle cx="80" cy="32" r="3" fill="rgb(255 255 255 / 0.2)" />
      {lines.map(([indent, width, color], i) => (
        <rect key={i} x={64 + indent} y={54 + i * 15} width={width} height="5" rx="2.5" fill={color} />
      ))}
      <rect x="64" y="159" width="7" height="2" fill={gold} className="animate-glow" />
    </svg>
  );
}

export function DivisionArt({ id }: { id: string }) {
  if (id === '1click') return <FiberArt />;
  if (id === 'verla-treenet') return <SignalArt />;
  return <CodeArt />;
}
