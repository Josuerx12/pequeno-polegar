import { ICardData } from "@/data/cardData";
import Image from "next/image";
import React from "react";

const Card = ({ card }: { card: ICardData }) => {
  return (
    <div className="flex flex-grow md:flex-grow-0 md:w-72 flex-col items-center gap-2">
      <div className="flex flex-col items-center h-44 gap-5">
        <Image src={card.logo} alt={card.logo} width={94} height={94} />
        <h3 className="uppercase text-[#E61B40] font-extrabold text-center">
          {card.title}
        </h3>
      </div>
      <p className="text-center">{card.description}</p>
    </div>
  );
};

export default Card;
