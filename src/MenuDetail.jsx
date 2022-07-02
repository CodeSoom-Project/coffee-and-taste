import styled from '@emotion/styled';

import { BsFillDashCircleFill, BsPlusCircleFill } from 'react-icons/bs';

const MenuImage = styled.div(
  ({ url }) => ({
    margin: '30px auto',
    borderRadius: '50%',
    width: '300px',
    height: '300px',
    ...(url && {
      background: `url("https://coffee-and-taste.kro.kr${url}") center/100% no-repeat`,
    }),
  }),
);

const MenuName = styled.h1({
  fontSize: '1.7rem',
  paddingBottom: '.5rem',
});

const MenuEnglishName = styled.h2({
  fontSize: '1.5rem',
  paddingBottom: '.5rem',
});

const MenuDescription = styled.p({
  fontSize: '1.2rem',
  paddingTop: '.5rem',
  lineHeight: '1.6rem',
});

const MenuPrice = styled.h3({
  fontSize: '1.3rem',
  padding: '1rem 0',
});

const OrderButton = styled.button({
  fontSize: '1.1rem',
  borderRadius: '10%',
  color: 'white',
  backgroundColor: '#006633',
  padding: '0.5rem',
});

const CartButton = styled.button({
  fontSize: '1.1rem',
  borderRadius: '10%',
  color: 'white',
  backgroundColor: '#006633',
  padding: '0.5rem',
});

const MenuQuantity = styled.div({
  display: 'flex',
  alignItems: 'center',
});

const Quantity = styled.span({
  fontSize: '1.5rem',
  padding: '0.5rem 1rem',
});

export default function MenuDetail({
  menu: {
    description, englishName, imagePath, name, price,
  },
}) {
  const handleClickAddToCart = () => {
    // TODO : 클릭한 메뉴를 장바구니에 담는 api 호출하기

  };

  const handleClickPlusOne = () => {
    // TODO : 메뉴 수량 +1
    alert('handleClickPlusOne');
  };

  const handleClickMinusOne = () => {
    // TODO : 메뉴 수량 -1
    alert('handleClickMinusOne');
  };

  return (
    <>
      <MenuImage url={imagePath} />
      <MenuName>{name}</MenuName>
      <MenuEnglishName>{englishName}</MenuEnglishName>
      <hr />
      <MenuDescription>
        {description ? description.split('\n').map((line) => (
          <span>
            {line}
            <br />
          </span>
        )) : null}
      </MenuDescription>
      <MenuPrice>
        {price ? price.toLocaleString('ko-KR') : null}
        원
      </MenuPrice>
      <MenuQuantity>
        <BsFillDashCircleFill size="30" onClick={handleClickMinusOne} />
        <Quantity>1</Quantity>
        <BsPlusCircleFill size="30" onClick={handleClickPlusOne} />
      </MenuQuantity>
      <OrderButton>주문하기</OrderButton>
      <CartButton onClick={handleClickAddToCart}>장바구니에 담기</CartButton>

    </>
  );
}
