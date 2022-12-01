import React from 'react';
import ReactDOM from 'react-dom';
import { TodoContext } from '../hooks/useTodos';
import { Dialog } from '@mui/material';

function Modal({ children}) {





  return ReactDOM.createPortal(
    <Dialog open={true} >
      {children}
    </Dialog>,
    document.getElementById('modal')
  );
}

export { Modal };
