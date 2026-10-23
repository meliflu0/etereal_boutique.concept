import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import type { ReactNode } from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  side?: "right" | "left" | "top";
  children: ReactNode;
  footer?: ReactNode;
}

const sideClass = {
  right: "right-0 top-0 h-full w-full sm:w-[440px] data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
  left: "left-0 top-0 h-full w-[88%] sm:w-[400px] data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
  top: "left-0 top-0 w-full max-h-[90vh] data-[state=open]:slide-in-from-top-4 data-[state=closed]:slide-out-to-top-4",
};

export function Drawer({ open, onClose, title, side = "right", children, footer }: DrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={(o) => !o && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content
          className={`fixed z-50 flex flex-col bg-background shadow-2xl duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out ${sideClass[side]}`}
        >
          <div className="flex items-center justify-between border-b px-6 py-5">
            <Dialog.Title className="font-serif text-2xl">{title}</Dialog.Title>
            <Dialog.Description className="sr-only">{title}</Dialog.Description>
            <Dialog.Close className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-secondary" aria-label="Cerrar">
              <X className="h-5 w-5" strokeWidth={1.25} />
            </Dialog.Close>
          </div>
          <div className="flex-1 overflow-y-auto">{children}</div>
          {footer && <div className="border-t px-6 py-5">{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
