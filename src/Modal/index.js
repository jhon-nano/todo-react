import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../Context';
import { Dialog } from '@mui/material';

function Modal({ children }) {

  const { openModal, setOpenModal } = React.useContext(TodoContext);

  const handleClose = () => {
    setOpenModal(false);
  };



  return ReactDOM.createPortal(
    <Dialog open={openModal} onClose={handleClose}>
      {children}
    </Dialog>,
    document.getElementById('modal')
  );
}

export { Modal };
