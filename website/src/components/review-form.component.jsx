import React from "react";
import {Form, Button} from "react-bootstrap";
import lodash from 'lodash';

import './review-form.component.scss';

class ReviewForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      review: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let review = this.state.review;

    if ( review === '' ) {
      this.props.onSentimentResult('invalid');
    } else {
      if (review.includes('test')) {
        console.log('Positive Sentiment');
        this.props.onSentimentResult('pos');
      }
      else {
        console.log('Negative Sentiment');
        this.props.onSentimentResult('neg');
      }
    }
  }

  handleChange = event => {
    this.setState({
      review: lodash.trim(event.target.value)
    });
  }

  handleClear = event => {
    this.setState({
      review: ''
    })
  }

  render () {
    return(
      <Form onSubmit={this.handleSubmit} className='review-form'>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows="4"
            value={this.state.review}
            onChange={this.handleChange.bind(this)}
            placeholder='Enter your review here to find out...'
          />
        </Form.Group>
        <Button className='submit-button' type='submit' xs='2' variant="primary">Submit</Button>
        <Button className='clear-button' xs='2' variant="danger" onClick={this.handleClear}>Clear</Button>
      </Form>
    )
  }
}

export default ReviewForm