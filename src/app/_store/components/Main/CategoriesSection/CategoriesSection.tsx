import { CategoryItem } from "./CategoryItem";
import { categoryItems } from "./CategoryItems";

export const CategoriesSection = () => {
  return (
    <div className="overflow-x-auto">
      <div className="grid auto-cols-max grid-flow-col grid-rows-1 gap-6 py-10 sm:justify-center">
        {categoryItems.map((cat) => (
          <CategoryItem key={cat.label} logo={cat.logo} label={cat.label} />
        ))}
      </div>
    </div>
  );
};
