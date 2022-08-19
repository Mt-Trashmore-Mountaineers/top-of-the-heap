import React from 'react';
import './css/App.css';
import { ListGroup } from 'react-bootstrap';

class PlaySlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledAnswers: [],
      unanswered: true,
      correctIndex: null,
      correct: null,
      incorrect: null
    }
  }
  componentDidMount = () => {
    this.shuffle();
  }

  shuffle = () => {
    let array = [];
    for (let i = 0; i < this.props.question.incorrect.length; i++) array.push(i);
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    let shuffledAnswers = array.map(i => this.props.question.incorrect[i]);
    let insert = Math.floor(Math.random() * (array.length + 1))
    shuffledAnswers.splice(insert, 0, this.props.question.correct);
    this.setState({
      shuffledAnswers: shuffledAnswers,
      correctIndex: insert
    })
  }

  scoreQuestion = (event) => {
    if (this.state.unanswered) {
      parseInt(event.target.id) === this.state.correctIndex ?
        this.props.updateScore(this.props.question.difficulty, this.props.question.category)
        : this.setState({ incorrect: parseInt(event.target.id) });
      this.setState({ unanswered: false, correct: this.state.correctIndex });
    }
  }

  render() {
    return (
      <div className="quiz-card">
        <h3>{this.props.question.question}</h3>
        <ListGroup>
          {this.state.shuffledAnswers.map((answer, index) => {
            return (
              <ListGroup.Item
                id={index}
                key={index}
                onClick={this.scoreQuestion}
                style={{
                  backgroundColor:
                    this.state.correct === index ? 'green'
                      : this.state.incorrect === index ? 'red'
                        : ''
                }}
              >{answer}</ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
    )
  }
}

export default PlaySlide;
