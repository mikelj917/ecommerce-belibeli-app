"use client";

import { useState } from "react";
import { CategoryBarItem } from "./CategoryBarItem";

const categories = ["Tudo", "Masculino", "Feminino", "Jóias", "Eletrônicos"];

export const CategoryBar = () => {
  const [active, setActive] = useState("Tudo");

  return (
    <div className="flex justify-between">
      {categories.map((cat) => (
        <CategoryBarItem
          key={cat}
          label={cat}
          className={`font-semibold text-black/70 ${active === cat ? "font-bold text-black/100 border-b-3" : "hover:text-black"}`}
          onClick={() => setActive(cat)}
        />
      ))}
    </div>
  );
};
