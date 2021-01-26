import React from 'react'
import { zomatoService } from '../services';
import RestaurantProfile from '../components/RestaurantProfile'
import RatingLabel from '../components/RatingLabel'
import Review from '../components/Review'

class RestaurantDetail extends React.Component {

  constructor() {
    super()
    this.state = {
      restaurant: null,
      reviews: null
    }
  }


  componentDidMount() {
    let { params } = this.props.match
    zomatoService.getRestaurantData(params.restaurant_id).then(data => {
      this.setState({ restaurant: data })
    })

    zomatoService.getReviewsData(params.restaurant_id).then(data => {
      this.setState({ reviews: data.user_reviews })
    })
  }

  render() {
    return (
      <>
        <div className="container" style={{ marginTop: 30, marginBottom: 30 }}>
          <div className="row">
            <div className="col-12" style={{ marginBottom: 20 }}>
              <RestaurantProfile restaurant={this.state.restaurant} />
            </div>
            <div className="col-12" style={{ marginBottom: 20 }}>
              <div className="card">
                <div className="card-body">
                  <h4 className="text-success" style={{ fontWeight: 800 }}>Reviews</h4>
                  {
                    this.state.reviews ? (
                      this.state.reviews.map(({ review }) => (
                        <Review review={review} />
                      ))
                    ) : (<p>Loading...</p>)
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default RestaurantDetail