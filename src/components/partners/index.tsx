import Image from "next/image";
import React from "react";

const Patners = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex gap-2 flex-col justify-center px-4 py-20">
      <h2 className="text-4xl font-extrabold text-[#E61B40] uppercase text-center py-16">
        Nossos Parceiros:
      </h2>

      <div className="flex justify-between flex-wrap">
        <Image
          src="/2.png"
          alt="International School"
          width={133}
          height={51}
        />
        <Image src="/7.png" alt="Matific" width={136} height={43} />
        <Image src="/9.png" alt="Dom Bosco" width={118} height={54} />
        <Image src="/6.png" alt="Poliedro" width={151} height={59} />
      </div>
    </div>
  );
};

export default Patners;
