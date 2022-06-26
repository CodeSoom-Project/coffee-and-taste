import { useDispatch, useSelector } from 'react-redux';

import { requestLogin, updateLoginFields } from './store';

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

  return (
    <div>
      {accessToken ? (
        <LogoutForm />
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
