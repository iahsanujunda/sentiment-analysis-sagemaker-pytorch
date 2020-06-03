import React from 'react';
import ReactGA from 'react-ga';

import './App.css';

import Homepage from "./pages/homepage.component";
import Header from "./components/header/header.component";

class App extends React.Component {
  componentDidMount =() => {
    ReactGA.initialize('UA-123791717-1');
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
