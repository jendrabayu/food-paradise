import React from 'react'
import ImageAndWelcome from '../components/ImageAndWelcome'
import CityList from '../components/CityList'
import SearchCity from '../components/SearchCity'
import { zomatoService } from '../services'

class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      keyword: '',
      featuredCities: null,
      citiesResultSearch: null,
      cityKeywordSearch: ''
    }
  }

  componentDidMount() {
    zomatoService.getFeaturedCities().then(data => this.setState({ featuredCities: data.location_suggestions }))
  }

  handleChangeKeyword = (event) => {
    this.setState({ keyword: event.target.value })
  }

  handleSearchCity = () => {
    let keyword = this.state.keyword;
    this.setState({ citiesResultSearch: null })
    zomatoService.getSearchCities(keyword).then(data => {
      this.setState({ citiesResultSearch: data.location_suggestions, cityKeywordSearch: keyword })
    })
  }


  render() {
    return (
      <>
        <ImageAndWelcome />
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <CityList cities={this.state.featuredCities} title={'Featured Cities'} />
          <SearchCity value={this.state.keyword} onChange={this.handleChangeKeyword} onClickSearch={this.handleSearchCity} />
          {
            this.state.cityKeywordSearch !== '' && <CityList title={'Search Result'} cities={this.state.citiesResultSearch} showSubtitle={true}
              subtitle={this.state.cityKeywordSearch} />
          }
        </div>
      </>
    )
  }


}

export default Home