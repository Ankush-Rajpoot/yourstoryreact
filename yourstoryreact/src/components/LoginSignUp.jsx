import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import './index.css';

function LoginSignUp({ open, handleClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log('Login:', 'Email:', email, 'Password:', password);
    } else {
      console.log('Signup:', 'Name:', name, 'Email:', email, 'Password:', password);
    }
    handleClose();
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal">
        <h2>{isLogin ? 'Login' : 'Signup'}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
          )}
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <div className="button-container">
            <Button type="submit" id="modal-submit-button">{isLogin ? 'Login' : 'Signup'}</Button>
            <Button id="modal-close-button" onClick={handleClose}>Close</Button>
          </div>
        </form>
        <div className="toggle-container">
          {isLogin ? (
            <p>
              Don't have an account?{' '}
              <br />
              <Button id="toggle-button" onClick={toggleForm}>Create a new Account</Button>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <Button id="toggle-button" onClick={toggleForm}>Login</Button>
            </p>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default LoginSignUp;
