import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { f as Plus, v as Heart } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductCard-DOYjxA13.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function addItem(items, item) {
	const qty = Math.max(1, Math.floor(item.qty));
	const idx = items.findIndex((i) => i.slug === item.slug && i.color === item.color && i.size === item.size);
	if (idx === -1) return [...items, {
		...item,
		qty
	}];
	return items.map((i, n) => n === idx ? {
		...i,
		qty: i.qty + qty
	} : i);
}
function setQty(items, index, qty) {
	return items.map((i, n) => n === index ? {
		...i,
		qty: Math.max(1, Math.floor(qty))
	} : i);
}
function removeItem(items, index) {
	return items.filter((_, n) => n !== index);
}
function cartTotal(items, priceOf) {
	return items.reduce((sum, i) => sum + priceOf(i.slug) * i.qty, 0);
}
function cartCount(items) {
	return items.reduce((s, i) => s + i.qty, 0);
}
var aura_default = "/assets/aura-CbwIxzoN.jpg";
var aura_detalle_default = "/assets/aura-detalle-Bf10R7lo.jpg";
var blusa_default = "/assets/blusa-DQ2favX5.jpg";
var falda_default = "/assets/falda-DM31aa3H.jpg";
var bolso_default = "/assets/bolso-SLZ4kBil.jpg";
var aretes_default = "/assets/aretes-B_Rs7eLS.jpg";
var coleccion_default = "/assets/coleccion-Cutx41ay.jpg";
var estilo_combinacion_default = "/assets/estilo-combinacion-Bya1bFzz.jpg";
var BEIGE = {
	name: "Beige",
	swatch: "oklch(0.86 0.035 70)"
};
var ROSA = {
	name: "Rosa pálido",
	swatch: "oklch(0.9 0.035 10)"
};
var BLANCO = {
	name: "Blanco roto",
	swatch: "oklch(0.977 0.008 80)"
};
var CREMA = {
	name: "Crema",
	swatch: "oklch(0.95 0.025 85)"
};
var products = [
	{
		slug: "vestido-aura",
		name: "Vestido Aura",
		category: "Vestidos",
		price: 189900,
		oldPrice: 229900,
		description: "Vestido midi fluido, ideal para un look femenino y sencillo.",
		longDescription: "El Vestido Aura es una pieza ligera de silueta fluida, pensada para pasar del día a la noche con facilidad. Su diseño sencillo lo convierte en un básico femenino ideal para combinar con accesorios delicados.",
		tag: "Destacado",
		images: [aura_default, aura_detalle_default],
		colors: [
			BEIGE,
			ROSA,
			BLANCO
		],
		sizes: [
			"S",
			"M",
			"L"
		],
		keywords: [
			"vestido",
			"midi",
			"beige",
			"rosa",
			"blanco"
		]
	},
	{
		slug: "blusa-luna",
		name: "Blusa Luna",
		category: "Blusas",
		price: 89900,
		description: "Blusa de manga amplia en tono crema, perfecta para el día a día.",
		longDescription: "Una blusa ligera de manga amplia y cuello redondo, con un fruncido suave que acompaña el movimiento. Combina con faldas midi o pantalones de lino.",
		images: [blusa_default, coleccion_default],
		colors: [CREMA],
		sizes: [
			"S",
			"M",
			"L"
		],
		keywords: [
			"blusa",
			"crema",
			"manga"
		]
	},
	{
		slug: "falda-serenidad",
		name: "Falda Serenidad",
		category: "Faldas",
		price: 119900,
		description: "Falda midi de corte limpio en beige suave.",
		longDescription: "Falda midi de cintura alta y caída limpia. Una base serena para tus combinaciones de diario, con camisetas, blusas o punto fino.",
		images: [falda_default, estilo_combinacion_default],
		colors: [BEIGE],
		sizes: [
			"S",
			"M",
			"L"
		],
		keywords: [
			"falda",
			"midi",
			"beige"
		]
	},
	{
		slug: "bolso-eter",
		name: "Bolso Éter",
		category: "Accesorios",
		price: 149900,
		description: "Bolso pequeño de diseño minimalista con correa ajustable.",
		longDescription: "Un bolso pequeño de líneas limpias con asa superior y correa ajustable. Lo justo para llevar lo esencial con un aire delicado.",
		images: [bolso_default, estilo_combinacion_default],
		colors: [CREMA],
		sizes: ["Única"],
		keywords: [
			"bolso",
			"accesorios",
			"crema"
		]
	},
	{
		slug: "aretes-nube",
		name: "Aretes Nube",
		category: "Accesorios",
		price: 49900,
		description: "Aretes delicados en tono perlado, ideales para un toque suave.",
		longDescription: "Aretes colgantes con perla en forma de gota. Un detalle luminoso que suaviza cualquier look, del día a la noche.",
		images: [aretes_default],
		colors: [{
			name: "Perlado",
			swatch: "oklch(0.95 0.012 80)"
		}],
		sizes: ["Única"],
		keywords: [
			"aretes",
			"accesorios",
			"perla",
			"rosa"
		]
	}
];
var categories = [
	"Vestidos",
	"Blusas",
	"Faldas",
	"Accesorios"
];
function getProduct(slug) {
	return products.find((p) => p.slug === slug);
}
function formatCOP(value) {
	return `$${value.toLocaleString("es-CO", { maximumFractionDigits: 0 })} COP`;
}
function filterAndSort(list, category, sort) {
	const filtered = category === "Todos" ? [...list] : list.filter((p) => p.category === category);
	switch (sort) {
		case "precio-asc": return filtered.sort((a, b) => a.price - b.price);
		case "precio-desc": return filtered.sort((a, b) => b.price - a.price);
		case "nombre": return filtered.sort((a, b) => a.name.localeCompare(b.name, "es"));
		default: return filtered;
	}
}
function normalize(s) {
	return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function searchProducts(query) {
	const q = normalize(query.trim());
	if (!q) return [];
	return products.filter((p) => normalize([
		p.name,
		p.category,
		...p.keywords,
		...p.colors.map((c) => c.name)
	].join(" ")).includes(q));
}
var StoreContext = (0, import_react.createContext)(null);
function readStorage(key, fallback) {
	try {
		const raw = window.localStorage.getItem(key);
		return raw ? JSON.parse(raw) : fallback;
	} catch {
		return fallback;
	}
}
function writeStorage(key, value) {
	try {
		window.localStorage.setItem(key, JSON.stringify(value));
	} catch {}
}
function StoreProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [favorites, setFavorites] = (0, import_react.useState)([]);
	const [panel, setPanel] = (0, import_react.useState)(null);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setItems(readStorage("etereal-cart", []).filter((i) => getProduct(i.slug)));
		setFavorites(readStorage("etereal-favs", []));
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) writeStorage("etereal-cart", items);
	}, [items, hydrated]);
	(0, import_react.useEffect)(() => {
		if (hydrated) writeStorage("etereal-favs", favorites);
	}, [favorites, hydrated]);
	const toggleFavorite = (0, import_react.useCallback)((slug) => setFavorites((f) => f.includes(slug) ? f.filter((s) => s !== slug) : [...f, slug]), []);
	const value = (0, import_react.useMemo)(() => ({
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
		close: () => setPanel(null)
	}), [
		items,
		favorites,
		panel,
		toggleFavorite
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoreContext.Provider, {
		value,
		children
	});
}
function useStore() {
	const ctx = (0, import_react.useContext)(StoreContext);
	if (!ctx) throw new Error("useStore must be used inside StoreProvider");
	return ctx;
}
function FavButton({ slug, name, className = "" }) {
	const { isFavorite, toggleFavorite } = useStore();
	const fav = isFavorite(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		"aria-pressed": fav,
		"aria-label": fav ? `Quitar ${name} de favoritos` : `Guardar ${name} en favoritos`,
		onClick: () => toggleFavorite(slug),
		className: `grid h-10 w-10 place-items-center rounded-full bg-background/85 transition-transform hover:scale-105 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
			className: `h-4 w-4 transition-colors ${fav ? "fill-foreground" : ""}`,
			strokeWidth: 1.25
		})
	});
}
function ProductCard({ product }) {
	const { add, open } = useStore();
	const singleVariant = product.sizes.length === 1;
	const quickAdd = () => {
		add({
			slug: product.slug,
			color: product.colors[0]?.name ?? "",
			size: product.sizes[0] ?? "",
			qty: 1
		});
		toast(`${product.name} añadido a tu carrito.`, { action: {
			label: "Ver carrito",
			onClick: () => open("cart")
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden bg-secondary",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/producto/$slug",
					params: { slug: product.slug },
					"aria-label": `Ver ${product.name}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[0],
						alt: product.name,
						loading: "lazy",
						width: 896,
						height: 1152,
						className: "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-soft group-hover:scale-[1.03]"
					}), product.images[1] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.images[1],
						alt: "",
						"aria-hidden": true,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
					})]
				}),
				product.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow absolute left-3 top-3 bg-blush px-2.5 py-1 !text-[0.6rem]",
					children: product.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavButton, {
					slug: product.slug,
					name: product.name,
					className: "absolute right-3 top-3"
				}),
				singleVariant ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: quickAdd,
					className: "absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 bg-background/95 py-3 text-xs tracking-[0.1em] transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 focus:translate-y-0 focus:opacity-100",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
						className: "h-3.5 w-3.5",
						strokeWidth: 1.25
					}), " Agregar"]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/producto/$slug",
					params: { slug: product.slug },
					className: "absolute inset-x-3 bottom-3 flex items-center justify-center bg-background/95 py-3 text-xs tracking-[0.1em] transition-all duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 focus:translate-y-0 focus:opacity-100",
					children: "Elegir talla"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground !text-[0.62rem]",
				children: product.category
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/producto/$slug",
				params: { slug: product.slug },
				className: "mt-1 block font-serif text-xl md:text-2xl",
				children: product.name
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1.5 flex items-baseline gap-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: formatCOP(product.price) }), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground line-through",
					children: formatCOP(product.oldPrice)
				})]
			})]
		})]
	});
}
//#endregion
export { useStore as _, aura_detalle_default as a, categories as c, falda_default as d, filterAndSort as f, searchProducts as g, products as h, aura_default as i, coleccion_default as l, getProduct as m, ProductCard as n, blusa_default as o, formatCOP as p, StoreProvider as r, bolso_default as s, FavButton as t, estilo_combinacion_default as u };
