import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="hidden justify-between max-w-screen-xl md:flex mx-auto py-4 px-2">
      <div className="flex items-center">
        <Image
          src="/4.png"
          width={280}
          height={71}
          alt="Logomarca Pequeno polegar!"
        />
        <Image
          src="/1.png"
          width={103}
          height={80}
          alt="Logo da instituição de ensino!"
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="w-[36px] h-[36px] bg-[#ED002C] hover:bg-[#ed002bcb] duration-200 rounded-full flex items-center justify-center text-white"
          >
            <Facebook size={18} />
          </a>
          <a
            href=""
            target="_blank"
            rel="noreferrer"
            className="w-[36px] h-[36px] bg-[#ED002C] hover:bg-[#ed002bcb] duration-200 rounded-full flex items-center justify-center text-white"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            title="Ir para pagina de trabalhe conosco!"
            className="bg-[#FFB200] hover:bg-[#ffb300b2] duration-200 rounded text-[12px] uppercase p-3 text-white font-bold"
          >
            Trabalhe conosco
          </a>
          <Image
            src="/2.png"
            width={100}
            height={40}
            alt="Logomarca de escola internacional"
          />
        </div>
        <nav>
          <ul className="flex gap-2 justify-between">
            <li className="text-[#4B4646] text-sm font-extrabold uppercase">
              <a href="">Sobre nós</a>
            </li>
            <li className="text-[#4B4646] text-sm font-extrabold uppercase">
              <a href="">Polegarte</a>
            </li>
            <li className="text-[#4B4646] text-sm font-extrabold uppercase">
              <a href="">Fale Conosco</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
