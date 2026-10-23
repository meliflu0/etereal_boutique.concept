import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { addItem, cartCount, cartTotal, removeItem, setQty, type CartItem } from "./cart";
import { getProduct } from "./catalog";

type Panel = null | "cart" | "favorites" | "search" | "menu" | "checkout";

interface StoreValue {
  items: CartItem[];
  count: number;
  total: number;
  add: (item: CartItem) => void;
  updateQty: (index: number, qty: number) => void;
  remove: (index: number) => void;
  favorites: string[];
  toggleFavorite: (slug: string) => void;
  isFavorite: (slug: string) => boolean;
  panel: Panel;
  open: (p: Panel) => void;
  close: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}
function writeStorage(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* session-only fallback */
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [panel, setPanel] = useState<Panel>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setItems(readStorage<CartItem[]>("etereal-cart", []).filter((i) => getProduct(i.slug)));
    setFavorites(readStorage<string[]>("etereal-favs", []));
    setHydrated(true);
  }, []);
  useEffect(() => {
    if (hydrated) writeStorage("etereal-cart", items);
  }, [items, hydrated]);
  useEffect(() => {
    if (hydrated) writeStorage("etereal-favs", favorites);
  }, [favorites, hydrated]);

  const toggleFavorite = useCallback(
    (slug: string) => setFavorites((f) => (f.includes(slug) ? f.filter((s) => s !== slug) : [...f, slug])),
    [],
  );

  const value = useMemo<StoreValue>(
    () => ({
      items,
      count: cartCount(items),
      total: cartTotal(items, (s) => getProduct(s)?.price ?? 0),
      add: (item) => setItems((c) => addItem(c, item)),
      updateQty: (i, q) => setItems((c) => setQty(c, i, q)),
      remove: (i) => setItems((c) => removeItem(c, i)),
      favorites,
      toggleFavorite,
      isFavorite: (s) => favorites.includes(s),
      panel,
      open: setPanel,
      close: () => setPanel(null),
    }),
    [items, favorites, panel, toggleFavorite],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used inside StoreProvider");
  return ctx;
}
