import { useAuth0 } from "@auth0/auth0-react";
import './css/App.css';
import React from 'react';
import axios from 'axios';
import QuizSummary from "./QuizSummary";
import ViewQuiz from "./ViewQuiz";

class QuizList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: [{
        title: 'Test',
        plays: 420,
        questions: [{
          "category": "History",
          "type": "multiple",
          "difficulty": "medium",
          "question": "The seed drill was invented by which British inventor?",
          "correct_answer": "Jethro Tull",
          "incorrect_answers": [
            "Charles Babbage",
            "Isaac Newton",
            "J.J Thomson"
          ]
        },
        {
          "category": "History",
          "type": "multiple",
          "difficulty": "medium",
          "question": "All of the following are names of the Seven Warring States EXCEPT:",
          "correct_answer": "Zhai (翟)",
          "incorrect_answers": [
            "Zhao (趙)",
            "Qin (秦)",
            "Qi (齊)"
          ]
        }]
      },
      {
        title: '2Test',
        plays: 420,
        questions: [{
          "category": "History",
          "type": "multiple",
          "difficulty": "medium",
          "question": "2The seed drill was invented by which British inventor?",
          "correct_answer": "Jethro Tull",
          "incorrect_answers": [
            "Charles Babbage",
            "Isaac Newton",
            "J.J Thomson"
          ]
        },
        {
          "category": "History",
          "type": "multiple",
          "difficulty": "medium",
          "question": "2All of the following are names of the Seven Warring States EXCEPT:",
          "correct_answer": "Zhai (翟)",
          "incorrect_answers": [
            "Zhao (趙)",
            "Qin (秦)",
            "Qi (齊)"
          ]
        }]
      }],
      quizIndex: 0,
      showModal: false
    }
  }

  toggleModal = (index = this.state.quizIndex) => {
    this.setState({
      quizIndex: index,
      showModal: !this.state.showModal
    })
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
      this.toggleModal();
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
      <section>
        <h2>User's Quizzes</h2>
        <div className="grid">
          {
            this.state.quizzes.length > 0 &&
            this.state.quizzes.map((quiz, index) =>
              <QuizSummary
                quiz={quiz}
                key={index}
                index={index}
                toggleModal={this.toggleModal}
              />)
          }
        </div>
        <ViewQuiz
          quiz={this.state.quizzes[this.state.quizIndex]}
          deleteQuiz={this.deleteQuiz}
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        />
      </section>
    )
  }
}

export default QuizList;