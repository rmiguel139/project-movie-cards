import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="movie-card-rating">
        Rating
        <div className="rating">
          { rating }
        </div>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
