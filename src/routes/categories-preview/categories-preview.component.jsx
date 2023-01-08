import CategoryPreview from "../../components/category-preview/category-preview.component";
import { useSelector } from "react-redux";
import { SelectCategories } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
  const catogories = useSelector(SelectCategories);
  return (
    <div>
      {catogories &&
        Object.keys(catogories).map((categoryName) => {
          const previewProduct = catogories[categoryName].slice(0, 7);
          return (
            <CategoryPreview
              key={categoryName}
              categoryName={categoryName}
              previewProduct={previewProduct}
            />
          );
        })}
    </div>
  );
};

export default CategoriesPreview;
