import React from "react";
import { Card, Form } from "react-bootstrap";
import Question from "./Question.js";


class CreateQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [
                <Question
                    index = "0"
                    question={''}
                    correct={''}
                    incorrect={[
                            <Form.Group>
                                <Form.Label>
                                    Incorrect
                                </Form.Label>
                                <Form.Control type="text" placeholder="Incorrect answers">
                                </Form.Control>
                            </Form.Group>
                    ]}
                    updateQuestionsState
                />],
        };
    }

    updateQuestionsState = (question) => {
        let questions = this.questions;
        questions[parseInt(question.index)] = question;
        this.setState({
            questions: questions
        })
    }

    render() {
        return (
            <Card>
                <Form>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter the quiz name">
                        </Form.Control>
                    </Form.Group>
                    {this.state.questions}
                </Form>
            </Card>
        )
    }
}

export default CreateQuiz;