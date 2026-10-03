import { ArrowUpRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ResearchPublication = {
  title: string;
  degree: string;
  year: string;
  summary: string;
  finding: string;
  methods: string[];
  attribution: string;
  href: string;
  reportUrl: string;
  image: string;
  imageAlt: string;
  caption: string;
};

export function PortfolioPublications({ publications }: { publications: ResearchPublication[] }) {
  return (
    <section id="publications" className="mt-16 scroll-mt-28 border-t border-border pt-8">
      <div data-reveal className="reveal flex flex-wrap items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold">Research & publications</h3>
        <span className="section-label">Blekinge Institute of Technology</span>
      </div>
      <div className="mt-7 divide-y divide-border">
        {publications.map((publication) => (
          <article key={publication.href} data-reveal className="reveal grid gap-6 py-8 first:pt-0 md:grid-cols-[0.9fr_1.1fr] md:gap-9">
            <figure className="min-w-0">
              <a href={publication.reportUrl} target="_blank" rel="noreferrer" aria-label={`Open report: ${publication.title}`} className="block rounded-md border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <div className="publication-figure rounded-md"><img src={publication.image} alt={publication.imageAlt} loading="lazy" /></div>
              </a>
              <figcaption className="mt-2.5 text-[11px] leading-relaxed text-muted-foreground">{publication.caption}</figcaption>
            </figure>
            <div className="min-w-0">
              <p className="section-label">{publication.degree} · {publication.year}</p>
              <h4 className="mt-2 text-lg font-semibold leading-snug">{publication.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{publication.summary}</p>
              <div className="mt-4 border-l-2 border-primary pl-4">
                <p className="text-xs font-semibold">Key finding</p>
                <p className="mt-1 text-sm leading-relaxed">{publication.finding}</p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{publication.methods.join(" · ")}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{publication.attribution}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button asChild variant="outline" size="sm"><a href={publication.reportUrl} target="_blank" rel="noreferrer"><FileText />Read thesis<ArrowUpRight /></a></Button>
                <Button asChild variant="ghost" size="sm"><a href={publication.href} target="_blank" rel="noreferrer">University record<ArrowUpRight /></a></Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}