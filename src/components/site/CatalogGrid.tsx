import { categories, filterAndSort, products, type Category, type SortKey } from "@/lib/catalog";
import { ProductCard } from "./ProductCard";

const SORTS: { value: SortKey; label: string }[] = [
  { value: "recomendados", label: "Recomendados" },
  { value: "precio-asc", label: "Precio: menor a mayor" },
  { value: "precio-desc", label: "Precio: mayor a menor" },
  { value: "nombre", label: "Nombre" },
];

interface Props {
  category: Category | "Todos";
  sort: SortKey;
  onCategory: (c: Category | "Todos") => void;
  onSort: (s: SortKey) => void;
}

export function CatalogGrid({ category, sort, onCategory, onSort }: Props) {
  const list = filterAndSort(products, category, sort);
  return (
    <div>
      <div className="flex flex-col gap-5 border-b pb-5 md:flex-row md:items-center md:justify-between">
        <div role="group" aria-label="Filtrar por categoría" className="-mx-1 flex gap-1 overflow-x-auto">
          {(["Todos", ...categories] as const).map((c) => (
            <button
              key={c}
              aria-pressed={category === c}
              onClick={() => onCategory(c)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${category === c ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-sm">
          <span className="eyebrow text-muted-foreground">Ordenar</span>
          <select value={sort} onChange={(e) => onSort(e.target.value as SortKey)} className="border-b bg-transparent py-1.5 pr-2 outline-none">
            {SORTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </label>
      </div>
      {list.length === 0 ? (
        <div className="py-20 text-center">
          <p className="font-serif text-3xl">Pronto habrá nuevas piezas aquí.</p>
          <button className="btn-outline mt-6" onClick={() => onCategory("Todos")}>Ver toda la colección</button>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 xl:grid-cols-5">
          {list.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
