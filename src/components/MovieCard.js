import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class MovieCard extends React.Component {
  render() {
    const { title, storyline, id, imagePath } = this.props.movie;
    return (
      <Card data-testid="movie-card">
        <Card.Img variant="top" src={imagePath} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{storyline}</Card.Text>
          <Button href={`/movie-library/movies/${id}`} variant="warning" block>DETAILS</Button>
        </Card.Body>
      </Card>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
