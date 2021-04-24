import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import { Button } from 'react-bootstrap';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.request();
  }

  async request() {
    this.setState(
      { loading: true },
      async () => {
        const requestMovies = await movieAPI.getMovies();
        this.setState({
          loading: false,
          movies: requestMovies,
        });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    return (
      loading ? <Loading /> : <div className="movie-list">
        <h1>Movie Library</h1>
        <div className="list-container" >
          {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        <Button href="/movie-library/new" variant="warning" size="lg">ADD A NEW CARD</Button>
      </div>
    );
  }
}

export default MovieList;
