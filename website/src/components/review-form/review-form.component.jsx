import React from "react";
import {Form, Button} from "react-bootstrap";
import lodash from 'lodash';
import axios from 'axios';

import './review-form.component.scss';
import reviews from '../../assets/reviews';
import ReactGA from "react-ga";

class ReviewForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      review: '',
      copied: false,
      isProcessing: 0,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.reviewStore = reviews;
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    ReactGA.event({
      category: "CLICK",
      action: "Submitting Review"
    });

    this.setState({isProcessing: 1});

    let review = lodash.trim(this.state.review);
    const header = {
      'X-API-Key': `${process.env.REACT_APP_AWS_API_KEY}`
    }

    if ( review === '' ) {
      this.setState({isProcessing: 0});
      this.props.onSentimentResult('invalid');
    } else {
      await axios.post(
        `${process.env.REACT_APP_AWS_API_ENDPOINT}`,
        review,
        {headers: header})
        .then(response => {
          if (response.data === 1) {
            this.setState({isProcessing: 0});
            this.props.onSentimentResult('pos');
          }
          else {
            this.setState({isProcessing: 0});
            this.props.onSentimentResult('neg');
          }
        })
        .catch(err => {
          this.setState({isProcessing: 0});
          this.props.onSentimentResult('invalid');
        })
    }
  }

  handleChange = event => {
    this.setState({
      review: event.target.value
    });
  }

  handleClear = event => {
    this.setState({
      review: ''
    })
  }

  handleGetRandomView = () => {
    ReactGA.event({
      category: "CLICK",
      action: "Get Random Review"
    });

    let reviewIndex = Math.floor(Math.random() * Math.floor(40));
    this.setState({
      review: this.reviewStore[reviewIndex]
    })
  }

  render () {
    return(
      <Form onSubmit={this.handleSubmit} className='review-form'>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows="6"
            value={this.state.review}
            onChange={this.handleChange.bind(this)}
            disabled={this.state.isProcessing === 1}
            placeholder='Enter your review here to find out...'
          />
        </Form.Group>
        <Button
          className='submit-button'
          type='submit'
          xs='2'
          variant="primary"
          disabled={this.state.isProcessing === 1}
        >Submit</Button>
        <Button className='clear-button' xs='2' variant="danger" onClick={this.handleClear}>Clear</Button>
        <Button
          className='random-button'
          xs='2'
          variant="secondary"
          onClick={this.handleGetRandomView}>
          Get random reviews
        </Button>
      </Form>
    )
  }
}

export default ReviewForm