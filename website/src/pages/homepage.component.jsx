import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import './homepage.component.scss'

import SentimentAlert from "../components/sentiment-alert/sentiment-alert.component";
import ReviewForm from "../components/review-form/review-form.component";

class Homepage extends React.Component {
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
                        message='Unable to process your review, try again!'
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
                case "off":
                    alert = <SentimentAlert
                        alertShow={this.state.alertShow}
                        onDismiss={this.dismissHandler}
                        variant='warning'
                        message='Sagemaker model is currently Off!'
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
                    <Col md={8} className='form-area'>
                        <h1>Is your review positive, or negative?</h1>

                        <ReviewForm onSentimentResult={this.sentimentResultHandler} />

                        { renderAlert(this.state.sentiment) }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Homepage;