import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { c as categories, f as filterAndSort, h as products, n as ProductCard } from "./ProductCard-DOYjxA13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CatalogGrid-By0jN5gm.js
var import_jsx_runtime = require_jsx_runtime();
var SORTS = [
	{
		value: "recomendados",
		label: "Recomendados"
	},
	{
		value: "precio-asc",
		label: "Precio: menor a mayor"
	},
	{
		value: "precio-desc",
		label: "Precio: mayor a menor"
	},
	{
		value: "nombre",
		label: "Nombre"
	}
];
function CatalogGrid({ category, sort, onCategory, onSort }) {
	const list = filterAndSort(products, category, sort);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5 border-b pb-5 md:flex-row md:items-center md:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "group",
			"aria-label": "Filtrar por categoría",
			className: "-mx-1 flex gap-1 overflow-x-auto",
			children: ["Todos", ...categories].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-pressed": category === c,
				onClick: () => onCategory(c),
				className: `shrink-0 rounded-full px-4 py-2 text-sm transition-colors ${category === c ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`,
				children: c
			}, c))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "flex items-center gap-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow text-muted-foreground",
				children: "Ordenar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				value: sort,
				onChange: (e) => onSort(e.target.value),
				className: "border-b bg-transparent py-1.5 pr-2 outline-none",
				children: SORTS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: s.value,
					children: s.label
				}, s.value))
			})]
		})]
	}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "py-20 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-serif text-3xl",
			children: "Pronto habrá nuevas piezas aquí."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "btn-outline mt-6",
			onClick: () => onCategory("Todos"),
			children: "Ver toda la colección"
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 md:gap-x-6 xl:grid-cols-5",
		children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
	})] });
}
//#endregion
export { CatalogGrid as t };
