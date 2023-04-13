import { useState } from 'react';
import { useMedia } from 'react-use';
import Container from 'components/Container';
import Logo from 'components/Logo';
import UserNavigation from 'components/UserNavigation';
import ButtonIcon from 'components/ButtonIcon';
import { StyledHeader, BurgerMenu } from './Header.styled.js';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation.js';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isNarrow = useMedia('(max-width: 767px)');

  const handleOpenMenu = () => setOpenMenu(prev => !prev);

  const handleCloseMenu = () => setOpenMenu(prev => !prev);

  return (
    <Container>
      <StyledHeader>
        {openMenu ? (
          <MobileNavigation onClick={handleCloseMenu} />
        ) : (
          <>
            <Logo />
            {isNarrow ? (
              <ButtonIcon type="button" onClick={handleOpenMenu}>
                <BurgerMenu size={44} />
              </ButtonIcon>
            ) : (
              <UserNavigation />
            )}
          </>
        )}
      </StyledHeader>
    </Container>
  );
};

export default Header;
