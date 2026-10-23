import { Link, useNavigate } from "@tanstack/react-router";
import { Heart, Minus, Plus, Search, Trash2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { formatCOP, getProduct, products, searchProducts } from "@/lib/catalog";
import { useStore } from "@/lib/store";
import { Drawer } from "./Drawer";
import { NAV } from "./Header";

function QtyControl({ qty, onChange, label }: { qty: number; onChange: (n: number) => void; label: string }) {
  return (
    <div className="inline-flex items-center border" role="group" aria-label={`Cantidad de ${label}`}>
      <button className="grid h-9 w-9 place-items-center disabled:opacity-40" aria-label="Reducir cantidad" disabled={qty <= 1} onClick={() => onChange(qty - 1)}>
        <Minus className="h-3.5 w-3.5" strokeWidth={1.25} />
      </button>
      <span className="w-8 text-center text-sm" aria-live="polite">{qty}</span>
      <button className="grid h-9 w-9 place-items-center" aria-label="Aumentar cantidad" onClick={() => onChange(qty + 1)}>
        <Plus className="h-3.5 w-3.5" strokeWidth={1.25} />
      </button>
    </div>
  );
}
export { QtyControl };

function useGoCollection() {
  const navigate = useNavigate();
  const { close } = useStore();
  return () => {
    close();
    navigate({ to: "/", hash: "coleccion" });
  };
}

function CartPanel() {
  const { items, total, panel, close, updateQty, remove, open } = useStore();
  const goCollection = useGoCollection();
  return (
    <Drawer
      open={panel === "cart"}
      onClose={close}
      title="Tu carrito"
      footer={
        items.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-baseline justify-between">
              <span className="eyebrow text-muted-foreground">Total estimado</span>
              <span className="text-lg">{formatCOP(total)}</span>
            </div>
            <button className="btn-primary w-full" onClick={() => open("checkout")}>Continuar</button>
            <p className="text-center text-xs text-muted-foreground">Tienda conceptual: no se realizan pagos.</p>
          </div>
        )
      }
    >
      {items.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-6 px-8 py-20 text-center">
          <p className="font-serif text-3xl leading-tight">Tu carrito está esperando algo especial.</p>
          <button className="link-underline text-sm tracking-[0.08em]" onClick={goCollection}>Explorar colección</button>
        </div>
      ) : (
        <ul className="divide-y">
          {items.map((item, i) => {
            const p = getProduct(item.slug)!;
            return (
              <li key={`${item.slug}-${item.color}-${item.size}`} className="flex gap-4 px-6 py-5">
                <img src={p.images[0]} alt={p.name} className="h-28 w-22 shrink-0 object-cover" width={88} height={112} loading="lazy" />
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex justify-between gap-2">
                    <p className="font-serif text-xl">{p.name}</p>
                    <button aria-label={`Eliminar ${p.name}`} onClick={() => remove(i)} className="text-muted-foreground hover:text-foreground">
                      <Trash2 className="h-4 w-4" strokeWidth={1.25} />
                    </button>
                  </div>
                  <p className="text-xs text-muted-foreground">{item.color} · Talla {item.size}</p>
                  <p className="text-xs text-muted-foreground">{formatCOP(p.price)} c/u</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <QtyControl qty={item.qty} onChange={(n) => updateQty(i, n)} label={p.name} />
                    <span className="text-sm">{formatCOP(p.price * item.qty)}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Drawer>
  );
}

function CheckoutPanel() {
  const { items, total, panel, close, open } = useStore();
  return (
    <Drawer open={panel === "checkout"} onClose={close} title="Resumen del pedido">
      <div className="space-y-6 px-6 py-6">
        <p className="bg-blush px-4 py-3 text-sm">
          Este proceso de compra es una demostración. No se solicitan datos de pago ni se realiza ningún cobro.
        </p>
        <ul className="space-y-2 text-sm">
          {items.map((i) => {
            const p = getProduct(i.slug)!;
            return (
              <li key={`${i.slug}-${i.color}-${i.size}`} className="flex justify-between gap-4">
                <span>{i.qty} × {p.name} <span className="text-muted-foreground">({i.color}, {i.size})</span></span>
                <span>{formatCOP(p.price * i.qty)}</span>
              </li>
            );
          })}
        </ul>
        <div className="flex justify-between border-t pt-4">
          <span className="eyebrow">Total estimado</span>
          <span>{formatCOP(total)}</span>
        </div>
        <button className="btn-outline w-full" onClick={() => open("cart")}>Volver al carrito</button>
      </div>
    </Drawer>
  );
}

function FavoritesPanel() {
  const { favorites, panel, close, toggleFavorite } = useStore();
  const goCollection = useGoCollection();
  const list = products.filter((p) => favorites.includes(p.slug));
  return (
    <Drawer open={panel === "favorites"} onClose={close} title="Favoritos">
      {list.length === 0 ? (
        <div className="flex h-full flex-col items-center justify-center gap-6 px-8 py-20 text-center">
          <Heart className="h-6 w-6 text-muted-foreground" strokeWidth={1} />
          <p className="font-serif text-3xl leading-tight">Guarda aquí las piezas que más te gustan.</p>
          <button className="btn-outline" onClick={goCollection}>Explorar colección</button>
        </div>
      ) : (
        <ul className="divide-y">
          {list.map((p) => (
            <li key={p.slug} className="flex items-center gap-4 px-6 py-4">
              <img src={p.images[0]} alt={p.name} className="h-24 w-20 object-cover" loading="lazy" width={80} height={96} />
              <div className="flex-1">
                <Link to="/producto/$slug" params={{ slug: p.slug }} onClick={close} className="font-serif text-xl link-underline">
                  {p.name}
                </Link>
                <p className="mt-1 text-sm text-muted-foreground">{formatCOP(p.price)}</p>
              </div>
              <button aria-label={`Quitar ${p.name} de favoritos`} onClick={() => toggleFavorite(p.slug)} className="grid h-10 w-10 place-items-center">
                <X className="h-4 w-4" strokeWidth={1.25} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </Drawer>
  );
}

const SUGGESTIONS = ["Vestido", "Blusa", "Accesorios", "Bolso", "Rosa", "Beige"];

function SearchPanel() {
  const { panel, close } = useStore();
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = searchProducts(q);
  useEffect(() => {
    if (panel === "search") setTimeout(() => inputRef.current?.focus(), 50);
    else setQ("");
  }, [panel]);
  return (
    <Drawer open={panel === "search"} onClose={close} title="Buscar" side="top">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <label className="flex items-center gap-3 border-b border-foreground pb-3">
          <Search className="h-5 w-5" strokeWidth={1.25} />
          <span className="sr-only">Buscar piezas</span>
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Vestido, blusa, rosa…"
            className="w-full bg-transparent font-serif text-3xl outline-none placeholder:text-muted-foreground/60"
          />
          {q && (
            <button onClick={() => setQ("")} aria-label="Borrar búsqueda"><X className="h-4 w-4" strokeWidth={1.25} /></button>
          )}
        </label>
        {!q && (
          <div className="mt-6 flex flex-wrap gap-2">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => setQ(s)} className="rounded-full border px-4 py-1.5 text-sm transition-colors hover:bg-lavender">
                {s}
              </button>
            ))}
          </div>
        )}
        {q && results.length === 0 && (
          <div className="py-10 text-center">
            <p className="font-serif text-2xl">No encontramos piezas para esa búsqueda.</p>
            <button onClick={() => setQ("")} className="mt-4 text-sm link-underline">Borrar y seguir explorando</button>
          </div>
        )}
        {results.length > 0 && (
          <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
            {results.map((p) => (
              <li key={p.slug}>
                <Link to="/producto/$slug" params={{ slug: p.slug }} onClick={close} className="group block">
                  <div className="aspect-[4/5] overflow-hidden bg-secondary">
                    <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" loading="lazy" />
                  </div>
                  <p className="mt-2 font-serif text-lg">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{formatCOP(p.price)}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Drawer>
  );
}

function MobileMenu() {
  const { panel, close, open } = useStore();
  return (
    <Drawer open={panel === "menu"} onClose={close} title="Menú" side="left">
      <nav aria-label="Menú móvil" className="flex flex-col px-6 py-6">
        {NAV.map((n) => (
          <div key={n.label} className="border-b py-3">
            <Link to="/" hash={n.hash} onClick={close} className="font-serif text-2xl">{n.label}</Link>
            {"sub" in n && (
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
                {n.sub.map((s) => (
                  <Link key={s.label} to="/coleccion" search={{ cat: s.cat }} onClick={close} className="text-sm text-muted-foreground">
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div className="mt-6 flex gap-3">
          <button className="btn-outline flex-1" onClick={() => open("search")}>Buscar</button>
          <button className="btn-outline flex-1" onClick={() => open("favorites")}>Favoritos</button>
        </div>
      </nav>
    </Drawer>
  );
}

export function Panels() {
  return (
    <>
      <CartPanel />
      <CheckoutPanel />
      <FavoritesPanel />
      <SearchPanel />
      <MobileMenu />
    </>
  );
}
