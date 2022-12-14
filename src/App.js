import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import './css/button.css';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import About from './About.js';
import CreateQuiz from './CreateQuiz';
import PlayQuiz from './PlayQuiz';
import QuizList from './QuizList';
import UserStats from './UserStats.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfileOpen: false,
      userQuizList: [],
      currentUserEmail: "",
    }
  }

  handleProfileOpen = () => {
    if (this.state.isProfileOpen) {
      this.setState({
        isProfileOpen: false
      });
    } else {
      this.setState({
        isProfileOpen: true
      });
    }
    // TODO - add profile stats
  };

  getQuizListByEmail = async (user) => {
    if (this.state.userQuizList.length === 0 || user.email !== this.state.currentUserEmail) {
      let url = `${process.env.REACT_APP_SERVER}/quiz/email?email=${user.email}`;
      let quizList = await axios(url);
      this.setState({ userQuizList: quizList.data,
      currentUserEmail: user.email })
    }
  }

  getQuizById = async (id) => {
    let url = `${process.env.REACT_APP_SERVER}/quiz/id?id=${id}`;
    let quiz = await axios(url);
    return quiz.data;
  }

  render() {
    const { user, isAuthenticated, loginWithRedirect, logout } = this.props.auth0;

    if (user) {
      this.getQuizListByEmail(user);
    }

    return (
      <Router className="App">
        <nav className="navbar">
          <h2>Top of the Heap</h2>
          <input className="searchbar"></input>
          <div className="button-container">
            {user && <Link to={"/create"} className="primary">Create</Link>}
            {user && <Link to={"/user"} className="primary">Browse</Link>}
            <Link to={"/"} className="primary">About</Link>
          </div>
          {
            // Log in/out button
            isAuthenticated ?
              <button className="default" onClick={() => {
                logout({ returnTo: window.location.origin });
              }}>Log out</button> :
              <button className="primary" onClick={loginWithRedirect}>Login</button>
          }
          <img onClick={this.handleProfileOpen} id="profile-picture" alt="profile" src={user ? user.picture : `https://avatars.dicebear.com/api/bottts/${1234}.svg`} />
          {
            (this.state.isProfileOpen && user) &&
            <UserStats handleProfileOpen={this.handleProfileOpen} user={user} points={0} />
          }
        </nav>
        <div className='main'>
          <Routes>
            <Route path="" element={<About />} ></Route>
            <Route path="create" element={<CreateQuiz quiz={''} questions={[]} email={user ? user.email : ''} title='' isUpdate={false} />} ></Route>
            <Route path="play/:id" element={<PlayQuiz />} ></Route>
            <Route path="user" element={<QuizList quizList={this.state.userQuizList} isLoading={this.state.isLoading} />} ></Route>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default withAuth0(App);