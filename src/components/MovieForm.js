import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(event) => this.updateMovie('title', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <Form.Group controlId="subtitle">
        <Form.Label>Subtitle</Form.Label>
        <Form.Control
          placeholder="Enter subtitle"
          type="text"
          value={subtitle}
          onChange={(event) => this.updateMovie('subtitle', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <Form.Group controlId="imagePath">
        <Form.Label>Image Path</Form.Label>
        <Form.Control
          placeholder="Enter image path"
          type="text"
          value={imagePath}
          onChange={(event) => this.updateMovie('imagePath', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <Form.Group controlId="storyLine">
        <Form.Label>Story Line</Form.Label>
        <Form.Control
          placeholder="Enter story line"
          as="textarea"
          value={storyline}
          onChange={(event) => this.updateMovie('storyline', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;

    return (
      <Form.Group controlId="genre">
      <Form.Label>Genre</Form.Label>
      <Form.Control
        as="select"
        value={genre}
        onChange={(event) => this.updateMovie('genre', event.target.value)}
      >
        <option>Action</option>
        <option>Comedy</option>
        <option>Thriller</option>
        <option>Fantasy</option>
      </Form.Control>
    </Form.Group>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;

    return (
      <Form.Group controlId="rate">
        <Form.Label>Rate</Form.Label>
        <Form.Control
          placeholder="Enter rate"
          type="number"
          step={0.1}
          min={0}
          max={5}
          value={rating}
          onChange={(event) => this.updateMovie('rating', event.target.value)}
        />
      </Form.Group>
    );
  }

  renderSubmitButton() {
    return (
      <Button variant="warning" onClick={this.handleSubmit} block>Submit</Button>
    );
  }

  render() {
    return (
      <Form className="form">
        {this.renderTitleInput()}
        {this.renderSubtitleInput()}
        {this.renderImagePathInput()}
        {this.renderStorylineInput()}
        {this.renderGenreSelection()}
        {this.renderRatingInput()}
        {this.renderSubmitButton()}
      </Form>
    );
  }
}

MovieForm.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
  }),
  onSubmit: PropTypes.func.isRequired,
};

MovieForm.defaultProps = {
  movie: {
    title: '',
    subtitle: '',
    storyline: '',
    rating: 0,
    imagePath: '',
    genre: '',
  },
};

export default MovieForm;
