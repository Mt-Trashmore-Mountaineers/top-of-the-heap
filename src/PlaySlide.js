import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class PlaySlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledAnswers: [],
      correctIndex: null,
      correct: null,
      incorrect: null
    }
  }

  shuffle = () => {
    let array = [];
    for (let i = 0; i < this.props.question.incorrect_answers.length; i++) array.push(i);
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    let shuffledAnswers = array.map(i => this.props.question.incorrect_answers[i]);
    let insert = Math.floor(Math.random() * (array.length + 1))
    shuffledAnswers.splice(insert,0,this.state.correct_answer);
    this.setState({
      shuffledAnswers: shuffledAnswers,
      correctIndex: insert
    })
  }

  render() {
    return (
      <Card>
        <Card.Title>{this.props.question.title}</Card.Title>
        <ListGroup>
          {this.state.shuffledAnswers.map((answer, index) => {
            return (
              <ListGroup.Item
                key={index}
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
      </Card>
    )
  }
}

export default PlaySlide;
