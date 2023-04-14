import { useEffect } from 'react';

import UserNavigation from 'components/UserNavigation';
import { MobileNavigationWrapper } from './MobileNavigation.styled';

const MobileNavigation = ({ isOpen, onCloseMenu }) => {
  useEffect(() => {
    isOpen
      ? (window.document.body.style.overflow = 'hidden')
      : (window.document.body.style.overflow = 'visible');
  }, [isOpen]);

  return (
    <MobileNavigationWrapper
      style={{
        transform: isOpen && 'translateY(0)',
        visibility: isOpen && 'visible',
      }}
    >
      <UserNavigation onCloseMenu={onCloseMenu} />
    </MobileNavigationWrapper>
  );
};

export default MobileNavigation;
