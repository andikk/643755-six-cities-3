import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withReviewForm = (Component) => {
  class WithReviewForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: null,
        comment: ``,
        invalid: true,
        submitting: false,
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._resetSubmitting = this._resetSubmitting.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
      this._resetFormValues = this._resetFormValues.bind(this);
      this._isMounted = true;
    }

    render() {
      const {rating, comment, invalid, submitting} = this.state;

      return <Component
        {...this.props}
        rating={rating}
        comment={comment}
        invalid={invalid}
        submitting={submitting}
        onRatingChange={this._handleRatingChange}
        onCommentChange={this._handleCommentChange}
        onSubmit={this._handleSubmit}/>;
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    _handleRatingChange(rating) {
      this.setState({rating});
    }

    _handleCommentChange(comment) {
      const {rating} = this.state;
      const isCommentValid = this._validateComment(comment);
      const isRatingValid = this._validateRating(rating);
      const invalid = !isCommentValid || !isRatingValid;

      this.setState({comment, invalid});
    }

    _resetSubmitting() {
      if (this._isMounted) {
        this.setState({submitting: false});
      }
    }

    _resetFormValues() {
      this.setState({comment: ``, rating: 0});
    }

    _handleSubmit() {
      const {onSubmit, offerId} = this.props;
      const {rating, comment} = this.state;

      this.setState({submitting: true});

      return onSubmit({rating, comment}, offerId)
        .then((response) => {
          this._resetSubmitting();
          this._resetFormValues();
          return response;
        })
        .catch(this._resetSubmitting);
    }

    _validateComment(value) {
      const MIN_COMMENT_LENGTH = 50;
      const MAX_COMMENT_LENGTH = 400;

      return (
        (typeof value === `string`) &&
        (value.length >= MIN_COMMENT_LENGTH) &&
        (value.length <= MAX_COMMENT_LENGTH)
      );
    }

    _validateRating(value) {
      return (value > 0);
    }
  }

  WithReviewForm.propTypes = {
    onSubmit: PropTypes.func,
    offerId: PropTypes.number
  };

  return WithReviewForm;
};

export const withReviewFormPropTypes = {
  rating: PropTypes.number,
  comment: PropTypes.string,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  onRatingChange: PropTypes.func,
  onCommentChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default withReviewForm;
