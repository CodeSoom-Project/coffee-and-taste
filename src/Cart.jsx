import styled from '@emotion/styled';

import { BsFillDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';

const ItemContainer = styled.div({
  border: '1px solid gray',
  margin: '20px 0',
});

const CartTitle = styled.h1({
  fontSize: '2rem',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor: '#321414',
  lineHeight: '4rem',
  paddingLeft: '10px',
});

const CartButtonGroup = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& input[type=checkbox]': {
    width: '35px',
    height: '35px',
    cursor: 'pointer',
  },
});

const CartItem = styled.div({
  display: 'grid',
  gridTemplateColumns: '40% auto',
});

const CartItemImage = styled.div(
  ({ url }) => ({
    margin: '30px auto',
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    ...(url && {
      background: `url("https://coffee-and-taste.kro.kr${url}") center/100% no-repeat`,
    }),
  }),
);

const CartItemInfo = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '15px',
});

const ItemName = styled.h1({
  fontSize: '1.5rem',
  fontWeight: '600',
});

const ItemEnglishName = styled.h2({
  fontSize: '1.1rem',
  fontWeight: '350',
  color: 'rgba(179, 179, 179)',
});

const ItemPrice = styled.h3({
  fontSize: '1.3rem',
});

const ItemQuantityUl = styled.ul({
  listStyle: 'none',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr) 3fr',
  alignContent: 'center',
  '& li': {
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.7rem',
    lineHeight: '3rem',
    '& button': {
      width: '5rem',
      height: '2rem',
      color: 'white',
      borderRadius: '30px',
      backgroundColor: '#006633',
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
      fontSize: '1rem',
      lineHeight: '1.5rem',
    },
  },
});

const OrderDiv = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '3rem 0',
});

const OrderButton = styled.button({
  width: '70%',
  height: '3rem',
  fontSize: '1.3rem',
  color: 'white',
  borderRadius: '30px',
  backgroundColor: '#006633',
  outline: 'none',
  border: 'none',
  cursor: 'pointer',
});

export default function Cart({
  cartMenus,
  onChange,
  onClick,
  removeCartItem,
  increaseQuantityOne,
  decreaseQuantityOne,
  updateItemQuantity,
}) {
  const handleChange = (event) => {
    const { checked, value } = event.target;
    onChange({ checked, value });
  };

  return (
    <>
      <CartTitle>장바구니</CartTitle>
      <hr />
      {
        cartMenus.map(({
          id,
          menu: {
            name, englishName, price, imagePath,
          },
          quantity,
        }) => (
          <ItemContainer>
            <CartButtonGroup>
              <input type="checkbox" name="menuId" value={id} onChange={handleChange} />
              <VscClose size="45" cursor="pointer" onClick={() => removeCartItem(id)} />
            </CartButtonGroup>
            <CartItem>
              <CartItemImage url={imagePath} />
              <CartItemInfo>
                <ItemName>{name}</ItemName>
                <ItemEnglishName>{englishName}</ItemEnglishName>
                <ItemPrice>
                  {price ? price.toLocaleString('ko-KR') : null}
                  원
                </ItemPrice>
                <ItemQuantityUl id={id}>
                  <li>
                    <BsFillDashCircleFill onClick={() => decreaseQuantityOne(id)} cursor="pointer" />
                  </li>
                  <li>
                    <span>{quantity}</span>
                  </li>
                  <li>
                    <BsPlusCircleFill onClick={() => increaseQuantityOne(id)} cursor="pointer" />
                  </li>
                  <li>
                    <button type="button" onClick={() => updateItemQuantity(id)}>변경</button>
                  </li>
                </ItemQuantityUl>
              </CartItemInfo>
            </CartItem>
          </ItemContainer>
        ))
      }
      <OrderDiv>
        <OrderButton onClick={onClick}>주문하기</OrderButton>
      </OrderDiv>
    </>
  );
}