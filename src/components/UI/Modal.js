import React from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={style.backdrop} onClick={props.onClick}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={style.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
