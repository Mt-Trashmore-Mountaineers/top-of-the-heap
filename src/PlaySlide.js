import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

class PlaySlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shuffledAnswers: [],
      correct: 0,
      incorrect: 0
    }
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
