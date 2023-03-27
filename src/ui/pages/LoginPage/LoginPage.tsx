import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  const { isUser, signIn } = useContext(AuthContext);

  let from = location.state?.from?.pathname || '/';
  function onHandleClick() {
    if (signIn && !isUser) {
      console.log('onHandleClick', from);
      signIn('user', () => {
        navigate(from, { replace: true });
      });
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
