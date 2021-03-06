import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import * as movieAPI from '../services/movieAPI';

class MovieDetailsCard extends React.Component {
  constructor(props) {
    super(props);
    this.deleteMovie = this.deleteMovie.bind(this);
  }

  deleteMovie() {
    const { id } = this.props;
    movieAPI.deleteMovie(id);
  }
  render() {
    const { title, storyline, id, imagePath, genre, rating, subtitle} = this.props.movie;

    return (
      <Card data-testid="movie-details">
        <Card.Img variant="top" alt={title} src={imagePath} />
        <Card.Body>
          <Card.Title>{`Title: ${title}`}</Card.Title>
          <Card.Text>
          <p>{`Subtitle: ${subtitle}`}</p>
          <p>{`Storyline: ${storyline}`}</p>
          <p>{`Genre: ${genre}`}</p>
          <p>{`Rating: ${rating}`}</p>
          </Card.Text>
        </Card.Body>
          <ButtonGroup>
            <Button variant="warning" href={`/movie-library/${id}/edit`}>EDIT</Button>
            <Button variant="warning" href="/movie-library/">GO BACK</Button>
            <Button variant="warning" href="/movie-library/" onClick={this.deleteMovie}>DELETE</Button>
          </ButtonGroup>
      </Card>
    );
  }
}

MovieDetailsCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieDetailsCard;
