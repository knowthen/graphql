import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import Book from './Book';
import AddBook from './AddBook';
import BookReview from './BookReview';

const App = props => (
  <Router>
    <div className="mw8 center avenir">
      <Header {...props} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/book/:id/review" component={BookReview} />
        <Route exact path="/book/:id" component={Book} />
        <Route exact path="/add" component={AddBook} />
      </Switch>
      <Footer {...props} />
    </div>
  </Router>
);

export default App;
