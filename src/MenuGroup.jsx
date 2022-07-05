import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const MenuGroupStyle = styled.div({
  margin: '40px 0',
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridGap: '1rem',
});

const MenuGroupImage = styled.div({
  width: '200px',
  height: '200px',
  margin: '50px auto 30px auto',
  overflow: 'hidden',
  borderRadius: '50%',
  '& img': {
    width: '100%',
    height: '100%',
    '&:hover': {
      transform: 'scale(1.2, 1.2)',
      transition: '1s',
    },
  },
});

const MenuGroupNoImage = styled.div(
  {
    margin: '50px auto 30px auto',
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    background: '#1E3932',
  },
);

const MenuGroupName = styled.div({
  margin: '10px 0',
  textAlign: 'center',
  '& a': {
    fontSize: '1.3rem',
    color: '#555555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export default function MenuGroup({ menuGroups, selectedCategory }) {
  return (
    <MenuGroupStyle>
      {
        menuGroups.map(({ id, name, representativeImagePath }) => (
          <div key={id}>
            {
              representativeImagePath ? (
                <MenuGroupImage>
                  <img src={`https://coffee-and-taste.kro.kr${representativeImagePath}`} alt={name} />
                </MenuGroupImage>
              ) : (
                <MenuGroupNoImage />
              )
            }
            <MenuGroupName>
              <Link to={`/menu-groups/${id}`} state={{ categoryId: selectedCategory }}>
                {name}
              </Link>
            </MenuGroupName>
          </div>
        ))
      }
    </MenuGroupStyle>
  );
}
