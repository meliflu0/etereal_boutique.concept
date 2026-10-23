import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as CatalogGrid } from "./CatalogGrid-By0jN5gm.mjs";
import { t as Route } from "./coleccion-QfLLJbv9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coleccion-B2ear3-x.js
var import_jsx_runtime = require_jsx_runtime();
function Coleccion() {
	const { cat, sort } = Route.useSearch();
	const navigate = useNavigate({ from: "/coleccion" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-[1440px] px-5 pb-28 pt-10 md:px-10 md:pt-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow text-muted-foreground",
				children: "Colección"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-1 mt-4 max-w-3xl",
				children: "Piezas para vestir con calma"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-lg text-muted-foreground",
				children: "Prendas versátiles y accesorios delicados, pensados para combinarse entre sí. Productos y precios de demostración."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogGrid, {
					category: cat ?? "Todos",
					sort: sort ?? "recomendados",
					onCategory: (c) => navigate({
						search: (p) => ({
							...p,
							cat: c === "Todos" ? void 0 : c
						}),
						replace: true
					}),
					onSort: (s) => navigate({
						search: (p) => ({
							...p,
							sort: s
						}),
						replace: true
					})
				})
			})
		]
	});
}
//#endregion
export { Coleccion as component };
