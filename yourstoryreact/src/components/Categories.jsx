// Categories.js
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black', // Changed background color to black
  color: 'white', // Changed font color to white
  border: '2px solid white', // Added border
  boxShadow: '0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff', // Neon effect
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Categories({ open, handleClose }) {
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
    </>
  );
}
