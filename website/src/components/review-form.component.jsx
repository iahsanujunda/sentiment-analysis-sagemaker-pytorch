import React from "react";
import {Form, Button} from "react-bootstrap";

class ReviewForm extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      review: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { review } = this.state;

    console.log(review);
  }

  handleChange = async (event) => {
    this.setState({review: event.target.value})
  }

  render () {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter your review here to find out...</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            onChange={this.handleChange.bind(this)}
            value={this.state.value}
          />
        </Form.Group>
        <Button type='submit' xs='2' variant="primary">Submit</Button>
      </Form>
    )
  }
}

export default ReviewForm