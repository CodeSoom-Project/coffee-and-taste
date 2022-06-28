export default function SignUpContainer() {
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
        />
      </div>
      <div>
        <label htmlFor="user-password">비밀번호</label>
        <input
          type="password"
          id="user-password"
          name="password"
        />
      </div>
      <div>
        <label htmlFor="user-nickname">별명</label>
        <input
          type="text"
          id="user-nickname"
          name="nickname"
        />
      </div>
      <div>
        <label htmlFor="user-name">이름</label>
        <input
          type="text"
          id="user-name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="user-phoneNumber">전화번호</label>
        <input
          type="tel"
          id="user-phoneNumber"
          name="phoneNumber"
        />
      </div>
      <div>
        <label htmlFor="user-birthDate">생년월일</label>
        <input
          type="date"
          id="user-birthDate"
          name="birthDate"
        />
      </div>
      <button type="button">Sign up</button>
    </div>
  );
}
