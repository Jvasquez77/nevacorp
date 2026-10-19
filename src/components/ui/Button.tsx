import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold';

const variants = {
  primary:
    'bg-gradient-to-b from-neva-gold-light to-neva-gold text-neva-ink shadow-[0_0_0_1px_rgb(212_175_55/0.4),0_8px_30px_-6px_rgb(212_175_55/0.5)] hover:shadow-[0_0_0_1px_rgb(245_232_144/0.7),0_12px_40px_-6px_rgb(212_175_55/0.7)]',
  secondary: 'border border-white/15 bg-white/[0.04] text-white backdrop-blur hover:border-white/30 hover:bg-white/[0.08]',
};

export function ButtonLink({ href, children, variant = 'primary', className = '' }: ButtonLinkProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
