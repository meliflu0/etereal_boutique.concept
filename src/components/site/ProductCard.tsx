import { Link } from "@tanstack/react-router";
import { Heart, Plus } from "lucide-react";
import { toast } from "sonner";
import { formatCOP, type Product } from "@/lib/catalog";
import { useStore } from "@/lib/store";

export function FavButton({ slug, name, className = "" }: { slug: string; name: string; className?: string }) {
  const { isFavorite, toggleFavorite } = useStore();
  const fav = isFavorite(slug);
  return (
    <button
      aria-pressed={fav}
      aria-label={fav ? `Quitar ${name} de favoritos` : `Guardar ${name} en favoritos`}
      onClick={() => toggleFavorite(slug)}
      className={`grid h-10 w-10 place-items-center rounded-full bg-background/85 transition-transform hover:scale-105 ${className}`}
    >
      <Heart className={`h-4 w-4 transition-colors ${fav ? "fill-foreground" : ""}`} strokeWidth={1.25} />
    </button>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { add, open } = useStore();
  const singleVariant = product.sizes.length === 1;
  const quickAdd = () => {
    add({ slug: product.slug, color: product.colors[0]?.name ?? "", size: product.sizes[0] ?? "", qty: 1 });
    toast(`${product.name} añadido a tu carrito.`, { action: { label: "Ver carrito", onClick: () => open("cart") } });
  };
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
        <Link to="/producto/$slug" params={{ slug: product.slug }} aria-label={`Ver ${product.name}`}>
          <img src={product.images[0]} alt={product.name} loading="lazy" width={896} height={1152} className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-soft group-hover:scale-[1.03]" />
          {product.images[1] && (
            <img src={product.images[1]} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          )}
        </Link>
        {product.tag && <span className="eyebrow absolute left-3 top-3 bg-blush px-2.5 py-1 !text-[0.6rem]">{product.tag}</span>}
        <FavButton slug={product.slug} name={product.name} className="absolute right-3 top-3" />
        {singleVariant ? (
          <button onClick={quickAdd} className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 bg-background/95 py-3 text-xs tracking-[0.1em] transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 focus:translate-y-0 focus:opacity-100">
            <Plus className="h-3.5 w-3.5" strokeWidth={1.25} /> Agregar
          </button>
        ) : (
          <Link to="/producto/$slug" params={{ slug: product.slug }} className="absolute inset-x-3 bottom-3 flex items-center justify-center bg-background/95 py-3 text-xs tracking-[0.1em] transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 focus:translate-y-0 focus:opacity-100">
            Elegir talla
          </Link>
        )}
      </div>
      <div className="mt-4">
        <div>
          <p className="eyebrow text-muted-foreground !text-[0.62rem]">{product.category}</p>
          <Link to="/producto/$slug" params={{ slug: product.slug }} className="mt-1 block font-serif text-xl md:text-2xl">
            {product.name}
          </Link>
        </div>
        <div className="mt-1.5 flex items-baseline gap-2 text-sm">
          <p>{formatCOP(product.price)}</p>
          {product.oldPrice && <p className="text-xs text-muted-foreground line-through">{formatCOP(product.oldPrice)}</p>}
        </div>
      </div>
    </article>
  );
}
