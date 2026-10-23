import { r as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as useNavigate, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { b as Clock, d as RefreshCw, f as Plus, h as Menu, m as MessageCircle, p as Minus, r as Trash2, s as ShoppingBag, t as X, u as Search, v as Heart, x as ChevronDown } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay, i as DialogDescription, n as DialogClose, o as DialogPortal, r as DialogContent, s as DialogTitle, t as Dialog } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as useStore, g as searchProducts, h as products, m as getProduct, p as formatCOP, t as FavButton } from "./ProductCard-DOYjxA13.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductBuy-zC0JxHPg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		"aria-label": "ETEREAL BOUTIQUE, inicio",
		className: "inline-flex flex-col items-center leading-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `font-serif tracking-[0.28em] text-foreground transition-all duration-500 ${compact ? "text-xl md:text-2xl" : "text-2xl md:text-[2rem]"}`,
			children: "ETEREAL"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-1 text-[0.58rem] font-light tracking-[0.55em] text-muted-foreground",
			children: "BOUTIQUE"
		})]
	});
}
var NAV = [
	{
		label: "Inicio",
		hash: "inicio"
	},
	{
		label: "Nueva colección",
		hash: "nueva-coleccion"
	},
	{
		label: "Ropa",
		hash: "coleccion",
		sub: [
			{
				label: "Vestidos",
				cat: "Vestidos"
			},
			{
				label: "Blusas",
				cat: "Blusas"
			},
			{
				label: "Faldas",
				cat: "Faldas"
			}
		]
	},
	{
		label: "Accesorios",
		hash: "coleccion",
		sub: [{
			label: "Bolsos",
			cat: "Accesorios"
		}, {
			label: "Aretes",
			cat: "Accesorios"
		}]
	},
	{
		label: "Producto destacado",
		hash: "destacado"
	},
	{
		label: "Nosotros",
		hash: "nosotros"
	},
	{
		label: "Contacto",
		hash: "contacto"
	}
];
function Dropdown({ label, items }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onDoc = (e) => !ref.current?.contains(e.target) && setOpen(false);
		const onKey = (e) => e.key === "Escape" && setOpen(false);
		document.addEventListener("mousedown", onDoc);
		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("mousedown", onDoc);
			document.removeEventListener("keydown", onKey);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "relative",
		onMouseLeave: () => setOpen(false),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			"aria-expanded": open,
			"aria-haspopup": "true",
			onClick: () => setOpen((o) => !o),
			onMouseEnter: () => setOpen(true),
			className: "flex items-center gap-1 py-2 text-[0.74rem] tracking-[0.06em] link-underline",
			children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
				className: `h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`,
				strokeWidth: 1.25
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute left-0 top-full z-40 min-w-44 border bg-background py-3 shadow-sm animate-in fade-in-0 slide-in-from-top-1",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/coleccion",
				search: { cat: i.cat },
				onClick: () => setOpen(false),
				className: "block px-5 py-2 text-sm transition-colors hover:bg-secondary",
				children: i.label
			}, i.label))
		})]
	});
}
function Header() {
	const { count, favorites, open } = useStore();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const iconBtn = "relative grid h-11 w-11 place-items-center rounded-full transition-colors hover:bg-secondary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: `sticky top-0 z-40 transition-[background,box-shadow,padding] duration-500 ${scrolled ? "bg-background py-2 shadow-[0_1px_0_var(--color-border)]" : "bg-background/0 py-5"}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 md:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `${iconBtn} lg:hidden`,
						"aria-label": "Abrir menú",
						onClick: () => open("menu"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
							className: "h-5 w-5",
							strokeWidth: 1.25
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": "Principal",
						className: "hidden items-center gap-4 whitespace-nowrap lg:flex xl:gap-5",
						children: NAV.slice(0, 5).map((n) => "sub" in n ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
							label: n.label,
							items: [...n.sub]
						}, n.label) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							hash: n.hash,
							className: "py-2 text-[0.74rem] tracking-[0.06em] link-underline",
							children: n.label
						}, n.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { compact: scrolled }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							"aria-label": "Secundaria",
							className: "mr-3 hidden items-center gap-5 whitespace-nowrap xl:flex",
							children: NAV.slice(5).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								hash: n.hash,
								className: "py-2 text-[0.74rem] tracking-[0.06em] link-underline",
								children: n.label
							}, n.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `${iconBtn} hidden sm:grid`,
							"aria-label": "Buscar",
							onClick: () => open("search"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
								className: "h-[18px] w-[18px]",
								strokeWidth: 1.25
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: `${iconBtn} hidden sm:grid`,
							"aria-label": `Favoritos, ${favorites.length} guardados`,
							onClick: () => open("favorites"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
								className: "h-[18px] w-[18px]",
								strokeWidth: 1.25
							}), favorites.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-foreground" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: iconBtn,
							"aria-label": `Carrito, ${count} productos`,
							onClick: () => open("cart"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
								className: "h-[18px] w-[18px]",
								strokeWidth: 1.25
							}), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-0.5 top-0.5 grid h-[18px] min-w-[18px] place-items-center rounded-full bg-primary px-1 text-[0.62rem] text-primary-foreground",
								children: count
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/coleccion",
							className: "ml-3 hidden whitespace-nowrap text-[0.78rem] tracking-[0.08em] 2xl:inline-flex btn-outline !min-h-10 !px-5",
							children: "Ver colección"
						})
					]
				})
			]
		})
	});
}
var sideClass = {
	right: "right-0 top-0 h-full w-full sm:w-[440px] data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
	left: "left-0 top-0 h-full w-[88%] sm:w-[400px] data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
	top: "left-0 top-0 w-full max-h-[90vh] data-[state=open]:slide-in-from-top-4 data-[state=closed]:slide-out-to-top-4"
};
function Drawer({ open, onClose, title, side = "right", children, footer }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (o) => !o && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, { className: "fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: `fixed z-50 flex flex-col bg-background shadow-2xl duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out ${sideClass[side]}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between border-b px-6 py-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
							className: "font-serif text-2xl",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, {
							className: "sr-only",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogClose, {
							className: "grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-secondary",
							"aria-label": "Cerrar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "h-5 w-5",
								strokeWidth: 1.25
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto",
					children
				}),
				footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t px-6 py-5",
					children: footer
				})
			]
		})] })
	});
}
function QtyControl({ qty, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "inline-flex items-center border",
		role: "group",
		"aria-label": `Cantidad de ${label}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "grid h-9 w-9 place-items-center disabled:opacity-40",
				"aria-label": "Reducir cantidad",
				disabled: qty <= 1,
				onClick: () => onChange(qty - 1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {
					className: "h-3.5 w-3.5",
					strokeWidth: 1.25
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-8 text-center text-sm",
				"aria-live": "polite",
				children: qty
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "grid h-9 w-9 place-items-center",
				"aria-label": "Aumentar cantidad",
				onClick: () => onChange(qty + 1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {
					className: "h-3.5 w-3.5",
					strokeWidth: 1.25
				})
			})
		]
	});
}
function useGoCollection() {
	const navigate = useNavigate();
	const { close } = useStore();
	return () => {
		close();
		navigate({
			to: "/",
			hash: "coleccion"
		});
	};
}
function CartPanel() {
	const { items, total, panel, close, updateQty, remove, open } = useStore();
	const goCollection = useGoCollection();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer, {
		open: panel === "cart",
		onClose: close,
		title: "Tu carrito",
		footer: items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-muted-foreground",
						children: "Total estimado"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg",
						children: formatCOP(total)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-primary w-full",
					onClick: () => open("checkout"),
					children: "Continuar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-xs text-muted-foreground",
					children: "Tienda conceptual: no se realizan pagos."
				})
			]
		}),
		children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col items-center justify-center gap-6 px-8 py-20 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-serif text-3xl leading-tight",
				children: "Tu carrito está esperando algo especial."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "link-underline text-sm tracking-[0.08em]",
				onClick: goCollection,
				children: "Explorar colección"
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y",
			children: items.map((item, i) => {
				const p = getProduct(item.slug);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 px-6 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.images[0],
						alt: p.name,
						className: "h-28 w-22 shrink-0 object-cover",
						width: 88,
						height: 112,
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col gap-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-serif text-xl",
									children: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": `Eliminar ${p.name}`,
									onClick: () => remove(i),
									className: "text-muted-foreground hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, {
										className: "h-4 w-4",
										strokeWidth: 1.25
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [
									item.color,
									" · Talla ",
									item.size
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-muted-foreground",
								children: [formatCOP(p.price), " c/u"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto flex items-center justify-between pt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
									qty: item.qty,
									onChange: (n) => updateQty(i, n),
									label: p.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: formatCOP(p.price * item.qty)
								})]
							})
						]
					})]
				}, `${item.slug}-${item.color}-${item.size}`);
			})
		})
	});
}
function CheckoutPanel() {
	const { items, total, panel, close, open } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer, {
		open: panel === "checkout",
		onClose: close,
		title: "Resumen del pedido",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-6 px-6 py-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "bg-blush px-4 py-3 text-sm",
					children: "Este proceso de compra es una demostración. No se solicitan datos de pago ni se realiza ningún cobro."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-sm",
					children: items.map((i) => {
						const p = getProduct(i.slug);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								i.qty,
								" × ",
								p.name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [
										"(",
										i.color,
										", ",
										i.size,
										")"
									]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatCOP(p.price * i.qty) })]
						}, `${i.slug}-${i.color}-${i.size}`);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-between border-t pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Total estimado"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatCOP(total) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-outline w-full",
					onClick: () => open("cart"),
					children: "Volver al carrito"
				})
			]
		})
	});
}
function FavoritesPanel() {
	const { favorites, panel, close, toggleFavorite } = useStore();
	const goCollection = useGoCollection();
	const list = products.filter((p) => favorites.includes(p.slug));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer, {
		open: panel === "favorites",
		onClose: close,
		title: "Favoritos",
		children: list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col items-center justify-center gap-6 px-8 py-20 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
					className: "h-6 w-6 text-muted-foreground",
					strokeWidth: 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-serif text-3xl leading-tight",
					children: "Guarda aquí las piezas que más te gustan."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-outline",
					onClick: goCollection,
					children: "Explorar colección"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "divide-y",
			children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center gap-4 px-6 py-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: p.images[0],
						alt: p.name,
						className: "h-24 w-20 object-cover",
						loading: "lazy",
						width: 80,
						height: 96
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/producto/$slug",
							params: { slug: p.slug },
							onClick: close,
							className: "font-serif text-xl link-underline",
							children: p.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: formatCOP(p.price)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": `Quitar ${p.name} de favoritos`,
						onClick: () => toggleFavorite(p.slug),
						className: "grid h-10 w-10 place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "h-4 w-4",
							strokeWidth: 1.25
						})
					})
				]
			}, p.slug))
		})
	});
}
var SUGGESTIONS = [
	"Vestido",
	"Blusa",
	"Accesorios",
	"Bolso",
	"Rosa",
	"Beige"
];
function SearchPanel() {
	const { panel, close } = useStore();
	const [q, setQ] = (0, import_react.useState)("");
	const inputRef = (0, import_react.useRef)(null);
	const results = searchProducts(q);
	(0, import_react.useEffect)(() => {
		if (panel === "search") setTimeout(() => inputRef.current?.focus(), 50);
		else setQ("");
	}, [panel]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer, {
		open: panel === "search",
		onClose: close,
		title: "Buscar",
		side: "top",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-6 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-3 border-b border-foreground pb-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "h-5 w-5",
							strokeWidth: 1.25
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Buscar piezas"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							ref: inputRef,
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "Vestido, blusa, rosa…",
							className: "w-full bg-transparent font-serif text-3xl outline-none placeholder:text-muted-foreground/60"
						}),
						q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setQ(""),
							"aria-label": "Borrar búsqueda",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "h-4 w-4",
								strokeWidth: 1.25
							})
						})
					]
				}),
				!q && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap gap-2",
					children: SUGGESTIONS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setQ(s),
						className: "rounded-full border px-4 py-1.5 text-sm transition-colors hover:bg-lavender",
						children: s
					}, s))
				}),
				q && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-10 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-serif text-2xl",
						children: "No encontramos piezas para esa búsqueda."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setQ(""),
						className: "mt-4 text-sm link-underline",
						children: "Borrar y seguir explorando"
					})]
				}),
				results.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3",
					children: results.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/producto/$slug",
						params: { slug: p.slug },
						onClick: close,
						className: "group block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "aspect-[4/5] overflow-hidden bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.images[0],
									alt: p.name,
									className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]",
									loading: "lazy"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-serif text-lg",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: formatCOP(p.price)
							})
						]
					}) }, p.slug))
				})
			]
		})
	});
}
function MobileMenu() {
	const { panel, close, open } = useStore();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer, {
		open: panel === "menu",
		onClose: close,
		title: "Menú",
		side: "left",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Menú móvil",
			className: "flex flex-col px-6 py-6",
			children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-b py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					hash: n.hash,
					onClick: close,
					className: "font-serif text-2xl",
					children: n.label
				}), "sub" in n && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-wrap gap-x-4 gap-y-1",
					children: n.sub.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/coleccion",
						search: { cat: s.cat },
						onClick: close,
						className: "text-sm text-muted-foreground",
						children: s.label
					}, s.label))
				})]
			}, n.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-outline flex-1",
					onClick: () => open("search"),
					children: "Buscar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-outline flex-1",
					onClick: () => open("favorites"),
					children: "Favoritos"
				})]
			})]
		})
	});
}
function Panels() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartPanel, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckoutPanel, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavoritesPanel, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchPanel, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MobileMenu, {})
	] });
}
function ProductBuy({ product, onDetails }) {
	const { add, open } = useStore();
	const [color, setColor] = (0, import_react.useState)(product.colors[0]?.name ?? "");
	const [size, setSize] = (0, import_react.useState)(product.sizes.length === 1 ? product.sizes[0] ?? null : null);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [error, setError] = (0, import_react.useState)(false);
	const handleAdd = () => {
		if (!size) {
			setError(true);
			return;
		}
		add({
			slug: product.slug,
			color,
			size,
			qty
		});
		toast(`${product.name} añadido a tu carrito.`, { action: {
			label: "Ver carrito",
			onClick: () => open("cart")
		} });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow text-muted-foreground",
			children: product.category
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "display-2 mt-3",
			children: product.name
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-baseline gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xl",
				children: formatCOP(product.price)
			}), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-sm text-muted-foreground line-through",
				children: formatCOP(product.oldPrice)
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-6 max-w-md leading-relaxed text-muted-foreground",
			children: product.longDescription
		}),
		product.colors.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
			className: "mt-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
				className: "eyebrow mb-3",
				children: ["Color · ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "normal-case tracking-normal text-muted-foreground",
					children: color
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex gap-3",
				children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": c.name,
					"aria-pressed": color === c.name,
					onClick: () => setColor(c.name),
					className: `h-9 w-9 rounded-full p-1 ring-1 transition-all ${color === c.name ? "ring-foreground" : "ring-transparent hover:ring-border"}`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block h-full w-full rounded-full border",
						style: { background: c.swatch }
					})
				}, c.name))
			})]
		}),
		product.sizes.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
			className: "mt-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "eyebrow mb-3",
					children: "Talla"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: product.sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-pressed": size === s,
						onClick: () => {
							setSize(s);
							setError(false);
						},
						className: `h-11 w-14 border text-sm transition-colors ${size === s ? "border-primary bg-primary text-primary-foreground" : "hover:border-foreground"}`,
						children: s
					}, s))
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					role: "alert",
					className: "mt-3 text-sm text-destructive",
					children: "Selecciona una talla para continuar."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-7 flex flex-wrap items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QtyControl, {
					qty,
					onChange: setQty,
					label: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "btn-primary flex-1",
					onClick: handleAdd,
					children: "Agregar al carrito"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavButton, {
					slug: product.slug,
					name: product.name,
					className: "!bg-secondary"
				})
			]
		}),
		onDetails && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: onDetails,
			className: "mt-4 text-sm link-underline",
			children: "Ver detalles"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
			className: "mt-8 space-y-2.5 border-t pt-6 text-sm text-muted-foreground",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
						className: "h-4 w-4",
						strokeWidth: 1.25
					}), " Envío estimado: 2 a 5 días hábiles*"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
						className: "h-4 w-4",
						strokeWidth: 1.25
					}), " Cambios disponibles*"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
						className: "h-4 w-4",
						strokeWidth: 1.25
					}), " Atención por WhatsApp*"]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-xs text-muted-foreground",
			children: "*Condiciones de demostración."
		})
	] });
}
//#endregion
export { ProductBuy as i, Logo as n, Panels as r, Header as t };
