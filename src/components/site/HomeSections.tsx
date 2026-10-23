import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock, HeartHandshake, Leaf, MapPin, MessageCircle, RefreshCw, ShieldCheck, Shirt, Sparkles, Star, Sun, Truck } from "lucide-react";
import { useState, type FormEvent } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import heroFondo from "@/assets/hero-fondo.jpg";
import aura from "@/assets/aura.jpg";
import auraDetalle from "@/assets/aura-detalle.jpg";
import blusa from "@/assets/blusa.jpg";
import falda from "@/assets/falda.jpg";
import bolso from "@/assets/bolso.jpg";
import coleccion from "@/assets/coleccion.jpg";
import banner from "@/assets/banner.jpg";
import nosotros from "@/assets/nosotros.jpg";
import ocasion from "@/assets/estilo-ocasion.jpg";
import combinacion from "@/assets/estilo-combinacion.jpg";
import { getProduct, formatCOP, type Category, type SortKey } from "@/lib/catalog";
import { CatalogGrid } from "./CatalogGrid";
import { ProductBuy } from "./ProductBuy";
import { Reveal } from "./Reveal";

const wrap = "mx-auto max-w-[1440px] px-5 md:px-10";

export function TopBar() {
  return (
    <div className="bg-primary px-4 py-2 text-center text-[0.72rem] tracking-[0.12em] text-primary-foreground">
      Piezas sencillas para sentirte tú, todos los días.
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[88vh] scroll-mt-24 items-end overflow-hidden pb-16 pt-28 md:min-h-[94vh] md:items-center md:pb-24 md:pt-32">
      {/* La foto es el fondo del texto, no un bloque aparte */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroFondo}
          alt="Modelo con vestido de lino crema en una galería luminosa"
          width={1376}
          height={768}
          className="h-full w-full object-cover object-[26%_50%] md:object-[50%_50%] animate-soft-zoom"
        />
        {/* Veladuras que funden la foto con el fondo de la página y aclaran la zona del texto */}
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background/45 to-transparent md:via-background/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className={`${wrap} w-full`}>
        <div className="ml-auto max-w-xl md:max-w-md lg:max-w-xl">
          <span className="eyebrow inline-block bg-blush px-3 py-1.5 animate-rise">Nueva colección</span>
          <h1 className="display-1 mt-7 animate-rise [animation-delay:120ms]">
            Moda femenina sencilla, <em className="font-light italic text-foreground/85 drop-shadow-sm">con un toque etéreo</em>
          </h1>
          <p className="mt-7 max-w-md text-base leading-relaxed text-foreground/90 md:text-lg animate-rise [animation-delay:260ms] drop-shadow-sm">
            Descubre prendas versátiles y accesorios delicados para crear outfits que se sientan como tú.
          </p>
          <div className="mt-9 flex flex-wrap gap-3 animate-rise [animation-delay:400ms]">
            <Link to="/" hash="coleccion" className="btn-primary">Comprar ahora</Link>
            <Link to="/" hash="destacado" className="btn-outline">Ver producto destacado</Link>
          </div>
          <p className="mt-12 hidden font-serif text-sm italic text-muted-foreground md:block animate-rise [animation-delay:520ms]">
            — Colección Luz de Otoño, Nº 01
          </p>
        </div>
      </div>

      <span className="eyebrow absolute bottom-16 left-3 hidden origin-bottom-left -rotate-90 text-muted-foreground lg:block">Etereal · 2026</span>
    </section>
  );
}

const BENEFITS = [
  { icon: Truck, label: "Envíos a toda Colombia*" },
  { icon: RefreshCw, label: "Cambios fáciles dentro de 30 días*" },
  { icon: MessageCircle, label: "Atención personalizada por WhatsApp" },
  { icon: ShieldCheck, label: "Pagos seguros*" },
];
export function Benefits() {
  return (
    <section aria-label="Beneficios" className="bg-secondary">
      <ul className={`${wrap} grid grid-cols-2 gap-y-6 py-8 md:grid-cols-4`}>
        {BENEFITS.map(({ icon: Icon, label }) => (
          <li key={label} className="flex flex-col items-center gap-2 px-2 text-center text-[0.8rem] md:flex-row md:justify-center md:gap-3">
            <Icon className="h-5 w-5 shrink-0" strokeWidth={1.1} />
            {label}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function CollectionIntro() {
  return (
    <section id="nueva-coleccion" className={`${wrap} scroll-mt-24 py-24 md:py-36`}>
      <Reveal className="grid gap-8 md:grid-cols-[1fr_2fr]">
        <p className="eyebrow pt-3 text-muted-foreground">Descubre Etereal</p>
        <div className="max-w-2xl">
          <h2 className="display-2">Menos complicaciones. Más estilo.</h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Una selección de prendas y accesorios pensados para acompañarte en cada momento, con la sencillez como punto de partida.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

function CatTile({ img, label, cat, className = "", pos = "50% 30%" }: { img: string; label: string; cat?: Category; className?: string; pos?: string }) {
  return (
    <Link to="/coleccion" search={cat ? { cat } : {}} className={`group relative block overflow-hidden bg-secondary ${className}`}>
      <img src={img} alt={label} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-soft group-hover:scale-[1.04] group-hover:contrast-[1.04]" style={{ objectPosition: pos }} />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-foreground/45 to-transparent p-5 text-primary-foreground md:p-7">
        <span className="font-serif text-3xl transition-transform duration-500 group-hover:-translate-y-0.5 md:text-4xl">{label}</span>
        <span className="flex items-center gap-2 text-xs tracking-[0.12em]">
          Explorar <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
        </span>
      </div>
    </Link>
  );
}

export function Categories() {
  return (
    <section aria-label="Categorías" className={`${wrap} pb-24 md:pb-36`}>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-[300px_300px] md:gap-5">
        <CatTile img={aura} label="Vestidos" cat="Vestidos" className="col-span-2 aspect-[4/5] md:col-span-5 md:row-span-2 md:aspect-auto" pos="50% 20%" />
        <CatTile img={blusa} label="Blusas" cat="Blusas" className="aspect-[3/4] md:col-span-4 md:aspect-auto" pos="50% 25%" />
        <CatTile img={bolso} label="Accesorios" cat="Accesorios" className="aspect-[3/4] md:col-span-3 md:row-span-2 md:aspect-auto" />
        <CatTile img={falda} label="Faldas" cat="Faldas" className="aspect-[3/4] md:col-span-2 md:aspect-auto" pos="50% 40%" />
        <CatTile img={coleccion} label="Nueva colección" className="aspect-[3/4] md:col-span-2 md:aspect-auto" pos="50% 20%" />
      </div>
    </section>
  );
}

export function Featured() {
  const p = getProduct("vestido-aura")!;
  const [details, setDetails] = useState(false);
  return (
    <section id="destacado" className="scroll-mt-24 bg-secondary py-20 md:py-32">
      <div className={`${wrap} grid gap-12 md:grid-cols-[1.15fr_1fr] md:gap-20`}>
        <div className="relative grid grid-cols-[2fr_1fr] gap-3 md:gap-5">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={aura} alt="Vestido Aura en beige, silueta completa" loading="lazy" width={896} height={1152} className="h-full w-full object-cover" />
            <span className="eyebrow absolute left-4 top-4 bg-background px-3 py-1.5 !text-[0.62rem]">Producto destacado</span>
          </div>
          <div className="flex flex-col gap-3 md:gap-5">
            <div className="aspect-[3/4] overflow-hidden">
              <img src={auraDetalle} alt="Detalle del tejido satinado del Vestido Aura" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <p className="font-serif text-lg italic leading-snug text-muted-foreground">Ligero, fluido, del día a la noche.</p>
          </div>
        </div>
        <Reveal className="md:pt-8">
          <ProductBuy product={p} onDetails={() => setDetails(true)} />
        </Reveal>
      </div>

      <Dialog.Root open={details} onOpenChange={setDetails}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay animate-in fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-[92vw] max-w-lg -translate-x-1/2 -translate-y-1/2 overflow-y-auto bg-background p-8 shadow-2xl animate-in fade-in-0 zoom-in-95">
            <Dialog.Title className="font-serif text-3xl">{p.name}</Dialog.Title>
            <Dialog.Description className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.longDescription}</Dialog.Description>
            <dl className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between border-b pb-2"><dt>Precio</dt><dd>{formatCOP(p.price)}</dd></div>
              <div className="flex justify-between border-b pb-2"><dt>Colores</dt><dd>{p.colors.map((c) => c.name).join(", ")}</dd></div>
              <div className="flex justify-between border-b pb-2"><dt>Tallas</dt><dd>{p.sizes.join(", ")}</dd></div>
              <div className="flex justify-between border-b pb-2"><dt>Tejido</dt><dd>Tela suave y fresca</dd></div>
              <div className="flex justify-between"><dt>Corte</dt><dd>Midi</dd></div>
            </dl>
            <Link to="/producto/$slug" params={{ slug: p.slug }} className="btn-outline mt-6 w-full">Ver página del producto</Link>
            <Dialog.Close aria-label="Cerrar" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
              <X className="h-4 w-4" strokeWidth={1.25} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

export function Favorites() {
  const [cat, setCat] = useState<Category | "Todos">("Todos");
  const [sort, setSort] = useState<SortKey>("recomendados");
  return (
    <section id="coleccion" className={`${wrap} scroll-mt-24 py-24 md:py-32`}>
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="display-2">Nuestros favoritos</h2>
          <p className="mt-4 max-w-md text-muted-foreground">Prendas y pequeños detalles para crear combinaciones que se sienten como tú.</p>
        </div>
        <Link to="/coleccion" className="text-sm tracking-[0.08em] link-underline">Ver toda la colección</Link>
      </div>
      <CatalogGrid category={cat} sort={sort} onCategory={setCat} onSort={setSort} />
      <p className="mt-10 text-xs text-muted-foreground">Productos y precios de demostración.</p>
    </section>
  );
}

export function EditorialBanner() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-[1.6fr_1fr]">
        <div className="aspect-[4/3] overflow-hidden md:aspect-auto md:min-h-[640px]">
          <img src={banner} alt="Modelo con vestido rosa pálido caminando en un patio soleado" loading="lazy" className="h-full w-full object-cover object-[70%_50%]" />
        </div>
        <div className="flex items-center bg-secondary px-6 py-16 md:px-14">
          <Reveal className="max-w-sm">
            <p className="eyebrow text-muted-foreground">Editorial</p>
            <h2 className="display-2 mt-5">El arte de vestir con sencillez.</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Menos ruido, más esencia. Descubre prendas que se adaptan a tu ritmo y pequeños detalles que transforman cualquier look.
            </p>
            <Link to="/" hash="coleccion" className="mt-8 inline-flex items-center gap-2 text-sm tracking-[0.08em] link-underline">
              Descubrir la colección <ArrowRight className="h-4 w-4" strokeWidth={1.25} />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const VALUES = [
  { icon: Sparkles, label: "Estética limpia" },
  { icon: Leaf, label: "Comodidad" },
  { icon: Shirt, label: "Versatilidad" },
  { icon: HeartHandshake, label: "Atención cercana" },
  { icon: Sun, label: "Moda femenina atemporal" },
];
export function About() {
  return (
    <section id="nosotros" className={`${wrap} grid scroll-mt-24 gap-12 py-24 md:grid-cols-[1fr_1.2fr] md:gap-20 md:py-36`}>
      <div className="aspect-[4/5] overflow-hidden md:order-2">
        <img src={nosotros} alt="Interior de la boutique con prendas de lino en tonos naturales" loading="lazy" className="h-full w-full object-cover" />
      </div>
      <Reveal className="flex flex-col justify-center md:order-1">
        <p className="eyebrow text-muted-foreground">Sobre Etereal</p>
        <h2 className="display-2 mt-5 max-w-md">Ropa que acompaña tu día a día</h2>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          En Etereal Boutique creemos que la moda no necesita ser complicada. Creamos una selección de prendas y accesorios sencillos, pensados para combinarse entre sí y adaptarse a diferentes momentos.
        </p>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t pt-8 sm:grid-cols-3">
          {VALUES.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm">
              <Icon className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.25} /> {label}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

const LOOKS = [
  { img: falda, title: "Para el día a día", note: "Sencillo por naturaleza.", slug: "falda-serenidad", offset: "" },
  { img: ocasion, title: "Una ocasión especial", note: "Detalles que hablan por ti.", slug: "aretes-nube", offset: "md:mt-20" },
  { img: combinacion, title: "Prendas y accesorios", note: "Tu estilo, a tu manera.", slug: "bolso-eter", offset: "md:mt-8" },
];
export function StyleEditorial() {
  return (
    <section className="bg-muted py-24 md:py-32">
      <div className={wrap}>
        <h2 className="display-2 max-w-xl">Pequeños detalles, grandes combinaciones</h2>
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {LOOKS.map((l, i) => (
            <Reveal key={l.title} delay={i * 120} className={l.offset}>
              <div className="aspect-[4/5] overflow-hidden">
                <img src={l.img} alt={l.title} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <p className="mt-5 font-serif text-2xl italic">{l.note}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l.title}</p>
              <Link to="/producto/$slug" params={{ slug: l.slug }} className="mt-3 inline-block text-sm link-underline">
                Ver {getProduct(l.slug)!.name}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const REVIEWS = [
  { text: "Las prendas son hermosas y la atención fue excelente.", name: "Valentina R." },
  { text: "Me encantó la calidad y el estilo sencillo de la tienda.", name: "Camila M." },
  { text: "Los accesorios combinan con todo. Volveré por más.", name: "Laura G." },
  { text: "El Vestido Aura es precioso, la tela se siente muy cómoda.", name: "Sofía T." },
];
export function Reviews() {
  const [all, setAll] = useState(false);
  const list = all ? REVIEWS : REVIEWS.slice(0, 3);
  return (
    <section className={`${wrap} py-24 md:py-32`}>
      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <h2 className="display-2">Lo que dicen nuestras clientas</h2>
        <p className="text-xs text-muted-foreground">Reseñas de demostración, no verificadas.</p>
      </div>
      <ul className="mt-12 grid gap-px bg-border md:grid-cols-3">
        {list.map((r) => (
          <li key={r.name} className="flex flex-col gap-6 bg-background p-8 md:p-10">
            <div className="flex gap-1" aria-label="Valoración visual de demostración">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5" strokeWidth={1.25} />)}
            </div>
            <p className="font-serif text-2xl leading-snug">“{r.text}”</p>
            <p className="mt-auto text-sm text-muted-foreground">— {r.name}</p>
          </li>
        ))}
      </ul>
      {!all && (
        <button onClick={() => setAll(true)} className="btn-outline mt-10">Ver más reseñas</button>
      )}
    </section>
  );
}

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "error" | "done">("idle");
  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) return setState("error");
    setState("done");
    setEmail("");
  };
  return (
    <section className="bg-accent/60 py-24 md:py-32">
      <div className="mx-auto max-w-xl px-5 text-center">
        <h2 className="display-2">Únete al universo Etereal</h2>
        <p className="mt-5 text-muted-foreground">Recibe novedades, lanzamientos y recomendaciones de estilo.</p>
        <form onSubmit={submit} noValidate className="mt-10 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="nl-email" className="sr-only">Correo electrónico</label>
          <input
            id="nl-email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setState("idle"); }}
            placeholder="tu@correo.com"
            aria-invalid={state === "error"}
            aria-describedby="nl-msg"
            className="h-12 flex-1 border-b border-foreground bg-transparent px-1 outline-none placeholder:text-muted-foreground"
          />
          <button type="submit" className="btn-primary">Suscribirme</button>
        </form>
        <div id="nl-msg" aria-live="polite" className="mt-4 min-h-5 text-sm">
          {state === "error" && <p className="text-destructive">Escribe un correo electrónico válido.</p>}
          {state === "done" && <p>¡Gracias por tu interés en Etereal! Esta suscripción es una demostración visual.</p>}
        </div>
        <p className="mt-2 text-xs text-muted-foreground">Formulario conceptual. No se almacenarán tus datos.</p>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contacto" className={`${wrap} grid scroll-mt-24 gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32`}>
      <div>
        <h2 className="display-2">Hablemos</h2>
        <p className="mt-5 max-w-sm text-muted-foreground">Estamos aquí para ayudarte a descubrir piezas que encajen contigo.</p>
        <dl className="mt-10 space-y-5 text-sm">
          <div><dt className="eyebrow text-muted-foreground">Teléfono y WhatsApp</dt><dd className="mt-1"><a href="tel:+573200000000" className="link-underline">+57 320 000 0000</a></dd></div>
          <div><dt className="eyebrow text-muted-foreground">Correo</dt><dd className="mt-1"><a href="mailto:hola@eterealboutique.com" className="link-underline">hola@eterealboutique.com</a></dd></div>
          <div><dt className="eyebrow text-muted-foreground">Instagram</dt><dd className="mt-1">@etereal.boutique</dd></div>
          <div>
            <dt className="eyebrow flex items-center gap-2 text-muted-foreground"><Clock className="h-3.5 w-3.5" strokeWidth={1.25} /> Horario</dt>
            <dd className="mt-1 space-y-0.5">
              <p>Lunes a viernes: 10:00 a. m. – 7:00 p. m.</p>
              <p>Sábado: 10:00 a. m. – 5:00 p. m.</p>
              <p>Domingo: cerrado</p>
            </dd>
          </div>
        </dl>
      </div>
      <div className="flex flex-col bg-secondary p-8 md:p-12">
        <svg viewBox="0 0 400 260" className="w-full text-border" aria-hidden>
          <g stroke="currentColor" strokeWidth="1.2" fill="none">
            <path d="M0 60 L400 40" /><path d="M0 140 L400 120" /><path d="M0 210 L400 200" />
            <path d="M80 0 L60 260" /><path d="M200 0 L210 260" /><path d="M320 0 L340 260" />
            <path d="M0 250 C120 180 260 220 400 150" strokeDasharray="4 6" />
          </g>
        </svg>
        <div className="mt-8 flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0" strokeWidth={1.25} />
          <div>
            <p className="font-serif text-2xl">Etereal Boutique</p>
            <p className="mt-1 text-sm text-muted-foreground">Calle 93 # 13-25, Local 102, Bogotá, Colombia</p>
          </div>
        </div>
        <p className="mt-auto pt-8 text-xs text-muted-foreground">
          Los datos de contacto y la ubicación de esta versión son ficticios y se muestran únicamente con fines de demostración.
        </p>
      </div>
    </section>
  );
}
