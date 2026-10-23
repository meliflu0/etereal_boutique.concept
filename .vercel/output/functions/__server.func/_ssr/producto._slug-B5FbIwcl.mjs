import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { h as products, m as getProduct, n as ProductCard } from "./ProductCard-DOYjxA13.mjs";
import { i as ProductBuy } from "./ProductBuy-zC0JxHPg.mjs";
import { t as Route } from "./producto._slug-CLQzUZqF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/producto._slug-B5FbIwcl.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useLoaderData();
	const product = getProduct(slug);
	const [active, setActive] = (0, import_react.useState)(0);
	const related = products.filter((p) => p.slug !== slug).slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-[1440px] px-5 pb-28 pt-6 md:px-10 md:pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Ruta",
				className: "mb-8 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "link-underline",
						children: "Inicio"
					}),
					" / ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/coleccion",
						className: "link-underline",
						children: "Colección"
					}),
					" / ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: product.name })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1.2fr_1fr] md:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3 md:grid-cols-[80px_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "order-2 flex gap-3 md:order-1 md:flex-col",
						children: product.images.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive(i),
							"aria-label": `Imagen ${i + 1}`,
							"aria-pressed": active === i,
							className: `aspect-[4/5] w-20 overflow-hidden ring-1 ${active === i ? "ring-foreground" : "ring-transparent"}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img,
								alt: "",
								className: "h-full w-full object-cover"
							})
						}, img))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "order-1 aspect-[4/5] overflow-hidden bg-secondary md:order-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.images[active],
							alt: product.name,
							width: 896,
							height: 1152,
							className: "h-full w-full object-cover"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "md:pt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductBuy, { product }, product.slug)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-2",
					children: "También te puede gustar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-6",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
