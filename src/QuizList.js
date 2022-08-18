<<<<<<< HEAD
=======
import { useAuth0 } from "@auth0/auth0-react";
import './css/App.css';
>>>>>>> 401105dab1f5b1c61ac64337e122b9f06ff3d4c8
import React from 'react';
import axios from 'axios';
import QuizSummary from "./QuizSummary";
//import ViewQuiz from "./ViewQuiz";

class QuizList extends React.Component {
  constructor(props) {
    super(props);
    let list = [];
    if (this.props.quizList) {
      list = this.props.quizList.map((val, index) => {
        val.index = index;
        return val;
      })
    }
    this.state = {
      quizzes: list,
      showModal: false,
      quizIndex: 0
    }
  }

  toggleModal = (index = this.state.quizIndex) => {
    this.setState({
      quizIndex: index,
      showModal: !this.state.showModal
    })
  }


  /* getQuizzes = async () => {
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
  } */

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
<<<<<<< HEAD
        </ListGroup>
        {/* <ViewQuiz
=======
        </div>
        <ViewQuiz
>>>>>>> 401105dab1f5b1c61ac64337e122b9f06ff3d4c8
          quiz={this.state.quizzes[this.state.quizIndex]}
          deleteQuiz={this.deleteQuiz}
          showModal={this.state.showModal}
          toggleModal={this.toggleModal}
        /> */}
      </section>
    )
  }
}

export default QuizList;