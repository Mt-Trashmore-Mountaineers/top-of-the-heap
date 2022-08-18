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
        }
    }

    handleQuestionChange = (event) => {
        console.log(event.target.value);
        this.setState({
            question: event.target.value
        }, () => this.props.updateQuestionsState(this.state));
    };

    handleCorrectChange = async (event) => {
        let correct = this.state.correct;
        correct = event.target.value;
        await this.setState({
            correct: correct
        }, () => this.props.updateQuestionsState(this.state));

    };

    addIncorrect = () => {
        let incorrect = this.state.incorrect;
        incorrect.push("")
        this.setState({
            incorrect: incorrect
        });
    };

    handleIncorrectChange = (event,index) => {
        let incorrect = this.state.incorrect;
        incorrect[index] = event.target.value;
        this.props.updateQuestionsState(this.state);
    };

    deleteQuestion = () => {
        this.props.deleteQuestion(this.props.index);
    }

    deleteIncorrect = (event) => {
        let incorrect = this.state.incorrect
        incorrect.splice(event.target.attributes.index, 1)
        this.setState({incorrect: incorrect});
    }

    render() {
        let incorrectResponses = this.state.incorrect.map((val, index) => {
            return (
                <Row key={Math.random()} fluid="md">
                    <Form.Group>
                        <Col>
                            <Form.Label>
                                Incorrect
                            </Form.Label>
                            {this.state.incorrect.length > 1 && <button index={index} className='danger' onClick={this.deleteIncorrect}>Remove Response</button>}
                        </Col>
                        <Col>
                            <Form.Control type="text" onChange={event => this.handleIncorrectChange(event, index)} defaultValue={val} />
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
                            {this.props.length > 1 && <button className='danger' onClick={this.deleteQuestion}>Delete Question</button>}
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
                                        defaultValue={this.state.question}
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
                                        onChange={this.handleCorrectChange}/>
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