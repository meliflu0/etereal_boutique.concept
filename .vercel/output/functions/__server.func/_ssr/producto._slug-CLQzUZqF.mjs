import { K as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as getProduct } from "./ProductCard-DOYjxA13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/producto._slug-CLQzUZqF.js
var $$splitComponentImporter = () => import("./producto._slug-B5FbIwcl.mjs");
var $$splitNotFoundComponentImporter = () => import("./producto._slug-CZsThtZk.mjs");
var Route = createFileRoute("/producto/$slug")({
	loader: ({ params }) => {
		const product = getProduct(params.slug);
		if (!product) throw notFound();
		return {
			slug: product.slug,
			name: product.name,
			description: product.description
		};
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.name} — ETEREAL BOUTIQUE` },
		{
			name: "description",
			content: loaderData.description
		},
		{
			property: "og:title",
			content: `${loaderData.name} — ETEREAL BOUTIQUE`
		},
		{
			property: "og:description",
			content: loaderData.description
		}
	] : [{ title: "Pieza no disponible — ETEREAL BOUTIQUE" }, {
		name: "robots",
		content: "noindex"
	}] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
