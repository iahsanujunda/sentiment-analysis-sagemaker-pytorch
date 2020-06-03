import React from 'react';
import ReactGA from 'react-ga';

import './App.css';

import Homepage from "./pages/homepage.component";
import Header from "./components/header/header.component";

ReactGA.initialize('UA-123791717-1');

class App extends React.Component {
  componentDidMount =() => {
    ReactGA.pageview('/')
  }

  render () {
    return (
      <div>
        <Header />
        <Homepage />
      </div>
    )
  }
}

export default App;
