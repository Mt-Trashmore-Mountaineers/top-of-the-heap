import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import axios from 'axios';
import { ListGroup } from "react-bootstrap";
import QuizSummary from "./QuizSummary";
import ViewQuiz from "./ViewQuiz";

class QuizList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [],
      quizIndex: 0,
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }

  getQuizzes = async () => {
    try {
      const user = useAuth0();
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/user',
        id: user.email
      }
      let userData = await axios(config);
      this.setState({ quizzes: userData.data.quizzes })
    } catch (error) {
      console.log('Error', error);
    }
  }
  deleteQuiz = async (ID) => {
    try {
      const config = {
        method: 'delete',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/quiz',
        id: ID
      }
      await axios(config);
      let updatedArray = this.state.quizzes.filter(currentQuiz => currentQuiz._id !== ID);
      this.setState({
        quizzes: updatedArray
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <>
        <ListGroup>
          {
            this.state.quizzes.length > 0 &&
            this.state.quizzes.map((quiz, index) =>
              <QuizSummary
                quiz={quiz}
                key={index}
                onClick={this.toggleModal}
              />)
          }
        </ListGroup>
        <ViewQuiz
          quiz={this.state.quizzes[this.state.quizIndex]}
          deleteQuiz={this.deleteQuiz}
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
      </>
    )
  }
}

export default QuizList;