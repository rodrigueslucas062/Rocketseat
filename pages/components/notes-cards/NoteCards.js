import * as Dialog from "@radix-ui/react-dialog";
import { DialogContent } from "@radix-ui/themes";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { X } from "lucide-react";

const NoteCardProps = {
  date: Date,
  content: String,
};

export function NoteCards(NoteCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="flex flex-col rounded-md text-left bg-slate-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">
          {formatDistanceToNow(NoteCardProps.date, {locale: ptBR,  addSuffix: true})}
        </span>
        <p className="text-sm leading-6 text-slate-400 ">
          {NoteCardProps.content}
        </p>
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.DialogOverlay className="inset-0 fixed bg-black/90">
          <DialogContent className="fixed z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] bg-slate-700 rounded-md flex flex-col outline-none overflow-hidden">
            <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
                <X className="size-5"/>
            </Dialog.Close>
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                {formatDistanceToNow(NoteCardProps.date, {locale: ptBR, addSuffix: true,})}
              </span>
              <p className="text-sm leading-6 text-slate-400 ">
                {NoteCardProps.content}
              </p>
            </div>
            <button type="button" className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none font-medium group" >
              Deseja{" "}
              <span className="text-red-400 group-hover:underline">
                apagar essa nota?
              </span>
            </button>
          </DialogContent>
        </Dialog.DialogOverlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
