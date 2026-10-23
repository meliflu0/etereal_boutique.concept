import { describe, it, expect } from "vitest";
import { addItem, setQty, removeItem, cartTotal, cartCount } from "@/lib/cart";
import { formatCOP, filterAndSort, products, getProduct, searchProducts } from "@/lib/catalog";

const price = (s: string) => getProduct(s)!.price;

describe("cart rules", () => {
  it("groups same variant and separates different variants", () => {
    let c = addItem([], { slug: "vestido-aura", color: "Beige", size: "M", qty: 1 });
    c = addItem(c, { slug: "vestido-aura", color: "Beige", size: "M", qty: 2 });
    c = addItem(c, { slug: "vestido-aura", color: "Beige", size: "S", qty: 1 });
    expect(c).toHaveLength(2);
    expect(c[0]?.qty).toBe(3);
  });
  it("quantity never goes below 1", () => {
    const c = setQty([{ slug: "blusa-luna", color: "Crema", size: "S", qty: 2 }], 0, 0);
    expect(c[0]?.qty).toBe(1);
  });
  it("totals use catalog prices and update on removal", () => {
    let c = addItem([], { slug: "vestido-aura", color: "Beige", size: "M", qty: 2 });
    c = addItem(c, { slug: "aretes-nube", color: "Perlado", size: "Única", qty: 1 });
    expect(cartTotal(c, price)).toBe(189900 * 2 + 49900);
    expect(cartCount(c)).toBe(3);
    c = removeItem(c, 0);
    expect(cartTotal(c, price)).toBe(49900);
  });
});

describe("catalog", () => {
  it("formats Colombian pesos", () => {
    expect(formatCOP(189900)).toBe("$189.900 COP");
  });
  it("Vestido Aura prices", () => {
    expect(getProduct("vestido-aura")!.price).toBe(189900);
    expect(getProduct("vestido-aura")!.oldPrice).toBe(229900);
  });
  it("filters and sorts", () => {
    expect(filterAndSort(products, "Accesorios", "recomendados").map((p) => p.slug)).toEqual(["bolso-eter", "aretes-nube"]);
    expect(filterAndSort(products, "Todos", "precio-asc")[0]?.slug).toBe("aretes-nube");
    expect(filterAndSort(products, "Todos", "precio-desc")[0]?.slug).toBe("vestido-aura");
  });
  it("search matches color without accents", () => {
    expect(searchProducts("rosa").map((p) => p.slug)).toContain("vestido-aura");
    expect(searchProducts("eter").map((p) => p.slug)).toEqual(["bolso-eter"]);
  });
});
