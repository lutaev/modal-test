import React, { Component } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

class IntroModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <Modal
                isOpen={this.state.isOpen}
                toggle={this.toggle}
                className="vertical-center intro-modal"
            >
                <ModalHeader toggle={this.toggle} className="text-dark" />
                <ModalBody>
                    Modal Content
                </ModalBody>
            </Modal>
        );
    }
}

export default IntroModal;
