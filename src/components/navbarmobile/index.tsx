"use client";
import { handleScrollTo } from "@/hooks/useScroll";
import { Facebook, Instagram, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const list = ["sobre nós", "polegarte", "fale conosco"];
  return (
    <>
      <div className="sticky md:hidden top-0 w-full h-20 bg-white flex justify-between px-4 items-center z-20 drop-shadow-lg">
        <div className="flex items-center">
          <Image
            src="/4.png"
            width={180}
            height={71}
            alt="Logomarca Pequeno polegar!"
          />
        </div>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <nav
        className={`fixed h-screen w-full duration-200 ease-linear flex items-center flex-col justify-center gap-6 bg-white  z-10 ${
          isOpen ? "top-0" : "-top-full"
        }`}
      >
        <ul className="gap-6 flex  flex-col justify-center items-center">
          {list.map((value, i) => (
            <li
              className="tracking-wider uppercase font-extrabold text-sm text-[#4B4646] cursor-pointer  hover:scale-110 hover:text-white duration-200 ease-linear"
              key={i}
              onClick={() => {
                setIsOpen(false);
                handleScrollTo(value);
              }}
            >
              {value}
            </li>
          ))}

          <li>
            <a
              href="#"
              title="Ir para pagina de trabalhe conosco!"
              className="bg-[#FFB200] hover:bg-[#ffb300b2] duration-200 rounded text-[12px] uppercase p-3 text-white font-bold"
            >
              Trabalhe conosco
            </a>
          </li>
        </ul>
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-[#4B4646]">Redes Sociais</span>
          <div className="flex gap-6">
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMobile;
