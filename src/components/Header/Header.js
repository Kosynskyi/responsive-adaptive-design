import { useState } from 'react';
import { useMedia } from 'react-use';
import { GiHamburgerMenu } from 'react-icons/gi';

import Container from 'components/Container';
import Logo from 'components/Logo';
import UserNavigation from 'components/UserNavigation';
import ButtonIcon from 'components/ButtonIcon';
import MobileNavigation from 'components/MobileNavigation';
import { StyledHeader, MenuClose } from './Header.styled.js';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const isNarrow = useMedia('(max-width: 767px)');

  const handleOpenMenu = () => setOpenMenu(prev => !prev);

  const handleCloseMenu = () => setOpenMenu(prev => !prev);

  return (
    <Container>
      {isNarrow ? (
        <StyledHeader>
          <Logo />
          <ButtonIcon type="button" onClick={handleOpenMenu}>
            {openMenu ? (
              <MenuClose size={40} />
            ) : (
              <GiHamburgerMenu size={40} color="red" />
            )}
          </ButtonIcon>
          <MobileNavigation isOpen={openMenu} onCloseMenu={handleCloseMenu} />
        </StyledHeader>
      ) : (
        <StyledHeader>
          <Logo />
          <UserNavigation />
        </StyledHeader>
      )}
    </Container>
  );
};

export default Header;
