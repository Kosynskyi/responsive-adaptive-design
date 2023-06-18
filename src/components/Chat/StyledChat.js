import styled from 'styled-components';

export const StyledChatSection = styled.div`
  padding: 60px 0;
`;

export const StyledChatContainer = styled.div`
  padding: 30px;
  border: 1px solid green;
`;

export const StyledChatList = styled.ul``;

export const StyledChatItem = styled.li`
  max-width: 75%;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 10px;
  /* border: 1px solid green; */
  color: ${({ author }) => (author === 'manager' ? 'white' : 'black')};
  background-color: ${({ author }) =>
    author === 'manager' ? '#42A3FF' : '#dbdcdc'};
  margin-left: ${({ author }) => author === 'manager' && 'auto'};
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &[data-last-message-client] {
    /* outline: 5px solid red; */
    border-bottom-left-radius: 0;

    &::after {
      /* outline: 1px solid red; */
      content: '';
      position: absolute;
      bottom: -16px;
      left: -3px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #dbdcdc;
      border-left: 10px solid #dbdcdc;
      transform: rotate(105deg);
    }
  }

  &[data-last-message-manager] {
    /* outline: 5px solid red; */
    border-bottom-right-radius: 0;
    &::after {
      /* outline: 1px solid red; */

      content: '';
      position: absolute;
      bottom: -16px;
      right: -3px;
      width: 0;
      height: 0;
      border-top: 10px solid #42a3ff;
      border-right: 10px solid #42a3ff;
      border-bottom: 10px solid transparent;
      border-left: 10px solid transparent;
      transform: rotate(-15deg);
    }
  }
`;

export const StyledChatAuthor = styled.p`
  margin-bottom: 10px;
`;
