import React from 'react';
import { Button, Modal, Link } from 'react-bootstrap';
import ViewQuestion from './ViewQuestion';

class ViewQuiz extends React.Component {
  handleDelete = (event) => {
    this.props.deleteQuiz(this.props.quiz._id);
  }
  render() {
    return(
      <Modal show={this.props.showModal} onHide={this.props.toggleModal} >
        <Modal.Header closeButton>
          <Modal.Title>{this.props.quiz.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.quiz.questions.map((question,index) => <ViewQuestion question={question} key={index} />)}
          <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <Button variant='success'><Link to={`/play/${this.props.quiz._id}`}>Play</Link></Button>
            <Button variant='primary'><Link to={`/update/${this.props.quiz._id}`}>Update</Link></Button>
            <Button variant='danger' onClick={this.handleDelete}>Delete</Button>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default ViewQuiz;