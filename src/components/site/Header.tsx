import { Link } from "@tanstack/react-router";
import { ChevronDown, Heart, Menu, Search, ShoppingBag } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import type { Category } from "@/lib/catalog";
import { Logo } from "./Logo";

type Sub = { label: string; cat: Category };
const ROPA: Sub[] = [
  { label: "Vestidos", cat: "Vestidos" },
  { label: "Blusas", cat: "Blusas" },
  { label: "Faldas", cat: "Faldas" },
];
const ACC: Sub[] = [
  { label: "Bolsos", cat: "Accesorios" },
  { label: "Aretes", cat: "Accesorios" },
];

export const NAV = [
  { label: "Inicio", hash: "inicio" },
  { label: "Nueva colección", hash: "nueva-coleccion" },
  { label: "Ropa", hash: "coleccion", sub: ROPA },
  { label: "Accesorios", hash: "coleccion", sub: ACC },
  { label: "Producto destacado", hash: "destacado" },
  { label: "Nosotros", hash: "nosotros" },
  { label: "Contacto", hash: "contacto" },
] as const;

function Dropdown({ label, items }: { label: string; items: Sub[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return (
    <div ref={ref} className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        className="flex items-center gap-1 py-2 text-[0.74rem] tracking-[0.06em] link-underline"
      >
        {label}
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`} strokeWidth={1.25} />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-40 min-w-44 border bg-background py-3 shadow-sm animate-in fade-in-0 slide-in-from-top-1">
          {items.map((i) => (
            <Link
              key={i.label}
              to="/coleccion"
              search={{ cat: i.cat }}
              onClick={() => setOpen(false)}
              className="block px-5 py-2 text-sm transition-colors hover:bg-secondary"
            >
              {i.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const { count, favorites, open } = useStore();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const iconBtn = "relative grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-secondary";

  return (
    <header
      className={`sticky top-0 z-40 transition-[background,box-shadow,padding] duration-500 ${scrolled ? "bg-background py-2 shadow-[0_1px_0_var(--color-border)]" : "bg-background/0 py-5"}`}
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 md:px-10">
        {/* Left */}
        <div className="flex items-center">
          <button className={`${iconBtn} lg:hidden`} aria-label="Abrir menú" onClick={() => open("menu")}>
            <Menu className="h-5 w-5" strokeWidth={1.25} />
          </button>
          <nav aria-label="Principal" className="hidden items-center gap-4 whitespace-nowrap lg:flex xl:gap-5">
            {NAV.slice(0, 5).map((n) =>
              "sub" in n ? (
                <Dropdown key={n.label} label={n.label} items={[...n.sub]} />
              ) : (
                <Link key={n.label} to="/" hash={n.hash} className="py-2 text-[0.74rem] tracking-[0.06em] link-underline">
                  {n.label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <Logo compact={scrolled} />

        {/* Right */}
        <div className="flex items-center justify-end gap-1">
          <nav aria-label="Secundaria" className="mr-3 hidden items-center gap-5 whitespace-nowrap xl:flex">
            {NAV.slice(5).map((n) => (
              <Link key={n.label} to="/" hash={n.hash} className="py-2 text-[0.74rem] tracking-[0.06em] link-underline">
                {n.label}
              </Link>
            ))}
          </nav>
          <button className={`${iconBtn} hidden sm:grid`} aria-label="Buscar" onClick={() => open("search")}>
            <Search className="h-[18px] w-[18px]" strokeWidth={1.25} />
          </button>
          <button className={`${iconBtn} hidden sm:grid`} aria-label={`Favoritos, ${favorites.length} guardados`} onClick={() => open("favorites")}>
            <Heart className="h-[18px] w-[18px]" strokeWidth={1.25} />
            {favorites.length > 0 && <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-foreground" />}
          </button>
          <button className={iconBtn} aria-label={`Carrito, ${count} productos`} onClick={() => open("cart")}>
            <ShoppingBag className="h-[18px] w-[18px]" strokeWidth={1.25} />
            {count > 0 && (
              <span className="absolute right-0.5 top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-primary px-1 text-[0.62rem] text-primary-foreground">
                {count}
              </span>
            )}
          </button>
          <Link to="/coleccion" className="ml-3 hidden whitespace-nowrap text-[0.78rem] tracking-[0.08em] 2xl:inline-flex btn-outline !min-h-10 !px-5">
            Ver colección
          </Link>
        </div>
      </div>
    </header>
  );
}
