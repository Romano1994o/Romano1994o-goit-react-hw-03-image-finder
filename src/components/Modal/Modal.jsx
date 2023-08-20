import React from 'react'; 
import PropTypes from 'prop-types';
import Modal from 'react-modal'; 
import { Overlay, ModalImg, ModalBoxHover } from './Modal.styled'; 
export const ModalWindow = ({ onHandleClose, url, tags }) => {
  return (
    <Modal isOpen={true} onRequestClose={onHandleClose}> {}
      <Overlay onClick={onHandleClose}>
        <ModalBoxHover>
          <ModalImg src={url} alt={tags} />
        </ModalBoxHover>
      </Overlay>
    </Modal>
  );
};

ModalWindow.propTypes = {
  onHandleClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};