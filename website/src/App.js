import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './App.css';

import ReviewForm from "./components/review-form.component";

class App extends React.Component {
  state = {
    sentiment: ''
  }

  sentimentResultHandler = (value) => {
    this.setState({sentiment: value});
  }

  render () {
    return (
      <Container className='main-container' fluid>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <h1>Is your review positive, or negative?</h1>

            <ReviewForm onSentimentResult={this.sentimentResultHandler} />
            {console.log(this.state.sentiment)}
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
    )
  }
}

export default App;
