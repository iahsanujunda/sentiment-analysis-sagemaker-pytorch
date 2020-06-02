import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import './App.css';

import ReviewForm from "./components/review-form/review-form.component";
import SentimentAlert from "./components/sentiment-alert/sentiment-alert.component";

class App extends React.Component {
  state = {
    sentiment: '',
    alertShow: true
  }

  sentimentResultHandler = (value) => {
    this.setState({
      sentiment: value,
      alertShow: true
    });
  }

  dismissHandler = (value) => {
    this.setState({alertShow: value});
  }

  render () {

    const renderAlert = (sentiment) => {
      let alert = ''

      switch(sentiment) {
        case "invalid":
          alert = <SentimentAlert
            alertShow={this.state.alertShow}
            onDismiss={this.dismissHandler}
            variant='danger'
            message='You submit an invalid input, try again!'
          />
          break;
        case "pos":
          alert = <SentimentAlert
            alertShow={this.state.alertShow}
            onDismiss={this.dismissHandler}
            variant='success'
            message='Your review has positive sentiment!'
          />
          break;
        case "neg":
          alert = <SentimentAlert
            alertShow={this.state.alertShow}
            onDismiss={this.dismissHandler}
            variant='warning'
            message='Your review has negative sentiment!'
          />
          break;
        default:
          break;
      }

      return alert
    }


    return (
      <Container className='main-container' fluid>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <h1>Is your review positive, or negative?</h1>

            <ReviewForm onSentimentResult={this.sentimentResultHandler} />

            { renderAlert(this.state.sentiment) }
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
    )
  }
}

export default App;
