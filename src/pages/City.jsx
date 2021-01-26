import React from 'react'
import { zomatoService } from '../services/index'
import CategoryList from '../components/CategoryList'
import SearchKeyword from '../components/SearchKeyword'
import SearchCriteria from '../components/SearchCriteria'
import RestaurantCard from '../components/RestaurantCard'


class City extends React.Component {

  constructor() {
    super()
    this.state = {
      city: null,
      categories: null,
      selectedCategory: null,
      keyword: '',
      criteria: [],
      restaurants: []
    }
  }

  componentDidMount() {
    let { city_id } = this.props.match.params
    zomatoService.getCityData(city_id).then(data => {
      const city = data.location_suggestions[0]
      let newCriteria = {
        criteriaName: 'City',
        data: city
      }

      let criteria = [...this.state.criteria]
      criteria.push(newCriteria)
      this.setState({ city, criteria })

    })
    zomatoService.getCategories().then(data => this.setState({ categories: this.transformCategoriesData(data.categories) }));
  }

  transformCategoriesData(categories) {
    let categoriesTransformed = categories.map(category => {
      return category.categories
    })
    return categoriesTransformed
  }

  handleCategoryClick = category => {
    let newCriteria = {
      criteriaName: 'Category',
      data: category
    }

    let criteria = [...this.state.criteria]
    criteria = criteria.filter(c => c.criteriaName !== 'Category')
    criteria.push(newCriteria)
    this.setState({ selectedCategory: category, criteria })

  }

  handleChangeKeyword = event => (this.setState({ keyword: event.target.value }))

  handleAddCriteria = () => {
    let criteria = [...this.state.criteria]
    criteria = criteria.filter(c => c.criteriaName !== 'Keyword')
    let newCriteria = {
      criteriaName: 'Keyword',
      data: {
        name: this.state.keyword
      }
    }

    criteria.push(newCriteria)
    this.setState({ keyword: '', criteria })
  }

  handleRemoveCriteria = index => {
    let criteria = [...this.state.criteria]
    criteria.splice(index, 1)
    this.setState({ criteria, selectedCategory: null })

  }

  handleSearch = () => {
    this.setState({ restaurants: null })
    zomatoService.getSearchRestaurants(this.state.criteria).then(data => {
      this.setState({ restaurants: data.restaurants })
      console.log(data.restaurants)
    })
  }

  render() {
    return (
      <>
        <div className="container-fluid" style={{ marginTop: 30, marginBottom: 30 }}>
          {this.state.city && (<div className="row">
            <div className="col">
              <h4 className="text-success">
                Restaurant in {this.state.city.name} , {this.state.city.country_name}
              </h4>
            </div>
          </div>)}

          <div className="row">
            <div className="col-3">
              <h5>Categories</h5>
              <CategoryList
                categories={this.state.categories}
                selectedCategory={this.state.selectedCategory}
                handleCategoryClick={(category) => this.handleCategoryClick(category)}
              />
            </div>
            <div className="col">
              <SearchKeyword
                keyword={this.state.keyword}
                onClickAddCriteria={this.handleAddCriteria}
                onChangeKeyword={this.handleChangeKeyword}
              />

              <SearchCriteria
                criteria={this.state.criteria}
                handleRemoveCriteria={(i) => this.handleRemoveCriteria(i)}
                onClickSearch={this.handleSearch}
              />

              <div className="row">
                <div className="col" style={{ marginBottom: 10 }}>
                  <h4 className="text-success">Restaurant List</h4>
                </div>
              </div>
              <div className="row">
                {this.renderRestaurantList()}
              </div>

            </div>
          </div>
        </div>
      </>
    )
  }


  renderRestaurantList = () => {
    if (this.state.restaurants == null) {
      return (
        <div className="col">
          <p>Loading...</p>
        </div>
      )
    }

    if (this.state.restaurants.length > 0) {
      return (this.state.restaurants.map(({ restaurant }) => <RestaurantCard restaurant={restaurant} key={restaurant.id} />))
    } else {
      return (<div className="col">
        <p>No Data available. Please select criteria, and click Search</p>
      </div>)
    }


  }
}

export default City