import React from "react";
import Form from "react-bootstrap/Form";
import "./css/button.css"


class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: this.props.question,
            correct: this.props.correct,
            incorrect: this.props.incorrect,
            index: this.props.index,
            empty: ""
        }


    }

    updateSuper = () => {
        this.props.updateQuestionsState(this.state);
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
        incorrect.push("")
        this.setState({
            incorrect: incorrect
        })

        this.updateSuper();
    }

    render() {
        let incorrectResponses = this.state.incorrect.map((val, index) => {
            return (<Form.Group key={index}>
                <Form.Label>Incorrect</Form.Label>
                <Form.Control type="text" defaultValue={val}></Form.Control>
            </Form.Group>)
        })

        return (
            <div>
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
                {incorrectResponses}
                <button  className='primary' id="addIncorrect" onClick={this.addIncorrect}>Add Incorrect</button>
            </div>
        )
    }
}

export default Question;