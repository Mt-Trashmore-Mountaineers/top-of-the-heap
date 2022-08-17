import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "./css/button.css";
import "./css/CreateQuiz.css";


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

    handleIncorrectChange = (event,index) => {
        let incorrect = this.state.incorrect;
        incorrect[index] = event.target.value;
    }

    render() {
        if (this.state.incorrect.length === 0) {
            this.addIncorrect();
        };
        let incorrectResponses = this.state.incorrect.map((val, index) => {
            return (
                <Row fluid="md">
                    <Form.Group key={index}>
                        <Col>
                            <Form.Label>
                                Incorrect
                            </Form.Label>
                        </Col>
                        <Col>
                            <Form.Control type="text" onChange={event => this.handleIncorrectChange(event,index)} onFocusOut={this.updateSuper} defaultValue={val} />
                        </Col>
                    </Form.Group>
                </Row>)
        })

        return (
            <Container key={this.state.index} className="justify-content-md-center align-items-center">
                <Row>
                    <Form.Group>
                        <Col>
                            <Form.Label>
                                Question
                            </Form.Label>
                        </Col>
                        {
                            this.state.question === '' ?
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter the question."
                                        onChange={this.handleQuestionChange}>
                                    </Form.Control>
                                </Col>
                                :
                                <Col>
                                    <Form.Control
                                        type="text"
                                        defaultValue={this.question}
                                        onChange={this.handleQuestionChange}>
                                    </Form.Control>
                                </Col>
                        }
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group>
                        <Col>
                            <Form.Label>
                                Correct answer
                            </Form.Label>
                        </Col>
                        {
                            this.state.correct === '' ?
                                <Col>
                                    <Form.Control
                                        type="text"
                                        className="correct"
                                        onChange={this.handleCorrectChange}
                                    />
                                </Col>
                                :
                                <Col>
                                    <Form.Control
                                        type="text"
                                        className="correct" defaultValue={this.state.correct}
                                        onChange={this.handleCorrectChange} />
                                </Col>
                        }
                    </Form.Group>
                </Row>
                {incorrectResponses}
                <button className='primary' id="addIncorrect" onClick={this.addIncorrect}>Add Incorrect</button>
            </Container>
        )
    }
}

export default Question;