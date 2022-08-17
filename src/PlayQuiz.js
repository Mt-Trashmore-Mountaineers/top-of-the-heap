import React from 'react';
import PlaySlide from './PlaySlide';

class PlayQuiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: {
        "category": "History",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The seed drill was invented by which British inventor?",
        "correct_answer": "Jethro Tull",
        "incorrect_answers": [
          "Charles Babbage",
          "Isaac Newton",
          "J.J Thomson"
        ]
      }
    }
  }
  render() {
    return (
      <PlaySlide question={this.state.question} />
    )
  }
}

export default PlayQuiz;