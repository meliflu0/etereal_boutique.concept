import { Clock, MessageCircle, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { formatCOP, type Product } from "@/lib/catalog";
import { useStore } from "@/lib/store";
import { FavButton } from "./ProductCard";
import { QtyControl } from "./Panels";

export function ProductBuy({ product, onDetails }: { product: Product; onDetails?: () => void }) {
  const { add, open } = useStore();
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState<string | null>(product.sizes.length === 1 ? (product.sizes[0] ?? null) : null);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState(false);

  const handleAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    add({ slug: product.slug, color, size, qty });
    toast(`${product.name} añadido a tu carrito.`, { action: { label: "Ver carrito", onClick: () => open("cart") } });
  };

  return (
    <div>
      <p className="eyebrow text-muted-foreground">{product.category}</p>
      <h2 className="display-2 mt-3">{product.name}</h2>
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-xl">{formatCOP(product.price)}</span>
        {product.oldPrice && <span className="text-sm text-muted-foreground line-through">{formatCOP(product.oldPrice)}</span>}
      </div>
      <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">{product.longDescription}</p>

      {product.colors.length > 1 && (
        <fieldset className="mt-8">
          <legend className="eyebrow mb-3">Color · <span className="normal-case tracking-normal text-muted-foreground">{color}</span></legend>
          <div className="flex gap-3">
            {product.colors.map((c) => (
              <button
                key={c.name}
                aria-label={c.name}
                aria-pressed={color === c.name}
                onClick={() => setColor(c.name)}
                className={`h-9 w-9 rounded-full p-1 ring-1 transition-all ${color === c.name ? "ring-foreground" : "ring-transparent hover:ring-border"}`}
              >
                <span className="block h-full w-full rounded-full border" style={{ background: c.swatch }} />
              </button>
            ))}
          </div>
        </fieldset>
      )}

      {product.sizes.length > 1 && (
        <fieldset className="mt-7">
          <legend className="eyebrow mb-3">Talla</legend>
          <div className="flex gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                aria-pressed={size === s}
                onClick={() => {
                  setSize(s);
                  setError(false);
                }}
                className={`h-11 w-14 border text-sm transition-colors ${size === s ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground"}`}
              >
                {s}
              </button>
            ))}
          </div>
          {error && <p role="alert" className="mt-3 text-sm text-destructive">Selecciona una talla para continuar.</p>}
        </fieldset>
      )}

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <QtyControl qty={qty} onChange={setQty} label={product.name} />
        <button className="btn-primary flex-1" onClick={handleAdd}>Agregar al carrito</button>
        <FavButton slug={product.slug} name={product.name} className="!bg-secondary" />
      </div>
      {onDetails && (
        <button onClick={onDetails} className="mt-4 text-sm link-underline">Ver detalles</button>
      )}

      <ul className="mt-8 space-y-2.5 border-t pt-6 text-sm text-muted-foreground">
        <li className="flex items-center gap-3"><Clock className="h-4 w-4" strokeWidth={1.25} /> Envío estimado: 2 a 5 días hábiles*</li>
        <li className="flex items-center gap-3"><RefreshCw className="h-4 w-4" strokeWidth={1.25} /> Cambios disponibles*</li>
        <li className="flex items-center gap-3"><MessageCircle className="h-4 w-4" strokeWidth={1.25} /> Atención por WhatsApp*</li>
      </ul>
      <p className="mt-3 text-xs text-muted-foreground">*Condiciones de demostración.</p>
    </div>
  );
}
