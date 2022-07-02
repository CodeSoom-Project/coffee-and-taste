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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  listStyle: 'none',
  '& li': {
    fontSize: '1.5rem',
    paddingRight: '1rem',
  },
});

const OrderDiv = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const OrderButton = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '70%',
  height: '2.5rem',
  fontSize: '1.3rem',
  color: 'white',
  borderRadius: '30px',
  backgroundColor: '#006633',
  padding: '0.5rem',
  cursor: 'pointer',
});

export default function Cart({
  cartMenus, onChange, onClick, increaseQuantityOne, decreaseQuantityOne,
}) {
  const handleChange = (event) => {
    const { checked, value } = event.target;
    onChange({ checked, value });
  };

  const handleClickRemoveItem = () => {
    // TODO : 선택한 메뉴를 장바구니에서 제거하는 api 호출
    alert('해당 기능은 준비중입니다.');
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
              <VscClose size="45" cursor="pointer" onClick={handleClickRemoveItem} />
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
                  <li>{quantity}</li>
                  <li>
                    <BsPlusCircleFill onClick={() => increaseQuantityOne(id)} cursor="pointer" />
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
