"use client";

import { useState } from "react";
import { CategoryBarItem } from "./CategoryBarItem";

const categories = ["Tudo", "Masculino", "Feminino", "Jóias", "Eletrônicos"];

export const CategoryBar = () => {
  const [active, setActive] = useState("Tudo");

  return (
    <div className="mt-5 flex justify-between lg:hidden">
      {categories.map((cat) => (
        <CategoryBarItem
          key={cat}
          label={cat}
          className={`font-semibold text-black/70 ${active === cat ? "border-b-3 font-bold text-black/100" : "hover:text-black"}`}
          onClick={() => setActive(cat)}
        />
      ))}
    </div>
  );
};
