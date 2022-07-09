import {
  BrowserRouter, Link, Route, Routes,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { useEffect } from 'react';

import SignContainer from './SignContainer';
import CategoryContainer from './CategoryContainer';
import MenuGroupContainer from './MenuGroupContainer';
import MenuListContainer from './MenuListContainer';
import MenuDetailContainer from './MenuDetailContainer';
import SignUpContainer from './SignUpContainer';
import LoginPage from './LoginPage';
import CartContainer from './CartContainer';

import {
  loadCategories,
  setAccessToken,
  requestLoggedUserInfo,
} from './store';

import { loadItem } from './services/localStorage';

import logo from './images/logo.png';

const Container = styled.div({
  margin: '0 auto',
  width: '1100px',
});

const Header = styled.header({
  width: '100%',
  background: '#F6F5EF 100%',
});

const LogoContainer = styled.div({
  margin: '-50px 0 0 0',
  padding: '1rem 0',
  textAlign: 'center',
});

const Logo = styled.img({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
});

const ContentContainer = styled.div({

});

export default function App() {
  const dispatch = useDispatch();

  const accessToken = loadItem('accessToken');
  if (accessToken) {
    dispatch(setAccessToken(accessToken));
    dispatch(requestLoggedUserInfo());
  }

  useEffect(() => {
    dispatch(loadCategories());
  }, []);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div
        className="wrapper"
        style={{
          position: 'relative',
        }}
      >
        <div
          className="topWrap"
          style={{
            position: 'relative',
            height: '250px',
          }}
        >
          <Header style={{
            position: 'fixed',
            zIndex: '99',
            top: 0,
            left: 0,
          }}
          >
            <SignContainer />
            <LogoContainer>
              <Link to="/">
                <Logo src={logo} alt="coffee-and-taste logo" />
              </Link>
            </LogoContainer>
            <CategoryContainer />
          </Header>
        </div>
        <Container style={{

        }}
        >
          <ContentContainer style={{
            position: 'relative',
            height: '100%',
          }}
          >
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signUp" element={<SignUpContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/categories/:categoryId" element={<MenuGroupContainer />} />
              <Route path="/menu-groups/:menuGroupId" element={<MenuListContainer />} />
              <Route path="/menus/:menuId" element={<MenuDetailContainer />} />
            </Routes>
          </ContentContainer>
        </Container>
      </div>
    </BrowserRouter>
  );
}
