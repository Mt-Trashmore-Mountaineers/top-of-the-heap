import React from 'react';
import { Card } from 'react-bootstrap';

class QuizSummary extends React.Component {
  render() {
    return (
      <Card>
        <Card.Title>{this.props.quiz.title}</Card.Title>
        <Card.Text>{this.props.quiz.questions.length} questions</Card.Text>
        <Card.Text>{this.props.quiz.plays} plays</Card.Text>
      </Card>
    )
  }
}

export default QuizSummary;