import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/producto._slug-CZsThtZk.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "py-32 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "font-serif text-4xl",
		children: "Esta pieza no está disponible."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/coleccion",
		className: "btn-outline mt-8",
		children: "Ver colección"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
