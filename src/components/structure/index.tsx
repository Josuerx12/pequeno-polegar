import Image from "next/image";
import React from "react";

const Structure = () => {
  return (
    <div className="relative w-full h-screen bg-neutral-800 bg-no-repeat bg-cover group">
      <Image
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 md:opacity-0 md:group-hover:opacity-50 transition-opacity duration-300"
        src="/3.png"
        width={1920}
        height={690}
        alt="Estrutura do colégio!"
      />
      <div className="relative z-10 w-full h-full flex flex-col gap-10 items-center justify-center">
        <h2 className="text-[#FFDC00] text-center font-extrabold text-5xl">
          Nossa Estrutura
        </h2>

        <button className="bg-[#ED003B] rounded-full p-3 text-white font-bold  md:hidden md:group-hover:block">
          Clique AQUI e contemple nossos espaços
        </button>
      </div>
    </div>
  );
};

export default Structure;
