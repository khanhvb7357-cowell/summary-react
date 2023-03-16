import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function LoginPage() {
  const navigate = useNavigate();
  const { isUser, signIn } = useContext(AuthContext);
  function onHandleClick() {
    console.log('onHandleClick');
    if (signIn) {
      signIn('user', () => console.log('Login'));
    }
    // navigate('/protected/account');
  }

  return (
    <div>
      <p>LoginPage</p>
      <button onClick={onHandleClick}>Login</button>
    </div>
  );
}

export default LoginPage;
