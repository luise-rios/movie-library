import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import './styles/MovieList.css';
import './styles/Details.css';
import './styles/Edit.css';
import './styles/Responsive.css';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: '',
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/movies/:id/edit" component={EditMovie} />
          <Route path="/movies/new" component={NewMovie} />
          <Route path="/movies/:id" component={MovieDetails} />
          <Route exact path="/" component={MovieList} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
