import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

const HELP: Record<string, { title: string; body: string[] }> = {
  Envíos: {
    title: "Envíos",
    body: ["Envíos a toda Colombia en un tiempo estimado de 2 a 5 días hábiles.", "Información de demostración: no constituye una condición comercial."],
  },
  Cambios: {
    title: "Cambios",
    body: ["Cambios fáciles dentro de 30 días, con la prenda en su estado original.", "Información de demostración: no constituye una política real."],
  },
  "Guía de tallas": {
    title: "Guía de tallas",
    body: ["S — busto 82–86 cm · cintura 64–68 cm", "M — busto 87–91 cm · cintura 69–73 cm", "L — busto 92–96 cm · cintura 74–78 cm", "Medidas orientativas de demostración."],
  },
  "Preguntas frecuentes": {
    title: "Preguntas frecuentes",
    body: ["¿Es una tienda real? — No. Es un sitio conceptual; no se procesan pedidos ni pagos.", "¿Se guardan mis datos? — No. El carrito y los favoritos solo se guardan en tu navegador."],
  },
};

export function Footer() {
  const [help, setHelp] = useState<string | null>(null);
  const info = help ? HELP[help] : null;
  const col = "eyebrow mb-5 text-muted-foreground";
  const link = "text-sm link-underline";
  return (
    <footer className="bg-secondary">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 md:grid-cols-2 md:px-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <div className="inline-block"><Logo /></div>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">Piezas sencillas, detalles delicados y una forma de vestir que se siente como tú.</p>
        </div>
        <div>
          <p className={col}>Explorar</p>
          <ul className="space-y-3">
            <li><Link to="/" hash="inicio" className={link}>Inicio</Link></li>
            <li><Link to="/" hash="nueva-coleccion" className={link}>Nueva colección</Link></li>
            <li><Link to="/coleccion" search={{ cat: "Vestidos" }} className={link}>Ropa</Link></li>
            <li><Link to="/coleccion" search={{ cat: "Accesorios" }} className={link}>Accesorios</Link></li>
            <li><Link to="/producto/$slug" params={{ slug: "vestido-aura" }} className={link}>Producto destacado</Link></li>
          </ul>
        </div>
        <div>
          <p className={col}>Ayuda</p>
          <ul className="space-y-3">
            {Object.keys(HELP).map((k) => (
              <li key={k}><button onClick={() => setHelp(k)} className={link}>{k}</button></li>
            ))}
            <li><Link to="/" hash="contacto" className={link}>Contacto</Link></li>
          </ul>
        </div>
        <div>
          <p className={col}>Síguenos</p>
          <ul className="space-y-3 text-sm">
            <li>Instagram <span className="text-muted-foreground">(demo)</span></li>
            <li>TikTok <span className="text-muted-foreground">(demo)</span></li>
            <li>WhatsApp <span className="text-muted-foreground">(demo)</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:justify-between md:px-10">
          <p>Sitio conceptual. Los productos, precios, reseñas y datos de contacto son ficticios.</p>
          <p>© {new Date().getFullYear()} ETEREAL BOUTIQUE</p>
        </div>
      </div>

      <Dialog.Root open={!!info} onOpenChange={(o) => !o && setHelp(null)}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay animate-in fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-background p-8 shadow-2xl animate-in fade-in-0 zoom-in-95">
            <Dialog.Title className="font-serif text-3xl">{info?.title}</Dialog.Title>
            <Dialog.Description asChild>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {info?.body.map((b) => <p key={b}>{b}</p>)}
              </div>
            </Dialog.Description>
            <Dialog.Close aria-label="Cerrar" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
              <X className="h-4 w-4" strokeWidth={1.25} />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </footer>
  );
}
