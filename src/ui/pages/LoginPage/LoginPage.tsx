import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserLoginParams } from '../../../core/features/auth/auth.service';
import useLoginByEmail from '../../../core/features/auth/useLoginByEmail';
import { AuthContext } from '../../context/AuthContext';

function LoginPage() {
  let navigate = useNavigate();
  let location = useLocation();
  const { isUser, signIn } = useContext(AuthContext);
  const { loginByEmail } = useLoginByEmail();

  let from = location.state?.from?.pathname || '/';
  function onHandleClick() {
    const paramsLogin: UserLoginParams = {
      email: 'khanhvb@gmail.com',
      password: 'abc',
    };
    loginByEmail(paramsLogin);
    console.log('login');
    // if (signIn && !isUser) {
    //   console.log('onHandleClick', from);
    //   signIn('user', () => {
    //     navigate(from, { replace: true });
    //   });
    // }
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
