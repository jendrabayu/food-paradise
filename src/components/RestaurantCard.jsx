import React from 'react'
import { Link } from 'react-router-dom'
import RatingLabel from '../components/RatingLabel'

const RestaurantCard = props => {
  const { restaurant } = props

  return (

    <div className="col-6" style={{ marginBottom: 20 }}>
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              <img className="img-responsive" src={restaurant.thumb} alt="" style={{ borderRadius: 5, width: 100 }} ></img>
            </div>
            <div className="col-9">
              <h4 className="text-success" style={{ fontWeight: 800 }}>{restaurant.name}</h4>
              <h6>{restaurant.location.locality}</h6>
              <h6 className="text-muted">{restaurant.location.address}</h6>
            </div>
          </div>
        </div>
        <div className="card-body">
          <table className="table">
            <tbody>
              <tr>
                <td>Rating</td>
                <td>
                  <RatingLabel
                    labelColor={restaurant.user_rating.rating_color}
                    text={`${restaurant.user_rating.aggregate_rating} (${restaurant.user_rating.rating_text})`}
                  />
                </td>
              </tr>
              <tr>
                <td>Cuisines</td>
                <td>
                  {restaurant.cuisines}
                </td>
              </tr>
              <tr>
                <td>Cost for two</td>
                <td>
                  {restaurant.currency + ' ' + restaurant.average_cost_for_two}
                </td>
              </tr>
            </tbody>
          </table>

        </div>
        <div className="card-footer">
          <Link to={`/restaurant/${restaurant.id}`} style={{ textDecoration: 'none' }}>
            <button type="button" className="btn btn-outline-success btn-block">
              View Restaurant Details
                </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default RestaurantCard