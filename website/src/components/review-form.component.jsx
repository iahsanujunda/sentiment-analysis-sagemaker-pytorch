import React from "react";
import {Form, Button} from "react-bootstrap";

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
    console.log(review);

    if (review.includes('test')) {
      console.log('Positive Sentiment');
      this.props.onSentimentResult('1');
    }
    else {
      console.log('Negative Sentiment');
      this.props.onSentimentResult('2');
    }
  }

  handleChange = event => {
    this.setState({
      review: event.target.value
    });
  }

  render () {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter your review here to find out...</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            value={this.state.review}
            onChange={this.handleChange.bind(this)}
          />
        </Form.Group>
        <Button type='submit' xs='2' variant="primary">Submit</Button>
      </Form>
    )
  }
}

export default ReviewForm