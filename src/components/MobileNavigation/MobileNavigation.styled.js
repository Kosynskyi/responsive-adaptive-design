import styled from 'styled-components';

export const MobileNavigationWrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 65px;
  left: 0;
  padding: 48px 40px;
  width: 100vw;
  height: 100vh;
  pointer-events: initial;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.9);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateY(100%);
  overflow: hidden;
`;
