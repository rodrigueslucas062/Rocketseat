import * as Dialog from "@radix-ui/react-dialog";
import { DialogContent } from "@radix-ui/themes";
import { X } from "lucide-react";

const NewNoteCards = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>
        <p className="text-sm leading-6 text-slate-400 ">
          Grave uma nota em áudio que será convertida para texto
          automaticamente.
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/90">
          <DialogContent className="fixed z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
              <X className="size-5" />
            </Dialog.Close>
            <div className="flex flex-1 flex-col gap-3 p-5">
                <span className="text-sm font-medium text-slate-200">Adicionar nota</span>
                <p className="text-sm leading-6 text-slate-400 ">
                Comece <button className="font-medium text-lime-400 hover:underline">gravando uma</button>nota em áudio, ou se preferir
                <button className="font-medium text-lime-400 hover:underline">utilize apenas texto</button>automaticamente.
                </p>
            </div>
            <button type="button" className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500">
              Salvar nota?
            </button>
          </DialogContent>
        </Dialog.DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NewNoteCards;
