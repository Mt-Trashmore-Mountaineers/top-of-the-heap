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
      },
      score: {
        total: 0,
        easy: 0,
        medium: 0,
        hard: 0,
        'General Knowledge': 0,
        'Entertainment: Books': 0,
        'Entertainment: Film': 0,
        'Entertainment: Music': 0,
        'Entertainment: Musicals & Theatres': 0,
        'Entertainment: Television': 0,
        'Entertainment: Video Games': 0,
        'Entertainment: Board Games': 0,
        'Science & Nature': 0,
        'Science: Computers': 0,
        'Science: Mathematics': 0,
        'Mythology': 0,
        'Sports': 0,
        'Geography': 0,
        'History': 0,
        'Politics': 0,
        'Art': 0,
        'Celebrities': 0,
        'Animals': 0
      }
    }
  }

  updateScore = (difficulty, category) => {
    console.log(this.state.score);
    let newScore = this.state.score;
    newScore.total++;
    newScore[difficulty]++;
    newScore[category]++;
    console.log(newScore);
    this.setState({ score: newScore })
  }

  render() {
    return (
      <PlaySlide question={this.state.question} score={this.state.score} updateScore={this.updateScore} />
    )
  }
}

export default PlayQuiz;