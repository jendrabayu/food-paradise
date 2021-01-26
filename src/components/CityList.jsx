import React from 'react'
import CityCard from './CityCard'


const CityList = props => {
  const { cities, title, showSubtitle, subtitle } = props
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <h3>{title}</h3>
          {showSubtitle === true && subtitle !== '' &&
            <h6 className="text-muted">Search result for keyword '{subtitle}' </h6>
          }
        </div>
      </div>
      <div className="row">
        {cities ? renderCityList(cities) : (<p>Loading ...</p>)}
      </div>
    </div>
  )
}


const renderCityList = cities => {
  if (cities.length > 0) {
    return cities.map((city) =>
      <CityCard city={city} key={city.id} />
    )
  } else {
    return (
      <div className="col">
        <p className="text-danger">Data not found !</p>
      </div>
    )
  }
}


export default CityList