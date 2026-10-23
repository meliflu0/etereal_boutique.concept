import { _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as categories } from "./ProductCard-DOYjxA13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coleccion-QfLLJbv9.js
var $$splitComponentImporter = () => import("./coleccion-B2ear3-x.mjs");
var SORTS = [
	"recomendados",
	"precio-asc",
	"precio-desc",
	"nombre"
];
var Route = createFileRoute("/coleccion")({
	validateSearch: (s) => ({
		cat: categories.includes(s["cat"]) ? s["cat"] : void 0,
		sort: SORTS.includes(s["sort"]) ? s["sort"] : void 0
	}),
	head: () => ({ meta: [
		{ title: "Colección — ETEREAL BOUTIQUE" },
		{
			name: "description",
			content: "Vestidos, blusas, faldas y accesorios delicados. Explora la colección completa de Etereal Boutique."
		},
		{
			property: "og:title",
			content: "Colección — ETEREAL BOUTIQUE"
		},
		{
			property: "og:description",
			content: "Vestidos, blusas, faldas y accesorios en tonos suaves."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
