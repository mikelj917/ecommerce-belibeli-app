import { CategoryItem } from "./CategoryItem";
import { categoryItems } from "./CategoryItems";

export const CategoriesSection = () => {
  return (
    <div className="mx-auto grid auto-cols-max grid-flow-col grid-rows-1 gap-10 overflow-x-auto px-4 py-6">
      {categoryItems.map((cat) => (
        <CategoryItem key={cat.label} logo={cat.logo} label={cat.label} />
      ))}
    </div>
  );
};
