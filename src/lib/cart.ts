export interface CartItem {
  slug: string;
  color: string;
  size: string;
  qty: number;
}

export function addItem(items: CartItem[], item: CartItem): CartItem[] {
  const qty = Math.max(1, Math.floor(item.qty));
  const idx = items.findIndex((i) => i.slug === item.slug && i.color === item.color && i.size === item.size);
  if (idx === -1) return [...items, { ...item, qty }];
  return items.map((i, n) => (n === idx ? { ...i, qty: i.qty + qty } : i));
}

export function setQty(items: CartItem[], index: number, qty: number): CartItem[] {
  return items.map((i, n) => (n === index ? { ...i, qty: Math.max(1, Math.floor(qty)) } : i));
}

export function removeItem(items: CartItem[], index: number): CartItem[] {
  return items.filter((_, n) => n !== index);
}

export function cartTotal(items: CartItem[], priceOf: (slug: string) => number) {
  return items.reduce((sum, i) => sum + priceOf(i.slug) * i.qty, 0);
}

export function cartCount(items: CartItem[]) {
  return items.reduce((s, i) => s + i.qty, 0);
}
