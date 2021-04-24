import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as movieAPI from '../services/movieAPI';
import { Loading, MovieDetailsCard } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();

    this.state = {
      movie: {},
      loading: true,
    };

    this.requestMovie = this.requestMovie.bind(this);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  componentDidMount() {
    this.requestMovie();
  }

  requestMovie() {
    const { id } = this.props.match.params;
    this.setState({ loading: true }, async () => {
      const requestMovie = await movieAPI.getMovie(id);
      this.setState({
        loading: false,
        movie: requestMovie,
      });
    });
  }

  deleteMovie() {
    const { id } = this.props.match.params;
    movieAPI.deleteMovie(id);
  }

  render() {
    const { loading, movie } = this.state;

    return (
      loading ? <Loading /> : <div className="details-container" data-testid="movie-details">
        <h1>Movie Details</h1>
        <MovieDetailsCard movie={movie}/>
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};

export default MovieDetails;
