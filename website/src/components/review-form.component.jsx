import React from "react";
import {Form, Button} from "react-bootstrap";
import lodash from 'lodash';

import './review-form.component.scss';

class ReviewForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      review: '',
      isProcessing: 0
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({isProcessing: 1});
    let review = this.state.review;

    if ( review === '' ) {
      this.setState({isProcessing: 0});
      this.props.onSentimentResult('invalid');
    } else {
      if (review.includes('test')) {
        this.setState({isProcessing: 0});
        this.props.onSentimentResult('pos');
      }
      else {
        this.setState({isProcessing: 0});
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
        <Button
          className='submit-button'
          type='submit'
          xs='2'
          variant="primary"
          disabled={this.state.isProcessing === 1}
        >Submit</Button>
        <Button className='clear-button' xs='2' variant="danger" onClick={this.handleClear}>Clear</Button>
      </Form>
    )
  }
}

export default ReviewForm