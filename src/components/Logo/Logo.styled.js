import styled from 'styled-components';

export const StyledLogo = styled.div`
  /* ======== */
  /* вирівнювання за допомогою position */
  /* position: relative; */
  /* ======== */

  /* ======== */
  /* вирівнювання за допомогою flex */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* ======== */

  /* ======== */
  /* вирівнювання за допомогою grid */
  display: grid;
  place-items: center;
  /* ======== */

  border-radius: 50%;
  background-color: red;
  width: 44px;
  height: 44px;
`;

export const LogoName = styled.p`
  /* ======== */
  /* вирівнювання за допомогою position */

  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  /* ======== */
`;
