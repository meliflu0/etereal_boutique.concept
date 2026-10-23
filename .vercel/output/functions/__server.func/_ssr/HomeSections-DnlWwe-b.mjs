import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { S as ArrowRight, _ as Leaf, a as Star, b as Clock, c as Shirt, d as RefreshCw, g as MapPin, i as Sun, l as ShieldCheck, m as MessageCircle, n as Truck, o as Sparkles, t as X, y as HeartHandshake } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as aura_detalle_default, d as falda_default, i as aura_default, l as coleccion_default, m as getProduct, o as blusa_default, p as formatCOP, s as bolso_default, u as estilo_combinacion_default } from "./ProductCard-DOYjxA13.mjs";
import { t as CatalogGrid } from "./CatalogGrid-By0jN5gm.mjs";
import { i as ProductBuy } from "./ProductBuy-zC0JxHPg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/HomeSections-DnlWwe-b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_fondo_default = "/assets/hero-fondo-CmzuRkOY.jpg";
var banner_default = "/assets/banner-BI6Qj28h.jpg";
var nosotros_default = "/assets/nosotros-BwJdPUVg.jpg";
var estilo_ocasion_default = "/assets/estilo-ocasion-oi_HQu6A.jpg";
function Reveal({ children, className = "", delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (!("IntersectionObserver" in window)) {
			el.classList.add("is-visible");
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				el.classList.add("is-visible");
				io.disconnect();
			}
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: `reveal ${className}`,
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
var wrap = "mx-auto max-w-[1440px] px-5 md:px-10";
function TopBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "bg-primary px-4 py-2 text-center text-[0.72rem] tracking-[0.12em] text-primary-foreground",
		children: "Piezas sencillas para sentirte tú, todos los días."
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "inicio",
		className: "relative isolate flex min-h-[88vh] scroll-mt-24 items-end overflow-hidden pb-16 pt-28 md:min-h-[94vh] md:items-center md:pb-24 md:pt-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 -z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_fondo_default,
						alt: "Modelo con vestido de lino crema en una galería luminosa",
						width: 1376,
						height: 768,
						className: "h-full w-full object-cover object-[26%_50%] md:object-[50%_50%] animate-soft-zoom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-l from-background via-background/45 to-transparent md:via-background/30" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `${wrap} w-full`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto max-w-xl md:max-w-md lg:max-w-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow inline-block bg-blush px-3 py-1.5 animate-rise",
							children: "Nueva colección"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display-1 mt-7 animate-rise [animation-delay:120ms]",
							children: ["Moda femenina sencilla, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "font-light italic text-foreground/85 drop-shadow-sm",
								children: "con un toque etéreo"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-7 max-w-md text-base leading-relaxed text-foreground/90 md:text-lg animate-rise [animation-delay:260ms] drop-shadow-sm",
							children: "Descubre prendas versátiles y accesorios delicados para crear outfits que se sientan como tú."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3 animate-rise [animation-delay:400ms]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "coleccion",
								className: "btn-primary",
								children: "Comprar ahora"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: "destacado",
								className: "btn-outline",
								children: "Ver producto destacado"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-12 hidden font-serif text-sm italic text-muted-foreground md:block animate-rise [animation-delay:520ms]",
							children: "— Colección Luz de Otoño, Nº 01"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow absolute bottom-16 left-3 hidden origin-bottom-left -rotate-90 text-muted-foreground lg:block",
				children: "Etereal · 2026"
			})
		]
	});
}
var BENEFITS = [
	{
		icon: Truck,
		label: "Envíos a toda Colombia*"
	},
	{
		icon: RefreshCw,
		label: "Cambios fáciles dentro de 30 días*"
	},
	{
		icon: MessageCircle,
		label: "Atención personalizada por WhatsApp"
	},
	{
		icon: ShieldCheck,
		label: "Pagos seguros*"
	}
];
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Beneficios",
		className: "bg-secondary",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: `${wrap} grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4`,
			children: BENEFITS.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-col items-center gap-2 px-2 text-center text-[0.8rem] md:flex-row md:justify-center md:gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
					className: "h-5 w-5 shrink-0",
					strokeWidth: 1.1
				}), label]
			}, label))
		})
	});
}
function CollectionIntro() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "nueva-coleccion",
		className: `${wrap} scroll-mt-24 py-24 md:py-36`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "grid gap-8 md:grid-cols-[1fr_2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow pt-3 text-muted-foreground",
				children: "Descubre Etereal"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-2",
					children: "Menos complicaciones. Más estilo."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground",
					children: "Una selección de prendas y accesorios pensados para acompañarte en cada momento, con la sencillez como punto de partida."
				})]
			})]
		})
	});
}
function CatTile({ img, label, cat, className = "", pos = "50% 30%" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/coleccion",
		search: cat ? { cat } : {},
		className: `group relative block overflow-hidden bg-secondary ${className}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: img,
			alt: label,
			loading: "lazy",
			className: "absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-soft group-hover:scale-[1.04] group-hover:contrast-[1.04]",
			style: { objectPosition: pos }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-foreground/45 to-transparent p-5 text-primary-foreground md:p-7",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-serif text-3xl transition-transform duration-500 group-hover:-translate-y-0.5 md:text-4xl",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-2 text-xs tracking-[0.12em]",
				children: ["Explorar ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
					className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1",
					strokeWidth: 1.25
				})]
			})]
		})]
	});
}
function Categories() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		"aria-label": "Categorías",
		className: `${wrap} pb-24 md:pb-36`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-[300px_300px] md:gap-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatTile, {
					img: aura_default,
					label: "Vestidos",
					cat: "Vestidos",
					className: "col-span-2 aspect-[4/5] md:col-span-5 md:row-span-2 md:aspect-auto",
					pos: "50% 20%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatTile, {
					img: blusa_default,
					label: "Blusas",
					cat: "Blusas",
					className: "aspect-[3/4] md:col-span-4 md:aspect-auto",
					pos: "50% 25%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatTile, {
					img: bolso_default,
					label: "Accesorios",
					cat: "Accesorios",
					className: "aspect-[3/4] md:col-span-3 md:row-span-2 md:aspect-auto"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatTile, {
					img: falda_default,
					label: "Faldas",
					cat: "Faldas",
					className: "aspect-[3/4] md:col-span-2 md:aspect-auto",
					pos: "50% 40%"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatTile, {
					img: coleccion_default,
					label: "Nueva colección",
					className: "aspect-[3/4] md:col-span-2 md:aspect-auto",
					pos: "50% 20%"
				})
			]
		})
	});
}
function Featured() {
	const p = getProduct("vestido-aura");
	const [details, setDetails] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "destacado",
		className: "scroll-mt-24 bg-secondary py-20 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `${wrap} grid gap-12 md:grid-cols-[1.15fr_1fr] md:gap-20`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative grid grid-cols-[2fr_1fr] gap-3 md:gap-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/5] overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: aura_default,
						alt: "Vestido Aura en beige, silueta completa",
						loading: "lazy",
						width: 896,
						height: 1152,
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow absolute left-4 top-4 bg-background px-3 py-1.5 !text-[0.62rem]",
						children: "Producto destacado"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 md:gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[3/4] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: aura_detalle_default,
							alt: "Detalle del tejido satinado del Vestido Aura",
							loading: "lazy",
							className: "h-full w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-lg italic leading-snug text-muted-foreground",
						children: "Ligero, fluido, del día a la noche."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "md:pt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductBuy, {
					product: p,
					onDetails: () => setDetails(true)
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
			open: details,
			onOpenChange: setDetails,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-overlay animate-in fade-in-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
				className: "fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-background p-8 shadow-2xl animate-in fade-in-0 zoom-in-95",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
						className: "font-serif text-3xl",
						children: p.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: p.longDescription
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-6 space-y-2 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Precio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: formatCOP(p.price) })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Colores" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: p.colors.map((c) => c.name).join(", ") })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Tallas" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: p.sizes.join(", ") })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between border-b pb-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Tejido" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Tela suave y fresca" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "Corte" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: "Midi" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/producto/$slug",
						params: { slug: p.slug },
						className: "btn-outline mt-6 w-full",
						children: "Ver página del producto"
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
		})]
	});
}
function Favorites() {
	const [cat, setCat] = (0, import_react.useState)("Todos");
	const [sort, setSort] = (0, import_react.useState)("recomendados");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "coleccion",
		className: `${wrap} scroll-mt-24 py-24 md:py-32`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-2",
					children: "Nuestros favoritos"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-muted-foreground",
					children: "Prendas y pequeños detalles para crear combinaciones que se sienten como tú."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/coleccion",
					className: "text-sm tracking-[0.08em] link-underline",
					children: "Ver toda la colección"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CatalogGrid, {
				category: cat,
				sort,
				onCategory: setCat,
				onSort: setSort
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-xs text-muted-foreground",
				children: "Productos y precios de demostración."
			})
		]
	});
}
function EditorialBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid md:grid-cols-[1.6fr_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[640px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: banner_default,
					alt: "Modelo con vestido rosa pálido caminando en un patio soleado",
					loading: "lazy",
					className: "h-full w-full object-cover object-[70%_50%]"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center bg-secondary px-6 py-16 md:px-14",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-muted-foreground",
							children: "Editorial"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-2 mt-5",
							children: "El arte de vestir con sencillez."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 leading-relaxed text-muted-foreground",
							children: "Menos ruido, más esencia. Descubre prendas que se adaptan a tu ritmo y pequeños detalles que transforman cualquier look."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							hash: "coleccion",
							className: "mt-8 inline-flex items-center gap-2 text-sm tracking-[0.08em] link-underline",
							children: ["Descubrir la colección ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "h-4 w-4",
								strokeWidth: 1.25
							})]
						})
					]
				})
			})]
		})
	});
}
var VALUES = [
	{
		icon: Sparkles,
		label: "Estética limpia"
	},
	{
		icon: Leaf,
		label: "Comodidad"
	},
	{
		icon: Shirt,
		label: "Versatilidad"
	},
	{
		icon: HeartHandshake,
		label: "Atención cercana"
	},
	{
		icon: Sun,
		label: "Moda femenina atemporal"
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "nosotros",
		className: `${wrap} grid scroll-mt-24 gap-12 py-24 md:grid-cols-[1fr_1.2fr] md:gap-20 md:py-36`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "aspect-[4/5] overflow-hidden md:order-2",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: nosotros_default,
				alt: "Interior de la boutique con prendas de lino en tonos naturales",
				loading: "lazy",
				className: "h-full w-full object-cover"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "flex flex-col justify-center md:order-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-muted-foreground",
					children: "Sobre Etereal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-2 mt-5 max-w-md",
					children: "Ropa que acompaña tu día a día"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md leading-relaxed text-muted-foreground",
					children: "En Etereal Boutique creemos que la moda no necesita ser complicada. Creamos una selección de prendas y accesorios sencillos, pensados para combinarse entre sí y adaptarse a diferentes momentos."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-8 sm:grid-cols-3",
					children: VALUES.map(({ icon: Icon, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "h-4 w-4 shrink-0 text-muted-foreground",
								strokeWidth: 1.25
							}),
							" ",
							label
						]
					}, label))
				})
			]
		})]
	});
}
var LOOKS = [
	{
		img: falda_default,
		title: "Para el día a día",
		note: "Sencillo por naturaleza.",
		slug: "falda-serenidad",
		offset: ""
	},
	{
		img: estilo_ocasion_default,
		title: "Una ocasión especial",
		note: "Detalles que hablan por ti.",
		slug: "aretes-nube",
		offset: "md:mt-20"
	},
	{
		img: estilo_combinacion_default,
		title: "Prendas y accesorios",
		note: "Tu estilo, a tu manera.",
		slug: "bolso-eter",
		offset: "md:mt-8"
	}
];
function StyleEditorial() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-muted py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: wrap,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-2 max-w-xl",
				children: "Pequeños detalles, grandes combinaciones"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-10 md:grid-cols-3 md:gap-8",
				children: LOOKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 120,
					className: l.offset,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/5] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: l.img,
								alt: l.title,
								loading: "lazy",
								className: "h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-serif text-2xl italic",
							children: l.note
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: l.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/producto/$slug",
							params: { slug: l.slug },
							className: "mt-3 inline-block text-sm link-underline",
							children: ["Ver ", getProduct(l.slug).name]
						})
					]
				}, l.title))
			})]
		})
	});
}
var REVIEWS = [
	{
		text: "Las prendas son hermosas y la atención fue excelente.",
		name: "Valentina R."
	},
	{
		text: "Me encantó la calidad y el estilo sencillo de la tienda.",
		name: "Camila M."
	},
	{
		text: "Los accesorios combinan con todo. Volveré por más.",
		name: "Laura G."
	},
	{
		text: "El Vestido Aura es precioso, la tela se siente muy cómoda.",
		name: "Sofía T."
	}
];
function Reviews() {
	const [all, setAll] = (0, import_react.useState)(false);
	const list = all ? REVIEWS : REVIEWS.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `${wrap} py-24 md:py-32`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-2 md:flex-row md:items-end md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-2",
					children: "Lo que dicen nuestras clientas"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-muted-foreground",
					children: "Reseñas de demostración, no verificadas."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-px bg-border md:grid-cols-3",
				children: list.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-6 bg-background p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1",
							"aria-label": "Valoración visual de demostración",
							children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
								className: "h-3.5 w-3.5",
								strokeWidth: 1.25
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-serif text-2xl leading-snug",
							children: [
								"“",
								r.text,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-auto text-sm text-muted-foreground",
							children: ["— ", r.name]
						})
					]
				}, r.name))
			}),
			!all && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setAll(true),
				className: "btn-outline mt-10",
				children: "Ver más reseñas"
			})
		]
	});
}
function Newsletter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [state, setState] = (0, import_react.useState)("idle");
	const submit = (e) => {
		e.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setState("error");
		setState("done");
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-accent/60 py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-xl px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-2",
					children: "Únete al universo Etereal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-muted-foreground",
					children: "Recibe novedades, lanzamientos y recomendaciones de estilo."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					noValidate: true,
					className: "mt-10 flex flex-col gap-3 sm:flex-row",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "nl-email",
							className: "sr-only",
							children: "Correo electrónico"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "nl-email",
							type: "email",
							value: email,
							onChange: (e) => {
								setEmail(e.target.value);
								setState("idle");
							},
							placeholder: "tu@correo.com",
							"aria-invalid": state === "error",
							"aria-describedby": "nl-msg",
							className: "h-12 flex-1 border-b border-foreground bg-transparent px-1 outline-none placeholder:text-muted-foreground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "btn-primary",
							children: "Suscribirme"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					id: "nl-msg",
					"aria-live": "polite",
					className: "mt-4 min-h-5 text-sm",
					children: [state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-destructive",
						children: "Escribe un correo electrónico válido."
					}), state === "done" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "¡Gracias por tu interés en Etereal! Esta suscripción es una demostración visual." })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs text-muted-foreground",
					children: "Formulario conceptual. No se almacenarán tus datos."
				})
			]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contacto",
		className: `${wrap} grid scroll-mt-24 gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "display-2",
				children: "Hablemos"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-sm text-muted-foreground",
				children: "Estamos aquí para ayudarte a descubrir piezas que encajen contigo."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-10 space-y-5 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow text-muted-foreground",
						children: "Teléfono y WhatsApp"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "tel:+573200000000",
							className: "link-underline",
							children: "+57 320 000 0000"
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow text-muted-foreground",
						children: "Correo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:hola@eterealboutique.com",
							className: "link-underline",
							children: "hola@eterealboutique.com"
						})
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "eyebrow text-muted-foreground",
						children: "Instagram"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1",
						children: "@etereal.boutique"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
						className: "eyebrow flex items-center gap-2 text-muted-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
							className: "h-3.5 w-3.5",
							strokeWidth: 1.25
						}), " Horario"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
						className: "mt-1 space-y-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lunes a viernes: 10:00 a. m. – 7:00 p. m." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sábado: 10:00 a. m. – 5:00 p. m." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Domingo: cerrado" })
						]
					})] })
				]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col bg-secondary p-8 md:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: "0 0 400 260",
					className: "w-full text-border",
					"aria-hidden": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						stroke: "currentColor",
						strokeWidth: "1.2",
						fill: "none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 60 L400 40" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 140 L400 120" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 210 L400 200" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M80 0 L60 260" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M200 0 L210 260" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 0 L340 260" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M0 250 C120 180 260 220 400 150",
								strokeDasharray: "4 6"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex items-start gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
						className: "mt-0.5 h-5 w-5 shrink-0",
						strokeWidth: 1.25
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl",
						children: "Etereal Boutique"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: "Calle 93 # 13-25, Local 102, Bogotá, Colombia"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-auto pt-8 text-xs text-muted-foreground",
					children: "Los datos de contacto y la ubicación de esta versión son ficticios y se muestran únicamente con fines de demostración."
				})
			]
		})]
	});
}
//#endregion
export { Contact as a, Featured as c, Reviews as d, StyleEditorial as f, CollectionIntro as i, Hero as l, Benefits as n, EditorialBanner as o, TopBar as p, Categories as r, Favorites as s, About as t, Newsletter as u };
