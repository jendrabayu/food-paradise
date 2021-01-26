import React from 'react'

const CategoryList = props => {
  const { categories, selectedCategory, handleCategoryClick } = props;

  if (categories) {
    return (
      <div className="list-group">
        {categories.map(category => (
          <button
            key={category.id}
            className={'list-group-item list-group-item-action ' +
              (selectedCategory && selectedCategory.id === category.id ? 'active' : '')}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    )
  } else {
    return (<p>Loading...</p>)
  }

}


export default CategoryList