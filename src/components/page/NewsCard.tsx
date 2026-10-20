import Link from 'next/link';
import type { NewsArticle } from '@/content/news';
import { ArrowUpRightIcon } from '@/components/ui/Icons';

export function NewsCard({ article, showExcerpt = false }: { article: NewsArticle; showExcerpt?: boolean }) {
  return (
    <Link
      href={`/prensa/${article.slug}`}
      className="card-glass group flex h-full flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neva-gold"
    >
      <div className="flex items-center justify-between font-mono text-xs">
        <span className="rounded-full bg-neva-gold/10 px-2.5 py-1 uppercase tracking-wider text-neva-gold">{article.tag}</span>
        <time dateTime={article.dateISO} className="text-white/55">
          {article.date}
        </time>
      </div>
      <p className="mt-8 text-lg font-medium leading-snug text-white">{article.title}</p>
      {showExcerpt && <p className="mt-3 text-sm leading-relaxed text-white/55">{article.excerpt}</p>}
      <span className="mt-auto flex items-center gap-1.5 pt-8 text-sm text-white/55 transition-colors group-hover:text-neva-gold-light">
        Leer más
        <ArrowUpRightIcon className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
