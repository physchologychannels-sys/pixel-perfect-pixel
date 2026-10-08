import { useEffect, useRef } from "react";

export function HeroSculpture() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--rx", `${-y * 10}deg`);
      el.style.setProperty("--ry", `${x * 14}deg`);
    };
    const reset = () => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };
    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", reset);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-[560px] [perspective:1400px]"
    >
      <div
        className="absolute inset-0 transition-transform duration-500 ease-out [transform-style:preserve-3d]"
        style={{ transform: "rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))" }}
      >
        {/* fine orbit rings */}
        <div className="absolute inset-[4%] rounded-full border border-foreground/10" />
        <div className="animate-spin-slow absolute inset-[12%] rounded-full border border-dashed border-foreground/15" />

        {/* orange accent orb */}
        <div className="orb animate-float absolute right-[8%] top-[10%] h-[22%] w-[22%] rounded-full shadow-[var(--shadow-sculpt)] [transform:translateZ(80px)]" />

        {/* tall metallic column */}
        <div className="metal absolute left-[30%] top-[14%] h-[66%] w-[22%] rounded-t-full shadow-[var(--shadow-sculpt)] [transform:translateZ(20px)]">
          <div className="absolute inset-y-0 left-[18%] w-[10%] bg-gradient-to-b from-metal-hi/90 to-transparent blur-[2px]" />
        </div>

        {/* dark arch slab */}
        <div className="metal-dark absolute left-[46%] top-[34%] h-[46%] w-[30%] rounded-t-[999px] shadow-[var(--shadow-sculpt)] [transform:translateZ(50px)]">
          <div className="absolute inset-x-[22%] bottom-0 top-[30%] rounded-t-full bg-background/90" />
          <div className="absolute inset-0 rounded-t-[999px] bg-gradient-to-br from-metal-hi/25 via-transparent to-transparent" />
        </div>

        {/* metal sphere */}
        <div className="absolute left-[14%] top-[54%] h-[24%] w-[24%] rounded-full shadow-[var(--shadow-sculpt)] [background:radial-gradient(circle_at_34%_28%,var(--metal-hi)_0%,var(--metal-mid)_35%,var(--metal-lo)_75%,var(--metal-mid)_100%)] [transform:translateZ(100px)]" />

        {/* typographic object */}
        <span className="absolute bottom-[16%] right-[6%] font-display text-[clamp(4rem,12vw,9rem)] italic leading-none text-foreground/85 [transform:translateZ(120px)] [text-shadow:0_18px_30px_oklch(0.205_0_0/25%)]">
          A
        </span>

        {/* plinth */}
        <div className="absolute bottom-[14%] left-[10%] right-[18%] h-[6%] rounded-[2px] bg-gradient-to-b from-card to-secondary shadow-[0_30px_40px_-20px_oklch(0.205_0_0/50%)]" />
        <div className="absolute bottom-[8%] left-[14%] right-[22%] h-[4%] rounded-full bg-foreground/20 blur-xl" />
      </div>
    </div>
  );
}
