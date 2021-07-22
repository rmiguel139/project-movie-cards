import React from 'react';
import MovieCard from './MovieCard';
 
class MovieList extends React.Component {
    render(){
        const { movies } = this.props;
        return(
            <section>
                {movies.map(({name}) => (
                    <MovieCard key = {name}/>
                ))};
            </section>
        )
    }
}


export default MovieList;