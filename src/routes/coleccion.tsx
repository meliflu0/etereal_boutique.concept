import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { categories, type Category, type SortKey } from "@/lib/catalog";
import { CatalogGrid } from "@/components/site/CatalogGrid";

type Search = { cat?: Category | undefined; sort?: SortKey | undefined };
const SORTS: SortKey[] = ["recomendados", "precio-asc", "precio-desc", "nombre"];

export const Route = createFileRoute("/coleccion")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    cat: categories.includes(s["cat"] as Category) ? (s["cat"] as Category) : undefined,
    sort: SORTS.includes(s["sort"] as SortKey) ? (s["sort"] as SortKey) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Colección — ETEREAL BOUTIQUE" },
      { name: "description", content: "Vestidos, blusas, faldas y accesorios delicados. Explora la colección completa de Etereal Boutique." },
      { property: "og:title", content: "Colección — ETEREAL BOUTIQUE" },
      { property: "og:description", content: "Vestidos, blusas, faldas y accesorios en tonos suaves." },
    ],
  }),
  component: Coleccion,
});

function Coleccion() {
  const { cat, sort } = Route.useSearch();
  const navigate = useNavigate({ from: "/coleccion" });
  return (
    <section className="mx-auto max-w-[1440px] px-5 pb-28 pt-10 md:px-10 md:pt-16">
      <p className="eyebrow text-muted-foreground">Colección</p>
      <h1 className="display-1 mt-4 max-w-3xl">Piezas para vestir con calma</h1>
      <p className="mt-6 max-w-lg text-muted-foreground">
        Prendas versátiles y accesorios delicados, pensados para combinarse entre sí. Productos y precios de demostración.
      </p>
      <div className="mt-14">
        <CatalogGrid
          category={cat ?? "Todos"}
          sort={sort ?? "recomendados"}
          onCategory={(c) => navigate({ search: (p) => ({ ...p, cat: c === "Todos" ? undefined : c }), replace: true })}
          onSort={(s) => navigate({ search: (p) => ({ ...p, sort: s }), replace: true })}
        />
      </div>
    </section>
  );
}
