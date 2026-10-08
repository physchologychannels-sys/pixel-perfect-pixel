export function ProjectArt({ art }: { art: "noir" | "form" | "solstice" | "offscript" }) {
  const base = "absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]";
  if (art === "noir")
    return (
      <div className={`${base} metal-dark grid place-items-center`}>
        <div className="metal h-[46%] w-[22%] rounded-t-[40%] rounded-b-md shadow-[var(--shadow-sculpt)]" />
        <span className="absolute bottom-[10%] font-display text-4xl tracking-[0.5em] text-background/90 md:text-5xl">NOIR</span>
        <div className="orb absolute right-[12%] top-[12%] h-10 w-10 rounded-full" />
      </div>
    );
  if (art === "form")
    return (
      <div className={`${base} bg-card`}>
        <div className="absolute inset-[8%] border border-foreground/30" />
        <div className="absolute left-[8%] top-[8%] h-1/2 w-1/2 bg-foreground" />
        <div className="absolute bottom-[8%] right-[8%] h-[38%] w-[38%] rounded-tl-full bg-accent" />
        <span className="absolute bottom-[10%] left-[11%] font-display text-6xl leading-none text-foreground md:text-7xl">Form</span>
        <span className="label-caps absolute right-[11%] top-[11%] text-muted-foreground">Issue 07</span>
      </div>
    );
  if (art === "solstice")
    return (
      <div className={`${base} bg-accent`}>
        <div className="absolute left-1/2 top-[18%] h-[48%] w-[48%] -translate-x-1/2 rounded-full border-[14px] border-background/85" />
        <div className="absolute inset-x-0 top-[42%] h-px bg-background/50" />
        <span className="absolute bottom-[12%] left-0 right-0 text-center font-display text-3xl italic text-background md:text-4xl">Solstice</span>
        <span className="label-caps absolute bottom-[6%] left-0 right-0 text-center text-background/70">Single origin</span>
      </div>
    );
  return (
    <div className={`${base} bg-foreground overflow-hidden`}>
      <span className="absolute -left-[4%] top-[6%] font-display text-[7rem] font-light leading-[0.85] text-background md:text-[9rem]">OFF</span>
      <span className="absolute -right-[4%] bottom-[6%] font-display text-[7rem] italic leading-[0.85] text-accent md:text-[9rem]">script</span>
      <div className="absolute left-[10%] top-1/2 h-px w-[80%] -rotate-12 bg-background/40" />
    </div>
  );
}
