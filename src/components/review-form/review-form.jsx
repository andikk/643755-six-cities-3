import React from 'react';
import PropTypes from 'prop-types';
import withReviewForm from "../../hocs/with-review-form.js";

const MAX_RATING = 5;

const toIndex = (it, index) => MAX_RATING - index;
const ReviewForm = (props) => {
  const {rating, comment, invalid, submitting, onRatingChange, onCommentChange, offerId, onSubmit} = props;
  const ratings = Array.from({length: MAX_RATING}, toIndex);
  const disabled = invalid || submitting;

  const handleSubmit = (evt) => {
    evt.preventDefault();

    return onSubmit({
      comment,
      rating,
    }, offerId);

  };

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} action="" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((it) => (
          <React.Fragment key={it}>
            <input className="form__rating-input visually-hidden" name="rating" value={it} id={`${it}-star`}
              type="radio" checked={it === rating} onChange={() => onRatingChange(it)}/>
            <label htmlFor={`${it}-star`} className="reviews__rating-label form__rating-label">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea value={comment}
        onChange={({target}) => {
          onCommentChange(target.value);
        }}
        className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"></textarea>

      <div className="reviews__button-wrapper">
        <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button"
          type="submit"
          style={{color: disabled ? `#9c9c9c` : undefined}}
          disabled={disabled}>Submit</button>
      </div>

    </form>
  );

};

ReviewForm.propTypes = {
  offerId: PropTypes.number,
  handleSubmit: PropTypes.func,
  rating: PropTypes.number,
  comment: PropTypes.string,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  onRatingChange: PropTypes.func,
  onCommentChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export {ReviewForm};
export default withReviewForm(ReviewForm);
