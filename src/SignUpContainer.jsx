import { useDispatch } from 'react-redux';
import { requestSignUp, updateSignupFields } from './store';

export default function SignUpContainer() {
  const dispatch = useDispatch();

  const handleChangeSignupFields = ({ name, value }) => {
    dispatch(updateSignupFields({ name, value }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    handleChangeSignupFields({ name, value });
  }

  function handleSubmitSignup() {
    dispatch(requestSignUp());
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <hr />
      <div>
        <label htmlFor="user-email">E-mail</label>
        <input
          type="email"
          id="user-email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <input
          type="password"
          id="user-password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="user-nickname">별명</label>
        <input
          type="text"
          id="user-nickname"
          name="nickname"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="user-name">이름</label>
        <input
          type="text"
          id="user-name"
          name="name"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="user-phoneNumber">전화번호</label>
        <input
          type="tel"
          id="user-phoneNumber"
          name="phoneNumber"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="user-birthDate">생년월일</label>
        <input
          type="date"
          id="user-birthDate"
          name="birthDate"
          onChange={handleChange}
        />
      </div>
      <button type="button" onClick={handleSubmitSignup}>Sign up</button>
    </div>
  );
}
