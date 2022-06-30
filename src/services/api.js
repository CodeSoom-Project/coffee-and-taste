import axios from 'axios';

const BASE_URL = 'https://coffee-and-taste.kro.kr/api';

async function fetchData(url) {
  return axios.get(url)
    .then((response) => response.data);
}

export async function fetchCategories() {
  return fetchData(`${BASE_URL}/categories`);
}

export async function fetchMenuGroups(categoryId) {
  return fetchData(`${BASE_URL}/categories/${categoryId}/menu-groups`);
}

export async function fetchMenus(menuGroupId) {
  return fetchData(`${BASE_URL}/menu-groups/${menuGroupId}/menus`);
}

export async function fetchMenu(menuId) {
  return fetchData(`${BASE_URL}/menus/${menuId}`);
}

// TODO : API 가 업데이트되면 url, memberId 를 이용한 호출로 수정해야 함.
// - 아직은 로그인한 memberId 를 서버로부터 호출할 수 없다.
// - 따라서 테스트를 위해 memberId 를 1로 고정했다.
// export async function fetchCart({ accessToken, memberId }) {
// const url = `${BASE_URL}/members/${memberId}/cart`;
export async function fetchCart({ accessToken }) {
  const url = `${BASE_URL}/members/1/cart`;
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return data;
}

export async function postSignUp({
  name, nickname, birthDate, email, password, phoneNumber,
}) {
  const url = `${BASE_URL}/members`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, nickname, birthDate, email, password, phoneNumber,
    }),
  });
  const { id } = await response.json();
  return id;
}

export async function postLogin({ email, password }) {
  const url = `${BASE_URL}/auth/login`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  const { accessToken } = await response.json();
  return accessToken;
}
