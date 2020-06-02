import React from 'react';
import { Alert } from "react-bootstrap";

import './sentiment-alert.component.scss'

const SentimentAlert = ({alertShow, onDismiss, variant, message}) => (
  <Alert variant={variant} show={alertShow} onClose={() => onDismiss(false)} dismissible>
    {message}
  </Alert>
)

export default SentimentAlert;