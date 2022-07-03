import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addCheckedCartItem,
  cartMenuQuantityMinusOne,
  cartMenuQuantityPlusOne,
  loadCart,
  removeUncheckedCartItem,
  requestOrder,
  requestRemoveCartItem,
  requestUpdateCartItemQuantity,
} from './store';

import Cart from './Cart';

export default function CartContainer() {
  const dispatch = useDispatch();

  const cartMenus = useSelector((state) => state.cartMenus);

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

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

  const handleClickRemoveCartItem = (menuId) => {
    dispatch(requestRemoveCartItem(menuId));
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
      removeCartItem={handleClickRemoveCartItem}
      increaseQuantityOne={handleClickQuantityPlusOne}
      decreaseQuantityOne={handleClickQuantityMinusOne}
      updateItemQuantity={handleClickUpdateItemQuantity}
    />
  );
}
