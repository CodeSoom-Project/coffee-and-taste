import {
  BrowserRouter, Link, Route, Routes, useNavigate,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { useEffect } from 'react';
import CategoryContainer from './CategoryContainer';
import MenuGroupContainer from './MenuGroupContainer';
import MenuListContainer from './MenuListContainer';
import MenuDetailContainer from './MenuDetailContainer';
import LoginPage from './LoginPage';

import {
  clearLoginFields, loadCategories, logout, selectCategory,
} from './store';

import { DEFAULT_SELECTED_CATEGORY_IS_NONE } from './constants';

import logo from './images/logo.png';

const Container = styled.div({
  margin: '0 auto',
  width: '70%',
});

const Header = styled.header({
  width: '100%',
  background: 'beige 100%',
});

const LogoContainer = styled.div({
  margin: '0 auto',
  width: '75%',
  '& a': {
    fontSize: '1.8rem',
    color: '#555555',
    textDecoration: 'none',
  },
  padding: '1rem 0',
  textAlign: 'center',
});

const Logo = styled.img({
  margin: '0 auto',
  width: '100px',
  height: '100px',
  borderRadius: '50%',
});

const ContentContainer = styled.div({
  marginTop: '50px',
  height: 'auto',
});

const SignContainer = styled.div({
  '& ul': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& li': {
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
    },
  },
});

const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(logout());
  dispatch(clearLoginFields());
  navigate('/login');
};

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  const resetSelectedCategory = () => {
    dispatch(selectCategory(DEFAULT_SELECTED_CATEGORY_IS_NONE));
  };

  const accessToken = useSelector((state) => state.accessToken);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header>
        <SignContainer>
          <ul>
            <li>
              {
                accessToken ? (
                  <Link to="/logout">Logout</Link>
                ) : (
                  <Link to="/login">Login</Link>
                )
              }
            </li>
            <li>
              {
                accessToken ? (
                  <h1>OOO 님</h1>
                ) : (
                  <Link to="/signUp">SignUp</Link>
                )
              }
            </li>
          </ul>
        </SignContainer>
        <LogoContainer>
          <Link to="/" onClick={resetSelectedCategory}>
            <Logo src={logo} alt="coffee-and-taste logo" />
          </Link>
        </LogoContainer>
        <CategoryContainer />
      </Header>
      <Container>
        <ContentContainer>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogoutPage />} />
            <Route path="/categories/:categoryId/menu-groups" element={<MenuGroupContainer />} />
            <Route path="/menu-groups/:menuGroupId" element={<MenuListContainer />} />
            <Route path="/menu-groups/:menuGroupId/menus/:menuId" element={<MenuDetailContainer />} />
          </Routes>
        </ContentContainer>
      </Container>
    </BrowserRouter>
  );
}
