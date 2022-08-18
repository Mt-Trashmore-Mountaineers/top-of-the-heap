import React from "react";
import axios from "axios";
import { Card, Form, Modal } from "react-bootstrap";
import Question from "./Question.js";
import "./css/CreateQuiz.css";

class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
        let title = "";
        if (typeof this.props.quiz === Object) {
            title = this.props.quiz.title;
        }
        this.state = {
            title: title,
            questions: this.props.questions,
            showModal: false,
            displayQuizId: ''
        };
    }

    prevent = (event) => {
        event.preventDefault();
    }

    componentDidMount = () => {
        this.addQuestion();
    }

    updateQuestionsState = (question) => {
        let questions = this.state.questions;
        questions[parseInt(question.index)] = question;
        this.setState({
            questions: questions
        });
    }

    deleteQuestion = (index) => {
        let questions = this.state.questions;
        questions.splice(index, 1);
        this.setState({ questions: questions })
    }

    addQuestion = () => {
        let questions = this.state.questions;
        questions.push({
            question: '',
            correct: '',
            incorrect: [''],
            updateQuestionsState: this.updateQuestionsState
        })
        this.setState({
            questions: questions
        });
    }

    addTriviaQuestion = async () => {
        let questions = this.state.questions;
        let data = await axios.get("https://opentdb.com/api.php?amount=1&type=multiple");
        let question = await data.data.results[0];
        questions.push({
            question: question.question,
            correct: question.correct_answer,
            incorrect: question.incorrect_answers,
            updateQuestionsState: this.updateQuestionsState
        })
        this.setState({
            questions: questions
        });
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        });
    }

    postQuiz = async () => {
        try {
            let url = `${process.env.REACT_APP_SERVER}/new`;
            let newQuiz;
            if (this.props.email) {
                newQuiz = {
                    title: this.state.title,
                    questions: this.state.questions,
                    email: this.props.email
                }
                let createdQuiz = await axios.post(url, newQuiz);
                // display _id
                this.displayModal(createdQuiz.data);
            }
        } catch (error) {

        }
    }

    displayModal(quiz) {
        this.setState({
            showModal: true,
            displayQuizId: quiz._id
        });
    }

    handleOnHide = () => {
        this.setState({
            showModal: false
        });
    }

    render() {
        return (
            <>
                <Form onSubmit={this.prevent}>
                    <Form.Group>
                        {
                            this.state.title.length > 0 ?
                                <Form.Control type="text" onChange={this.handleTitleChange} defaultValue={this.state.title}>
                                </Form.Control>
                                :
                                <Form.Control type="text" onChange={this.handleTitleChange} placeholder="Enter the quiz name">
                                </Form.Control>
                        }

                    </Form.Group>
                    {this.state.questions.map((val, index) => {
                        return (
                            <Card key={Math.random()}>
                                <Question
                                    index={index}
                                    question={val.question}
                                    correct={val.correct}
                                    incorrect={val.incorrect}
                                    updateQuestionsState={this.updateQuestionsState}
                                    deleteQuestion={this.deleteQuestion}
                                    length={this.state.questions.length}
                                />
                            </Card>
                        )
                    })}
                    <button className="primary" onClick={this.addQuestion}>Add Question</button>
                    <button className="primary" onClick={this.addTriviaQuestion}>Get Trivia Question</button>
                    <button className="primary" onClick={this.postQuiz}>Submit Quiz</button>
                </Form>
                <Modal show={this.state.showModal} onHide={this.handleOnHide}>
                    <Modal.Header closeButton></Modal.Header>
                    <Modal.Body>Share this code to reach your new quiz {this.state.displayQuizId}
                    </Modal.Body>
                </Modal>
            </>
        )
    }
}

export default CreateQuiz;