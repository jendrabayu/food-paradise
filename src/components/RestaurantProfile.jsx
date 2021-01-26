import React from 'react'
import RatingLabel from './RatingLabel'

const restaurantProfile = props => {

  const { restaurant } = props

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col">
            {restaurant ? (<>

              <h4 className="text-success" style={{ fontWeight: 800 }}>{restaurant.name}</h4>
              <h6 style={{ fontWeight: 600 }}>{restaurant.location.locality}</h6>
              <h6 className="text-muted">{restaurant.location.address}</h6>
            </>) :
              <p>Loading...</p>

            }
          </div>
        </div>
      </div>
      <div className="card-body">
        {restaurant ?
          (<div className="row">
            <div className="col-6">
              <img className="img-responsive" src={restaurant.featured_image} alt="" style={{ borderRadius: 5, width: 500 }} ></img>
            </div>
            <div className="col-6">
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
          </div>) :
          <p>Loading...</p>
        }
      </div>
    </div>
  )
}


export default restaurantProfile