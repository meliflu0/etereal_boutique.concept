import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getProduct, products } from "@/lib/catalog";
import { ProductBuy } from "@/components/site/ProductBuy";
import { ProductCard } from "@/components/site/ProductCard";

export const Route = createFileRoute("/producto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { slug: product.slug, name: product.name, description: product.description };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} — ETEREAL BOUTIQUE` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: `${loaderData.name} — ETEREAL BOUTIQUE` },
          { property: "og:description", content: loaderData.description },
        ]
      : [{ title: "Pieza no disponible — ETEREAL BOUTIQUE" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="py-32 text-center">
      <p className="font-serif text-4xl">Esta pieza no está disponible.</p>
      <Link to="/coleccion" className="btn-outline mt-8">Ver colección</Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useLoaderData();
  const product = getProduct(slug)!;
  const [active, setActive] = useState(0);
  const related = products.filter((p) => p.slug !== slug).slice(0, 4);
  return (
    <div className="mx-auto max-w-[1440px] px-5 pb-28 pt-6 md:px-10 md:pt-10">
      <nav aria-label="Ruta" className="mb-8 text-xs text-muted-foreground">
        <Link to="/" className="link-underline">Inicio</Link> / <Link to="/coleccion" className="link-underline">Colección</Link> / <span>{product.name}</span>
      </nav>
      <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20">
        <div className="grid gap-3 md:grid-cols-[80px_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {product.images.map((img, i) => (
              <button key={img} onClick={() => setActive(i)} aria-label={`Imagen ${i + 1}`} aria-pressed={active === i} className={`aspect-[4/5] w-20 overflow-hidden ring-1 ${active === i ? "ring-foreground" : "ring-transparent"}`}>
                <img src={img} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-secondary md:order-2">
            <img src={product.images[active]} alt={product.name} width={896} height={1152} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="md:pt-6">
          <ProductBuy key={product.slug} product={product} />
        </div>
      </div>
      <section className="mt-28">
        <h2 className="display-2">También te puede gustar</h2>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6">
          {related.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </div>
  );
}
