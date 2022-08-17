import React from 'react';
import { Card } from 'react-bootstrap';

class QuizSummary extends React.Component {
  handleToggle = () => {
    this.props.toggleModal(this.props.index);
  }
  render() {
    return (
      <Card style={{ padding: '10px' }} onClick={this.handleToggle}>
        <Card.Title>{this.props.quiz.title}</Card.Title>
        <Card.Text>{this.props.quiz.questions.length} questions</Card.Text>
        <Card.Text>{this.props.quiz.plays} plays</Card.Text>
      </Card>
    )
  }
}

export default QuizSummary;