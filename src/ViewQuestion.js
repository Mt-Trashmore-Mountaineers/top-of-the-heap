import React from 'react';
import { Card } from 'react-bootstrap';

class ViewQuestion extends React.Component {
  render() {
    return (
      <Card style={{ border: 'none' }}>
        <Card.Title>{this.props.question.question}</Card.Title>
        <Card.Text>Correct Answer: {this.props.question.correct}</Card.Text>
        {this.props.question.incorrect.map((answer, index) => <Card.Text key={index}>Incorrect Answer: {answer}</Card.Text>)}
      </Card>
    )
  }
}

export default ViewQuestion;