import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { loadCart } from './store';

export default function CartContainer() {
  // TODO : accessToken 을 이용해서 cart 에 담긴 항목을 불러오는 api 요청

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  });

  return (
    <div>
      <h1>Cart</h1>
      <hr />
    </div>
  );
}
