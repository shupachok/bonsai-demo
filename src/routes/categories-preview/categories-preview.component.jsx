import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { catogories } = useContext(CategoriesContext)
    return <div>
        {
            Object.keys(catogories).map((categoryName) => {
                const previewProduct = catogories[categoryName].slice(0, 7);
                return <CategoryPreview key={categoryName} categoryName={categoryName} previewProduct={previewProduct} />
            })
        }
    </div>
}

export default CategoriesPreview;