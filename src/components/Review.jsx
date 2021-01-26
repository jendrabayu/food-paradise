import React from 'react'
import RatingLabel from './RatingLabel'

const Review = props => {

  const { review } = props

  return (
    <div className="card border-success" style={{ marginBottom: 5 }}>
      <div className="card-body">
        <div className="row" style={{ marginBottom: 20 }}>
          <div className="col-1" style={{ border: '0px solid black' }}>
            <img class="img-responsive" src={review.user.profile_image} alt="" style={{ borderRadius: '50%', width: 80 }}></img>
          </div>
          <div className="col-11" style={{ border: '0px solid black' }}>
            <h6 className="font-weight-bold">{review.user.name}</h6>
            <RatingLabel
              text={`${review.user.foodie_level_num} (${review.user.foodie_level})`}
              labelColor={`${review.user.foodie_color}`}
            />
          </div>
        </div>
        <h6 className="card-text text-muted">{review.review_time_friendly}</h6>
        <RatingLabel
          text={`${review.rating} (${review.rating_text})`}
          labelColor={`${review.rating_color}`}
        />
        <p className="card-text">{review.review_text}</p>
      </div>
    </div>
  )
}


export default Review