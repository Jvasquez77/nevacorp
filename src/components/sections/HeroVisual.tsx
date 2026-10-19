import Image from 'next/image';
import { siteConfig } from '@/config/site';

// Nodos de operación sobre una órbita de r=230 alrededor del centro (280,280) del lienzo 560×560.
// La línea de cada nodo termina en el anillo interior (r=150) en el mismo ángulo.
const nodes = [
  { label: 'US', name: 'Estados Unidos', angle: -140 },
  { label: 'VE', name: 'Venezuela', angle: -30 },
  { label: 'GLOBAL', name: 'Global', angle: 50 },
  { label: 'CO', name: 'Colombia', angle: 150 },
].map((node) => {
  const rad = (node.angle * Math.PI) / 180;
  return {
    ...node,
    x: 280 + 230 * Math.cos(rad),
    y: 280 + 230 * Math.sin(rad),
    x1: 280 + 150 * Math.cos(rad),
    y1: 280 + 150 * Math.sin(rad),
    labelX: 280 + 268 * Math.cos(rad),
    labelY: 280 + 268 * Math.sin(rad),
  };
});

// Decorativo: la información equivalente (países) ya está en el texto del Hero.
export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px]" aria-hidden="true">
      {/* Halo dorado/azul detrás del emblema */}
      <div className="absolute inset-[22%] animate-glow rounded-full bg-[radial-gradient(circle,rgb(212_175_55/0.45),rgb(59_155_209/0.15)_55%,transparent_70%)] blur-2xl" />

      {/* Anillos orbitales que rotan lentamente */}
      <svg viewBox="0 0 560 560" className="absolute inset-0 h-full w-full animate-spin-slow">
        <circle cx="280" cy="280" r="190" fill="none" stroke="rgb(255 255 255 / 0.08)" strokeDasharray="2 8" />
        <circle cx="280" cy="90" r="3" fill="#D4AF37" />
        <circle cx="470" cy="280" r="2" fill="#3B9BD1" />
      </svg>
      <svg viewBox="0 0 560 560" className="absolute inset-0 h-full w-full animate-spin-slower">
        <circle cx="280" cy="280" r="268" fill="none" stroke="rgb(255 255 255 / 0.06)" />
        <circle cx="280" cy="12" r="2.5" fill="#F5E890" />
        <circle cx="12" cy="280" r="2" fill="#3B9BD1" />
      </svg>

      {/* Red estática: anillos, enlaces de datos animados y nodos por país */}
      <svg viewBox="0 0 560 560" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="link" x1="0" x2="1">
            <stop offset="0" stopColor="#D4AF37" stopOpacity="0.9" />
            <stop offset="1" stopColor="#3B9BD1" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <circle cx="280" cy="280" r="150" fill="none" stroke="rgb(212 175 55 / 0.25)" />
        <circle cx="280" cy="280" r="230" fill="none" stroke="rgb(255 255 255 / 0.1)" />

        {nodes.map((node) => (
          <g key={node.label}>
            <line x1={node.x1} y1={node.y1} x2={node.x} y2={node.y} stroke="rgb(255 255 255 / 0.12)" />
            <line
              x1={node.x1}
              y1={node.y1}
              x2={node.x}
              y2={node.y}
              stroke="url(#link)"
              strokeWidth="1.5"
              strokeDasharray="4 16"
              className="animate-flow"
            />
            <circle cx={node.x} cy={node.y} r="14" fill="rgb(212 175 55 / 0.12)" className="animate-glow" style={{ transformOrigin: `${node.x}px ${node.y}px` }} />
            <circle cx={node.x} cy={node.y} r="5" fill="#07090F" stroke="#D4AF37" strokeWidth="1.5" />
            <text
              x={node.labelX}
              y={node.labelY}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white/60 font-mono text-[11px] tracking-[0.2em]"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Emblema oficial */}
      <div className="absolute inset-[29%] animate-float">
        <Image src={siteConfig.brand.emblem} alt="" fill priority sizes="(min-width: 1024px) 240px, 45vw" className="object-contain drop-shadow-[0_0_40px_rgb(212_175_55/0.35)]" />
      </div>
    </div>
  );
}
