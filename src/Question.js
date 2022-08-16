import React from "react";
import Form from "react-bootstrap/Form";
import "./css/button.css"


class Question extends React.Component {
    constructor(props) {
        super(props);
        let incorrect;
        if(this.props.incorrect === []){
            incorrect = 
            [
                <Form.Group>
                    <Form.Label>
                        Incorrect
                    </Form.Label>
                    <Form.Control type="text" placeholder="Incorrect answer">
                    </Form.Control>
                </Form.Group>
            ]
        } else {
            incorrect = this.props.incorrect
        }
        this.state = {
            question: this.props.question,
            correct: this.props.correct,
            incorrect: incorrect,
        }


    }


    handleQuestionChange = (event) => {
        this.setState({
            question: event.target.value
        });
    }

    handleCorrectChange = (event) => {
        this.setState({
            correct: event.target.value
        });
    } 

    addIncorrect = () => {
        let incorrect = this.state.incorrect;
        incorrect.push(
            <Form.Group>
                <Form.Label>
                    Incorrect
                </Form.Label>
                <Form.Control type="text" placeholder="Incorrect answers">
                </Form.Control>
            </Form.Group>
        )
        this.setState({
            incorrect: incorrect
        })
    }

    render() {
        return (
            <>
                <Form.Group>
                    <Form.Label>
                        Question
                    </Form.Label>
                    {
                        this.state.question === '' ?
                            <Form.Control
                                type="text"
                                placeholder="Enter the question."
                                onChange={this.handleQuestionChange}>
                            </Form.Control> :
                            <Form.Control
                                type="text"
                                defaultValue={this.question}
                                onChange={this.handleQuestionChange}>
                            </Form.Control>
                    }
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Correct answer
                    </Form.Label>
                    {
                        this.state.correct === '' ?
                            <Form.Control
                                type="text"
                                className="correct"
                                onChange={this.handleCorrectChange}
                            >
                            </Form.Control>
                            :
                            <Form.Control
                                type="text"
                                className="correct" defaultValue={this.state.correct}
                                onChange={this.handleCorrectChange}>
                            </Form.Control>
                    }
                </Form.Group>
                {this.state.incorrect}
                <button  className='primary' id="addIncorrect" onClick={this.addIncorrect}>Add Incorrect</button>
            </>
        )
    }
}

export default Question;