import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { HeroSculpture } from "@/components/HeroSculpture";
import { ProjectArt } from "@/components/ProjectArt";
import { site, projects, services, principles, process } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ATELIER — Alex Morgan, Independent Graphic Designer" },
      { name: "description", content: "Brand identity, art direction and digital design by Alex Morgan. Ideas made visible." },
      { property: "og:title", content: "ATELIER — Alex Morgan, Graphic Designer" },
      { property: "og:description", content: "Distinctive visual identities, branding and digital experiences." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);
}

const btn =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <a href="#top" className="font-display text-xl tracking-[0.3em]">{site.studio}</a>
        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{n.label}</a>
          ))}
          <a href="#contact" className="text-sm font-medium text-accent underline-offset-4 hover:underline">Let's Talk →</a>
        </nav>
        <button
          className="md:hidden label-caps"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border px-5 py-6 md:hidden">
          {[...site.nav, { label: "Let's Talk", href: "#contact" }].map((n) => (
            <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="block py-3 font-display text-3xl">{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="label-caps flex items-center gap-3 text-accent"><span className="h-px w-8 bg-accent" />{children}</p>;
}

function Index() {
  useReveal();
  return (
    <div id="top">
      <Header />
      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:pt-20">
          <div className="reveal">
            <SectionLabel>Independent Graphic Designer</SectionLabel>
            <h1 className="mt-8 font-display text-[clamp(3.5rem,9vw,8rem)] font-light leading-[0.92] tracking-tight">
              Ideas made <em className="text-accent">visible.</em>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              I'm {site.designer}. I create distinctive visual identities, considered branding and digital experiences for people with something to say.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#work" className={`${btn} bg-primary text-primary-foreground hover:bg-accent`}>Explore my work</a>
              <a href="#contact" className={`${btn} border border-foreground/30 hover:border-foreground hover:bg-foreground hover:text-background`}>Start a project</a>
            </div>
          </div>
          <div className="reveal">
            <HeroSculpture />
          </div>
        </section>

        {/* INTRO */}
        <section className="border-y border-border">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-24 md:px-10 lg:grid-cols-12">
            <div className="reveal lg:col-span-4"><SectionLabel>Selected Disciplines</SectionLabel></div>
            <div className="reveal lg:col-span-8">
              <h2 className="font-display text-[clamp(2.25rem,5vw,4.25rem)] font-light leading-[1.02]">Thoughtful design. <em>Distinctive identities.</em></h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Good design turns an idea into something people remember. I build visual systems — from logo to layout to screen — that carry a brand with clarity and confidence.
              </p>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="mx-auto max-w-7xl scroll-mt-16 px-5 py-24 md:px-10">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-none">Concept projects</h2>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">Self-initiated concept work exploring identity, editorial, packaging and campaign design.</p>
          </div>
          <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
            {projects.map((p, i) => (
              <a key={p.no} href="#contact" className={`group reveal block focus-visible:outline-none ${i % 2 === 1 ? "md:mt-24" : ""}`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border ring-ring ring-offset-4 ring-offset-background group-focus-visible:ring-2">
                  <ProjectArt art={p.art} />
                  <span className="label-caps absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-foreground">Concept</span>
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm text-muted-foreground">{p.no}</span>
                    <h3 className="font-display text-2xl tracking-wide transition-colors group-hover:text-accent">{p.title}</h3>
                  </div>
                  <p className="text-right text-sm text-muted-foreground">{p.category}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-16 bg-secondary/60">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
            <div className="reveal"><SectionLabel>Services</SectionLabel>
              <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] font-light leading-none">What I do</h2></div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {services.map((s, i) => (
                <article key={s.title} className="reveal group flex min-h-72 flex-col justify-between rounded-sm border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/40 hover:shadow-[var(--shadow-sculpt)]">
                  <span className="font-display text-5xl font-light text-accent">0{i + 1}</span>
                  <div>
                    <h3 className="font-display text-2xl">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto grid max-w-7xl scroll-mt-16 gap-14 px-5 py-24 md:px-10 lg:grid-cols-12">
          <div className="reveal lg:col-span-5">
            <div aria-hidden="true" className="relative grid aspect-square max-w-sm place-items-center rounded-sm border border-border">
              <span className="font-display text-[11rem] font-light italic leading-none">Aa</span>
              <div className="orb absolute bottom-[14%] right-[14%] h-12 w-12 rounded-full" />
              <span className="label-caps absolute left-4 top-4 text-muted-foreground">Fraunces / Manrope</span>
            </div>
          </div>
          <div className="reveal lg:col-span-7">
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-light leading-[1.05]">Hello, I'm {site.designer}.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              An independent graphic designer working across identity, print and digital. I partner closely with founders and teams to find the essence of an idea — then give it a form that feels inevitable.
            </p>
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {principles.map((p) => (
                <div key={p.title} className="border-t border-foreground pt-5">
                  <h3 className="font-display text-xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-5 py-24 md:px-10">
            <div className="reveal"><SectionLabel>Process</SectionLabel></div>
            <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
              {process.map((s, i) => (
                <li key={s.title} className="reveal bg-background p-8">
                  <span className="text-sm text-accent">Step 0{i + 1}</span>
                  <h3 className="mt-6 font-display text-3xl font-light">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-16 bg-foreground text-background">
          <div className="mx-auto max-w-7xl px-5 py-28 md:px-10">
            <p className="label-caps flex items-center gap-3 text-accent"><span className="h-px w-8 bg-accent" />Contact</p>
            <h2 className="reveal mt-8 max-w-4xl font-display text-[clamp(2.75rem,7vw,6.5rem)] font-light leading-[0.98]">
              Have a good idea? <em className="text-accent">Let's give it form.</em>
            </h2>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <a href={`mailto:${site.email}`} className={`${btn} bg-accent text-accent-foreground hover:bg-background hover:text-foreground`}>Start a project →</a>
              <a href={`mailto:${site.email}`} className="text-lg underline-offset-8 hover:underline">{site.email}</a>
            </div>
            <ul className="mt-16 flex flex-wrap gap-8 border-t border-background/15 pt-8">
              {site.socials.map((s) => (
                <li key={s.label}><a href={s.href} className="label-caps text-background/70 transition-colors hover:text-accent">{s.label}</a></li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-background/15 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
          <a href="#top" className="font-display text-lg tracking-[0.3em] text-background">{site.studio}</a>
          <nav aria-label="Footer" className="flex flex-wrap gap-6 text-sm">
            {site.nav.map((n) => <a key={n.href} href={n.href} className="hover:text-background">{n.label}</a>)}
          </nav>
          <p className="text-xs">© {new Date().getFullYear()} {site.designer}. Concept portfolio.</p>
        </div>
      </footer>
    </div>
  );
}
