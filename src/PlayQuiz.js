import React from 'react';
import { Button, Carousel, ListGroup, ListGroupItem, ProgressBar } from 'react-bootstrap';
import PlaySlide from './PlaySlide';
import QuizSummary from './QuizSummary';
import { useParams } from "react-router-dom";
import axios from 'axios';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class PlayQuiz extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
      },
      isLoading: true
    }
  }

  poke = () => console.log('Quit poking me');

  componentDidMount() {
    let { id } = this.props.params;
    this.getQuizById(id);
  }

  getQuizById = async (id) => {
    let url = `${process.env.REACT_APP_SERVER}/quiz/id?id=${id}`;
    let quiz = await axios(url);
    this.setState({quiz: quiz.data, isLoading: false});
  }

  updateScore = (difficulty, category) => {
    let newScore = this.state.score;
    newScore.total++;
    newScore[difficulty]++;
    newScore[category]++;
    this.setState({ score: newScore })
  }

  nextSlide = () => this.setState({ currentQuestion: this.state.currentQuestion + 1 });

  render() {
    return (this.state.isLoading ?
      <p>Loading...</p>
      : <>
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
            <div className="quiz-card">
              <h3>Score</h3>
              <ListGroup>
                <ListGroupItem>
                  Score: {this.state.score.total} / {this.state.quiz.questions.length}
                </ListGroupItem>
              </ListGroup>
            </div>
            : <div className="quiz-card">
              <h3>Score</h3>
              <ListGroup>
                <ListGroupItem>
                  Score: {this.state.score.total}
                </ListGroupItem>
              </ListGroup>
            </div>
        }
      </>
    )
  }
}

export default withParams(PlayQuiz);