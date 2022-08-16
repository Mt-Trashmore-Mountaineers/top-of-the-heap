import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import './css/button.css';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    const { user, isAuthenticated, loginWithRedirect, logout } = this.props.auth0;
    return (
      <div className="App">
        <nav className="navbar">
          <h2>Quiz App</h2>
          <input className="searchbar"></input>
          <div className="button-container">
            <button className="primary">Create</button>
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
      </div>
    )
  }
}

export default withAuth0(App);