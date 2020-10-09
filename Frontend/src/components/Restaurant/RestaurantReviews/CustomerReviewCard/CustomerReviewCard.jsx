import React, { Component } from 'react';
import './CustomerReviewCard.styles.css'
import StarRatingComponent from 'react-star-rating-component';


class CustomerReviewCard extends Component {
    state = {
        redirect: false
    }

    render() {
        const restData = { ...this.props.props.res }
        console.log(restData)
        return (<div>
            {/* {JSON.stringify(this.props.props)} */}
            <div className="reviewCard">
                <div className="reviewHeader" >
                    <h4>
                        {restData.customer_name}

                    </h4>

                    <p>
                        {restData.review_date.split('T')[0]}
                    </p>
                    <h3><StarRatingComponent
                        name="rating"
                        starCount={5}
                        value={restData.stars}
                        starColor="#ff1c1c"
                    />
                    </h3>
                </div>

                <p>
                    {restData.review_text}
                </p>

            </div>
        </div>
        );
    }
}

export default CustomerReviewCard;
