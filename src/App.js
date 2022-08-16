import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './css/App.css';
import './css/button.css';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    const { user, isAuthenticated, loginWithRedirect } = this.props.auth0;
    console.log(user);
    return (
      <div className="App">
        <button className='primary' onClick={loginWithRedirect}>Login</button>
        {
          isAuthenticated ?
          <p>Logged in</p> :
          <p>Logged out</p>
        }
      </div>
    )
  }
}

export default withAuth0(App);