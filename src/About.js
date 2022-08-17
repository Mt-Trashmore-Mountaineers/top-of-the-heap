import React from 'react';
import './css/App.css';

class About extends React.Component {
    handleToggle = () => {
        this.props.toggleModal(this.props.index);
    }
    render() {
        return (
            <div className="main-container">
                <h1 id="about">About the app</h1>
                <p>
                    We hope to create a game that is a source of fun and entertainment.
                    Who couldn&#39;t use a little more educational entertainment in their life.
                    Creating an environment where people can enjoy learning while playing.
                </p>
                <h1>About the developers</h1>
                <h2>Jordan Lindo</h2>
                <p>I’m a software developer with experience on both large and small development teams building projects with different scopes and timelines. I obtained an Associates degree in software development from Kirkwood Community College, along with certificates in Java and .Net Programming. I rose as far as effort could take me in my position as an auditor. As a supervisor I led small teams and acted as the point of contact for clients. When my scrum team asked me to take over I became the leader of our scrum meetings. I facilitated interaction between scrum teams with a goal of efficient communication and effective results. When I encounter a complex problem I take time to think through a path that will reach the necessary conclusion.</p>
                <h2>Daniel Frey</h2>
                <p>Daniel graduated from Iowa State University in 2013 with a degree in materials engineering and a minor in music. He has worked a wide variety of jobs, from retail sales to warehouse work to church ministry. He is now pursuing a career in software development as a student at Delta V.</p>
                <h2>Varun Pradeep</h2>
                <p>Currently learning to copy paste things from StackOverflow</p>
            </div>
        )
    }
}

export default About;