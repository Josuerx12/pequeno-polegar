import { CardCata } from "@/data/cardData";
import React from "react";
import Card from "../card";

const Cards = () => {
  return (
    <div className="max-w-screen-lg mx-auto flex gap-6 flex-wrap justify-between lg:flex-nowrap p-4">
      {CardCata.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default Cards;
