import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createFileRoute, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, x as useRouter, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { r as StoreProvider } from "./ProductCard-DOYjxA13.mjs";
import { t as Route } from "./coleccion-QfLLJbv9.mjs";
import { n as Logo, r as Panels, t as Header } from "./ProductBuy-zC0JxHPg.mjs";
import { t as Route$2 } from "./producto._slug-CLQzUZqF.mjs";
import { p as TopBar } from "./HomeSections-DnlWwe-b.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BNo7t1Tk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DoOgPg92.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var HELP = {
	Envíos: {
		title: "Envíos",
		body: ["Envíos a toda Colombia en un tiempo estimado de 2 a 5 días hábiles.", "Información de demostración: no constituye una condición comercial."]
	},
	Cambios: {
		title: "Cambios",
		body: ["Cambios fáciles dentro de 30 días, con la prenda en su estado original.", "Información de demostración: no constituye una política real."]
	},
	"Guía de tallas": {
		title: "Guía de tallas",
		body: [
			"S — busto 82–86 cm · cintura 64–68 cm",
			"M — busto 87–91 cm · cintura 69–73 cm",
			"L — busto 92–96 cm · cintura 74–78 cm",
			"Medidas orientativas de demostración."
		]
	},
	"Preguntas frecuentes": {
		title: "Preguntas frecuentes",
		body: ["¿Es una tienda real? — No. Es un sitio conceptual; no se procesan pedidos ni pagos.", "¿Se guardan mis datos? — No. El carrito y los favoritos solo se guardan en tu navegador."]
	}
};
function Footer() {
	const [help, setHelp] = (0, import_react.useState)(null);
	const info = help ? HELP[help] : null;
	const col = "eyebrow mb-5 text-muted-foreground";
	const link = "text-sm link-underline";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-secondary",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-2 md:px-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-sm leading-relaxed text-muted-foreground",
							children: "Piezas sencillas, detalles delicados y una forma de vestir que se siente como tú."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: col,
						children: "Explorar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "inicio",
								className: link,
								children: "Inicio"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "nueva-coleccion",
								className: link,
								children: "Nueva colección"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/coleccion",
								search: { cat: "Vestidos" },
								className: link,
								children: "Ropa"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/coleccion",
								search: { cat: "Accesorios" },
								className: link,
								children: "Accesorios"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/producto/$slug",
								params: { slug: "vestido-aura" },
								className: link,
								children: "Producto destacado"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: col,
						children: "Ayuda"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3",
						children: [Object.keys(HELP).map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setHelp(k),
							className: link,
							children: k
						}) }, k)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: "contacto",
							className: link,
							children: "Contacto"
						}) })]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: col,
						children: "Síguenos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Instagram ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "(demo)"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["TikTok ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "(demo)"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-muted-foreground",
								children: "(demo)"
							})] })
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:justify-between md:px-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sitio conceptual. Los productos, precios, reseñas y datos de contacto son ficticios." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" ETEREAL BOUTIQUE"
					] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!info,
				onOpenChange: (o) => !o && setHelp(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-overlay animate-in fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
					className: "fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-background p-8 shadow-2xl animate-in fade-in-0 zoom-in-95",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-serif text-3xl",
							children: info?.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground",
								children: info?.body.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: b }, b))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							"aria-label": "Cerrar",
							className: "absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full hover:bg-secondary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "h-4 w-4",
								strokeWidth: 1.25
							})
						})
					]
				})] })
			})
		]
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-7xl text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl text-foreground",
					children: "Página no encontrada"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "La página que buscas no existe o se ha movido."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "btn-primary",
						children: "Volver al inicio"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-3xl text-foreground",
					children: "Esta página no se pudo cargar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Algo salió mal. Puedes intentarlo de nuevo o volver al inicio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "btn-primary",
						children: "Intentar de nuevo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "btn-outline",
						children: "Inicio"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "ETEREAL BOUTIQUE" },
			{
				name: "description",
				content: "Boutique conceptual de moda femenina: prendas sencillas y accesorios delicados."
			},
			{
				property: "og:title",
				content: "ETEREAL BOUTIQUE"
			},
			{
				property: "og:description",
				content: "Piezas sencillas para sentirte tú, todos los días."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StoreProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-background focus:p-3",
				children: "Saltar al contenido"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panels, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, { position: "bottom-center" })
		] })
	});
}
var $$splitComponentImporter = () => import("./routes-BkG2J3Jv.mjs");
var rootRouteChildren = {
	IndexRoute: createFileRoute("/")({
		head: () => ({ meta: [
			{ title: "ETEREAL BOUTIQUE — Moda femenina sencilla, con un toque etéreo" },
			{
				name: "description",
				content: "Prendas versátiles y accesorios delicados para crear outfits que se sientan como tú. Boutique conceptual de moda femenina."
			},
			{
				property: "og:title",
				content: "ETEREAL BOUTIQUE — Moda femenina sencilla"
			},
			{
				property: "og:description",
				content: "Piezas sencillas para sentirte tú, todos los días."
			}
		] }),
		component: lazyRouteComponent($$splitComponentImporter, "component")
	}).update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$1
	}),
	ColeccionRoute: Route.update({
		id: "/coleccion",
		path: "/coleccion",
		getParentRoute: () => Route$1
	}),
	ProductoSlugRoute: Route$2.update({
		id: "/producto/$slug",
		path: "/producto/$slug",
		getParentRoute: () => Route$1
	})
};
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
