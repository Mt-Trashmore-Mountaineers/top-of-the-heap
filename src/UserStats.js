import React from 'react';

export class UserStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: this.props.points
    };
    this.bounds = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      document.addEventListener('click', (event) => {
        if (this.bounds.current === null) {
          return;
        }
        if (this.bounds.current.contains(event.target)) {
          return;
        } else {
          this.props.handleProfileOpen();
        }
      });
    }, 200);
  }

  Level = (score) => {
    let level = 0;
    let requirement = 1000;
    while (score - requirement > 0) {
      level++;
      score -= requirement;
      requirement = Math.round((requirement * 1.1) / 100) * 100;
    }
    return {
      level: level,
      score: Math.round(score),
      requirement: requirement,
      percentComplete: Math.round(this.ScaleBetween100(0, requirement, score))
    };
  };

  ScaleBetween100 = (min, max, val) => {
    return ((val - min) / (max - min)) * 100;
  }

  AddPoints = () => {
    this.setState({
      points: this.state.points + 1000
    });
  };

  render() {
    let expInfo = this.Level(this.state.points);
    
    return (
      <aside ref={this.bounds} className="profile-stats">
        <div>
          <h1>{this.props.user.given_name}</h1>
        </div>
        <img onClick={this.AddPoints} id="profile-picture" alt="profile" src={this.props.user.picture} />
        <span className="stats-container">
          <p style={{
            flex: '1'
          }}>Level {expInfo.level}</p>
          <p>{expInfo.score} / {expInfo.requirement}</p>
        </span>
        <span className="exp-bar-container">
          <span className="exp-bar" style={{ width: `${expInfo.percentComplete}%` }}></span>
        </span>
      </aside>
    );
  }
}

export default UserStats;