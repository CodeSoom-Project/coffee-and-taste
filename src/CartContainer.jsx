import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  addAllCartItems,
  addCheckedCartItem,
  cartMenuQuantityMinusOne,
  cartMenuQuantityPlusOne,
  clearCheckedCartItems,
  loadCart,
  removeUncheckedCartItem,
  requestDeleteAllCartItems,
  requestDeleteSelectedCartItem,
  requestOrder,
  requestRemoveCartItem,
  requestUpdateCartItemQuantity,
} from './store';

import Cart from './Cart';

export default function CartContainer() {
  const dispatch = useDispatch();

  const cartMenus = useSelector((state) => state.cartMenus);
  const checkedCartItems = useSelector((state) => state.checkedCartItems);

  useEffect(() => {
    dispatch(clearCheckedCartItems());
    dispatch(loadCart());
  }, []);

  const handleChangeCheckItem = ({ isChecked, checkedItemId }) => {
    if (isChecked) {
      dispatch(addCheckedCartItem(checkedItemId));
    } else {
      dispatch(removeUncheckedCartItem(checkedItemId));
    }
  };

  const handleChangeCheckOrUncheckAllItems = (isChecked, cartItems) => {
    if (isChecked) {
      const checkedItems = [];
      cartItems.forEach((cartItem) => { checkedItems.push(cartItem.id); });
      dispatch(addAllCartItems(checkedItems));
    } else {
      dispatch(addAllCartItems([]));
    }
  };

  const handleClickRemoveCartItem = (menuId) => {
    if (window.confirm('메뉴를 삭제하시겠습니까?')) {
      dispatch(requestRemoveCartItem(menuId));
    }
  };

  const handleClickOrder = () => {
    if (window.confirm('선택한 메뉴를 주문하시겠습니까?')) {
      dispatch(requestOrder());
    }
  };

  const handleClickQuantityPlusOne = (menuId) => {
    dispatch(cartMenuQuantityPlusOne(menuId));
  };

  const handleClickQuantityMinusOne = (menuId, currentQuantity) => {
    if (currentQuantity === 1) {
      return;
    }
    dispatch(cartMenuQuantityMinusOne(menuId));
  };

  const handleClickUpdateItemQuantity = (menuId) => {
    if (window.confirm('주문 수량을 변경하시겠습니까?')) {
      dispatch(requestUpdateCartItemQuantity(menuId));
    }
  };

  const handleClickDeleteSelectedCartItems = (totalQuantity) => {
    if (!totalQuantity) {
      alert('삭제할 메뉴를 먼저 선택해주세요.');
      return;
    }

    if (window.confirm('선택한 메뉴를 삭제하시겠습니까?')) {
      dispatch(requestDeleteSelectedCartItem());
    }
  };

  const handleClickDeleteAllCartItems = () => {
    if (window.confirm('전체 메뉴를 삭제하시겠습니까?')) {
      dispatch(requestDeleteAllCartItems());
    }
  };

  return (
    <Cart
      cartMenus={cartMenus}
      checkedCartItems={checkedCartItems}
      removeSelectedCartItems={handleClickDeleteSelectedCartItems}
      removeAllCartItems={handleClickDeleteAllCartItems}
      onChange={handleChangeCheckItem}
      onClick={handleClickOrder}
      removeCartItem={handleClickRemoveCartItem}
      increaseQuantityOne={handleClickQuantityPlusOne}
      decreaseQuantityOne={handleClickQuantityMinusOne}
      updateItemQuantity={handleClickUpdateItemQuantity}
      checkOrUncheckAllItems={handleChangeCheckOrUncheckAllItems}
    />
  );
}
