import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import './css/button.css';
import { withAuth0 } from '@auth0/auth0-react';
import QuizList from './QuizList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateQuiz from './CreateQuiz';

class App extends React.Component {
  render() {
    const { isAuthenticated, loginWithRedirect, logout } = this.props.auth0;
    return (
      <Router className="App">
        <nav className="navbar">
          <h2>Quiz App</h2>
          <input className="searchbar"></input>
          <div className="button-container">
            <Link to="/Create">
              <button className="primary">
                Create
              </button>
            </Link>
            <button className="primary">Browse</button>
            <button className="primary">Play</button>
            {
              // Log in/out button
              isAuthenticated ?
                <button className="default" onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}>Log out</button> :
                <button className="primary" onClick={loginWithRedirect}>Login</button>
            }
          </div>
        </nav>
        <Routes>
          <Route path="user" element={<QuizList />} ></Route>
          <Route path="Create" element={<CreateQuiz quiz={''} questions={[]} title=''/>}></Route>
        </Routes>
      </Router>
    )
  }
}

export default withAuth0(App);