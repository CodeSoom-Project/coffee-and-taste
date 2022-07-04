import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import {
  addCheckedCartItem,
  cartMenuQuantityMinusOne,
  cartMenuQuantityPlusOne,
  clearCheckedCartItems,
  loadCart,
  removeUncheckedCartItem,
  requestOrder,
  requestRemoveCartItem,
  requestUpdateCartItemQuantity,
} from './store';

import Cart from './Cart';

import { CURRENT_PAGE_RELOAD } from './constants';

export default function CartContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartMenus = useSelector((state) => state.cartMenus);
  const checkedCartItems = useSelector((state) => state.checkedCartItems);

  useEffect(() => {
    dispatch(loadCart());
    dispatch(clearCheckedCartItems());
  }, []);

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
    dispatch(requestUpdateCartItemQuantity(menuId))
      .then(() => {
        navigate(CURRENT_PAGE_RELOAD);
      });
  };

  return (
    <Cart
      cartMenus={cartMenus}
      checkedCartItems={checkedCartItems}
      onChange={handleChange}
      onClick={handleClickOrder}
      removeCartItem={handleClickRemoveCartItem}
      increaseQuantityOne={handleClickQuantityPlusOne}
      decreaseQuantityOne={handleClickQuantityMinusOne}
      updateItemQuantity={handleClickUpdateItemQuantity}
    />
  );
}
