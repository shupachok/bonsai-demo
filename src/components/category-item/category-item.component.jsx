import './category-item.component.scss'

const CategoryItem = ({category : {title,imageUrl }}) => {
return (
    <div className='category-item-container'>
          <div className='background-image' style={{backgroundImage:`url(${imageUrl})`}}></div>
          <div className='category-body-container'>
            <h2>{title}</h2>
            <p>shop now</p>
          </div>
        </div>
)
}

export default CategoryItem;