import React from 'react';
import './css/App.css';

class About extends React.Component {
    render() {
        return (
            <div className="main-container">
                <h1 id="about">About the app</h1>
                <p>
                    We hope to create a game that is a source of fun and entertainment.
                    Who couldn't use a little more educational entertainment in their life.
                    Creating an environment where people can enjoy learning while playing.
                </p>
                <h1>About the developers</h1>
                <h2>Jordan Lindo</h2>
                <p><img src={require('./images/jordanLindoPFP.jpg')}alt='Profile for Jordan Lindo' className='bio-image'></img>Jordan is a software developer with experience on both large and small development teams building projects with different scopes and timelines. he obtained an Associates degree in software development from Kirkwood Community College, along with certificates in Java and .Net Programming. He rose as far as effort could take him in his position as an auditor. As a supervisor he led small teams and acted as the point of contact for clients. When his scrum team asked him to take over he became the leader of their scrum meetings. He facilitated interaction between scrum teams with a goal of efficient communication and effective results. When he encounter a complex problem he takes time to think through a path that will reach the necessary conclusion.</p>

                <h2>Daniel Frey</h2>
                <p><img src={require('./images/daniel-small.jpg')} alt='Daniel Frey' className='bio-image'/>Daniel graduated from Iowa State University in 2013 with a degree in materials engineering and a minor in music. He has worked a wide variety of jobs, from retail sales to warehouse work to church ministry. He frequently finds himself chasing rabbit trails of knowledge, learning a little bit about a wide variety of topics. One such excursion down the rabbit trail of logic and design led him to computer programming, where he is now pursuing a career in software development as a student at Delta V.</p>
                
                <h2>Varun Pradeep</h2>
                <p><img src={require('./images/Varun.png')} alt="Varun Pradeep" className='bio-image'/>Varun is currently learning to copy and paste things from StackOverflow, watch YouTube videos, and talk to rubber ducks. Additionally, he is a high schooler in 10th grade.</p>
            </div>
        )
    }
}

export default About;