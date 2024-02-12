import Image from "next/image";
import Logo from "../../../public/images/Logo.png";
import { NoteCards } from "../notes-cards/NoteCards";
import NewNoteCards from "../notes-cards/NewNoteCard";

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
                <NewNoteCards />
                <NoteCards date={new Date()} content="hello world" />
            </div>
        </div>
    );
};

export default Main;
