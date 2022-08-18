import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import './css/button.css';
import { withAuth0 } from '@auth0/auth0-react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About.js';
import CreateQuiz from './CreateQuiz';
import PlayQuiz from './PlayQuiz';
import QuizList from './QuizList';
import UserStats from './UserStats.js';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isProfileOpen: false
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

  render() {
    const { user, isAuthenticated, loginWithRedirect, logout } = this.props.auth0;
    return (
      <Router className="App">
        <nav className="navbar">
          <h2>Quiz App</h2>
          <input className="searchbar"></input>
          <div className="button-container">
            <Link to={"/create"} className="primary">Create</Link>
            <Link to={"/user"} className="primary">Browse</Link>
            <Link to={"/play"} className="primary">Play</Link>
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
          <img onClick={this.handleProfileOpen} id="profile-picture" alt="profile" src={user ? user.picture : `https://avatars.dicebear.com/api/bottts/${Math.round(Math.random() * 1000)}.svg`} />
        </nav>
        <Routes>
          <Route path="/" element={<About />} ></Route>
          <Route path="create" element={<CreateQuiz quiz={''} questions={[]} email={user ? user.email : ''} title='' />} ></Route>
          <Route path="play" element={<PlayQuiz />} ></Route>
          <Route path="user" element={<QuizList />} ></Route>
        </Routes>
      </Router>
    )
  }
}

export default withAuth0(App);