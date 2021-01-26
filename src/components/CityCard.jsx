import React from 'react'
import { Link } from "react-router-dom";


const CityCard = props => {
  const { city } = props;

  return (
    <div className="col-4">
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h4 className="card-title">{city.name}</h4>
          <p>{city.country_name}</p>
          <Link to={`/city/${city.id}`} className="card-text">See restaurants in {city.name}</Link>
        </div>
      </div>
    </div>
  )
}

export default CityCard