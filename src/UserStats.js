import React from 'react';

export class UserStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: this.props.points
    };
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

  addPoints = () => {
    this.setState({
      points: this.state.points + 1000
    });
  };

  render() {

    let expInfo = this.Level(this.state.points);

    return (
      <aside className="profile-stats">
        <div>
          <h1>{this.props.user.given_name}</h1>
        </div>
        <img onClick={this.addPoints} id="profile-picture" alt="profile" src={this.props.user.picture} />
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