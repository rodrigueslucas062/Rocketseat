import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import { NoteCards } from "../notes-cards/NoteCards";

const Main = () => {
    return (
        <div className="mx-auto max-w-6xl my-12 space-y-6">
            <Image src={Logo} width={100} height={100} />

            <form className="w-full">
                <input
                    type="text"
                    placeholder="Busque em suas notas..."
                    className="w-full bg-transparent font-semibold tracking-tighter outline-none placeholder:text-slate-500"
                />
            </form>
            <div className="h-px bg-slate-700"></div>
            <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
                <div className="rounded-md bg-slate-700 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600">
                    <span className="text-sm font-medium text-slate-200">
                        Adicionar nota
                    </span>
                    <p className="text-sm leading-6 text-slate-400 ">
                        Grave uma nota em áudio que será convertida para texto automaticamente.
                    </p>
                </div>
                <NoteCards />
                <NoteCards />
                <NoteCards />
                <NoteCards />
            </div>
        </div>
    );
};

export default Main;
