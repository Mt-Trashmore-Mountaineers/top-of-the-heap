import React from "react";
import { Card, Form } from "react-bootstrap";
import Question from "./Question.js";


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
        console.log("here");

    }

    render() {
        if (this.state.questions.length === 0) {
            let questions = [];
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
        return (
            <Form onSubmit={this.prevent}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Enter the quiz name">
                    </Form.Control>
                </Form.Group>
                <Card>
                    {this.state.questions.map((val, index) => {
                        return (
                            <Question
                                key={index}
                                index={index}
                                question={val.question}
                                correct={val.correct}
                                incorrect={val.incorrect}
                                updateQuestionsState={this.updateQuestionsState}
                            />
                        )
                    })}
                </Card>
                
            </Form>
        )
    }
}

export default CreateQuiz;