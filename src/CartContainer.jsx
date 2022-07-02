import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  loadCart,
  addCheckedCartItem,
  removeUncheckedCartItem,
  requestOrder,
  cartMenuQuantityPlusOne,
  cartMenuQuantityMinusOne,
  requestUpdateCartItemQuantity,
} from './store';

import Cart from './Cart';

export default function CartContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  const cartMenus = useSelector((state) => state.cartMenus);

  const checkedItemHandler = (isChecked, checkedItemId) => {
    if (isChecked) {
      dispatch(addCheckedCartItem(checkedItemId));
    } else if (!isChecked) {
      dispatch(removeUncheckedCartItem(checkedItemId));
    }
  };

  const handleChange = ({ checked, value }) => {
    checkedItemHandler(checked, value);
  };

  const handleClickOrder = () => {
    dispatch(requestOrder());
  };

  const handleClickQuantityPlusOne = (menuId) => {
    dispatch(cartMenuQuantityPlusOne(menuId));
  };

  const handleClickQuantityMinusOne = (menuId) => {
    dispatch(cartMenuQuantityMinusOne(menuId));
  };

  const handleClickUpdateItemQuantity = (menuId) => {
    // TODO : 특정 menuId 와 해당 menuId 의 quantity 를 전달하여 수량 업데이트 요청하기
    dispatch(requestUpdateCartItemQuantity(menuId));
  };

  if (cartMenus.length === 0) {
    return (
      <div>
        <h1>Cart</h1>
        <hr />
        <div>장바구니에 담긴 메뉴가 없습니다!</div>
      </div>
    );
  }

  return (
    <Cart
      cartMenus={cartMenus}
      onChange={handleChange}
      onClick={handleClickOrder}
      increaseQuantityOne={handleClickQuantityPlusOne}
      decreaseQuantityOne={handleClickQuantityMinusOne}
      updateItemQuantity={handleClickUpdateItemQuantity}
    />
  );
}
