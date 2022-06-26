import { useDispatch, useSelector } from 'react-redux';

import { logout, requestLogin, updateLoginFields } from './store';

import LoginForm from './LoginForm';
import LogoutForm from './LogoutForm';

export default function LoginFormContainer() {
  const dispatch = useDispatch();

  const { email, password } = useSelector((state) => state.loginFields);
  const accessToken = useSelector((state) => state.accessToken);

  const handleChange = ({ name, value }) => {
    dispatch(updateLoginFields({ name, value }));
  };

  const handleSubmit = () => {
    dispatch(requestLogin());
  };

  const handleClickLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {accessToken ? (
        <LogoutForm onClick={handleClickLogout} />
      ) : (
        <LoginForm
          loginFields={{ email, password }}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
