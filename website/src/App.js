import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './App.css';

import ReviewForm from "./components/review-form.component";

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      sentiment: '',
      message: ''
    }
  }

  render () {
    return (
      <Container className='main-container' fluid>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <h1>Is your review positive, or negative?</h1>

            <ReviewForm />
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
    )
  }
}

export default App;
