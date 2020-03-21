import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
// список отзывов
class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {reviews} = this.props;
    return (
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem review={review} key={review.id}/>)}
      </ul>
    );
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default ReviewsList;
