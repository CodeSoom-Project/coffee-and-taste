import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

const List = styled.ul({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

const Item = styled.li({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '3rem',
  minWidth: '6rem',
  margin: '0 0.5rem',
  '& a': {
    color: '#555555',
    textDecoration: 'none',
  },
});

export default function SignContainer() {
  const accessToken = useSelector((state) => state.accessToken);

  return (
    <div>
      <List>
        <Item>
          {
            accessToken ? (
              <Link to="/logout">Logout</Link>
            ) : (
              <Link to="/login">Login</Link>
            )
          }
        </Item>
        <Item>
          {
            accessToken ? (
              <h1>OOO 님</h1>
            ) : (
              <Link to="/signUp">SignUp</Link>
            )
          }
        </Item>
      </List>
    </div>
  );
}
