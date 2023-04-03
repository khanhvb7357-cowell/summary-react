import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { UserLoginParams } from './auth.service';
import { loginWithByEmail, loginWithByEmailSelector } from './loginWithByEmailSlice';

function useLoginByEmail() {
  const dispatch = useAppDispatch();
  const selector = useAppSelector(loginWithByEmailSelector);

  const loginByEmail = (param: UserLoginParams) => dispatch(loginWithByEmail(param));
  return {
    loginByEmail,
  };
}

export default useLoginByEmail;
