import { Link } from "@tanstack/react-router";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" aria-label="ETEREAL BOUTIQUE, inicio" className="inline-flex flex-col items-center leading-none">
      <span
        className={`font-serif tracking-[0.28em] text-foreground transition-all duration-500 ${compact ? "text-xl md:text-2xl" : "text-2xl md:text-[2rem]"}`}
      >
        ETEREAL
      </span>
      <span className="mt-1 text-[0.58rem] font-light tracking-[0.55em] text-muted-foreground">BOUTIQUE</span>
    </Link>
  );
}
