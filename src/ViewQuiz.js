import React from 'react';
import { Modal } from 'react-bootstrap';
import ViewQuestion from './ViewQuestion';
import { Link } from 'react-router-dom';
import './css/button.css';

class ViewQuiz extends React.Component {
  handleDelete = (event) => {
    this.props.deleteQuiz(this.props.quiz._id);
  }
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.toggleModal} >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.quiz.title || ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.quiz.questions.map((question, index) => <ViewQuestion question={question} key={index} />)}
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Link className="primary" to={`/play/${this.props.quiz._id}`}>Play</Link>
            <Link className="primary grey" to={`/update/${this.props.quiz._id}`}>Update</Link>
            <button className="danger" onClick={this.handleDelete}>Delete</button>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ViewQuiz;