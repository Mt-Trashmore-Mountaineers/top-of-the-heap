import React from "react";
import { Card, Form } from "react-bootstrap";
import Question from "./Question.js";
import "./css/CreateQuiz.css";


class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
        };
    }

    prevent = (event) => {
        event.preventDefault();
    }

    updateQuestionsState = (question) => {
        let questions = this.state.questions;
        questions[parseInt(question.index)] = question;
        this.setState({
            questions: questions
        })

    }

    addQuestion = () => {
        let questions = this.state.questions;
            questions.push({
                index: "0",
                question: '',
                correct: '',
                incorrect:
                    [''],
                updateQuestionsState: this.updateQuestionsState
            })
            this.setState({
                questions: questions
            })
    }

    render() {
        if (this.state.questions.length === 0) {
            this.addQuestion();
        }
        return (
            <Form onSubmit={this.prevent}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Enter the quiz name">
                    </Form.Control>
                </Form.Group>
                {this.state.questions.map((val, index) => {
                    return (
                        <Card>
                            <Question
                                key={index}
                                index={index}
                                question={val.question}
                                correct={val.correct}
                                incorrect={val.incorrect}
                                updateQuestionsState={this.updateQuestionsState}
                            />
                        </Card>
                    )
                })}
                <button className="primary" onClick={this.addQuestion}>Add Question</button>
            </Form>
        )
    }
}

export default CreateQuiz;