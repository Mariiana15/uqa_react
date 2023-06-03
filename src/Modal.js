import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';

import  {setModalOpen} from './actions/index';
class modalForm extends React.Component {
  state = { show: false }
  handleClose = () => {this.setState({ show: false })
  this.props.setModalOpen(false);
};
  handleShow = () => this.setState({ show: true });

  componentDidMount() {
    this.setState({ show: this.props.modalOpen !== undefined ? this.props.modalOpen: this.props.active });
  }

  render() {
    return (
      <div>
        <Modal show={ this.props.modalOpen }    backdrop="static" onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>{this.props.modal}</Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    modalOpen: state.uqa.modalOpen,


  };
};


export default connect(mapStateToProps, {setModalOpen})(modalForm);
