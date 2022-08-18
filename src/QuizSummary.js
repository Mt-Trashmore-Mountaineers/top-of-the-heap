import React from 'react';
import './css/App.css';

class QuizSummary extends React.Component {
  handleToggle = () => {
    this.props.toggleModal(this.props.index);
  }
  render() {
    return (
      <div className="quiz-card" onClick={this.handleToggle}>
        <h3>{this.props.quiz.title}</h3>
        <p>{this.props.quiz.questions.length} questions</p>
        <p>{this.props.quiz.plays} plays</p>
      </div>
    )
  }
}

export default QuizSummary;