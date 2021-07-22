import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className='movie-list'>
        {movies.map(({ movies }) => (
          <MovieCard key='' />
        ))}
        ;
      </section>
    );
  }
}

export default MovieList;
