import React from 'react';
import { Button, Card, Carousel, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import PlaySlide from './PlaySlide';
import QuizSummary from './QuizSummary';

class PlayQuiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz: {
        title: 'Test',
        plays: 420,
        questions: [{
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "medium",
          "question": "What name represents the letter &quot;M&quot; in the NATO phonetic alphabet?",
          "correct_answer": "Mike",
          "incorrect_answers": [
            "Matthew",
            "Mark",
            "Max"
          ]
        },
        {
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
        {
          "category": "History",
          "type": "multiple",
          "difficulty": "medium",
          "question": "All of the following are names of the Seven Warring States EXCEPT:",
          "correct_answer": "Zhai (翟)",
          "incorrect_answers": [
            "Zhao (趙)",
            "Qin (秦)",
            "Qi (齊)"
          ]
        },
        {
          "category": "General Knowledge",
          "type": "multiple",
          "difficulty": "easy",
          "question": "What machine element is located in the center of fidget spinners?",
          "correct_answer": "Bearings",
          "incorrect_answers": [
            "Axles",
            "Gears",
            "Belts"
          ]
        }]
      },
      currentQuestion: 0,
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

  poke = () => console.log('Quit poking me');

  updateScore = (difficulty, category) => {
    let newScore = this.state.score;
    newScore.total++;
    newScore[difficulty]++;
    newScore[category]++;
    this.setState({ score: newScore })
  }

  nextSlide = () => this.setState({ currentQuestion: this.state.currentQuestion + 1 });

  render() {
    return (
      <>
        <ProgressBar now={100 * (this.state.currentQuestion) / (this.state.quiz.questions.length + 1)} />
        {this.state.currentQuestion < this.state.quiz.questions.length + 1 &&
          <>
            <Carousel activeIndex={this.state.currentQuestion} controls={false} indicators={false} interval={null} wrap={false} touch={false}>
              <Carousel.Item><QuizSummary quiz={this.state.quiz} toggleModal={this.poke} /></Carousel.Item>
              {this.state.quiz.questions.map((question, index) => {
                return (
                  <Carousel.Item>
                    <PlaySlide key={index} question={question} score={this.state.score} updateScore={this.updateScore} />
                  </Carousel.Item>
                )
              })}
            </Carousel>
            <Button onClick={this.nextSlide}>{this.state.currentQuestion === 0 ? 'Start' : this.state.currentQuestion === this.state.quiz.questions.length ? 'Finish' : 'Next Question'}</Button>
          </>}
        {
          this.state.currentQuestion === this.state.quiz.questions.length + 1 ?
            <Card>
              <Card.Title>Score</Card.Title>
              <ListGroup>
                <ListGroupItem>
                  Score: {this.state.score.total} / {this.state.quiz.questions.length}
                </ListGroupItem>
              </ListGroup>
            </Card>
            : <Card>
              <Card.Title>Score</Card.Title>
              <ListGroup>
                <ListGroupItem>
                  Score: {this.state.score.total}
                </ListGroupItem>
              </ListGroup>
            </Card>
        }
      </>
    )
  }
}

export default PlayQuiz;