import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    const { user, isAuthenticated } = this.props.auth0;
    return (
      <div className="App">
        <p>Hello World!</p>
      </div>
    )
  }
}

export default App;