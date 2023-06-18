import React, { useState, useEffect } from 'react';
import Container from 'components/Container/Container';
import {
  StyledChatSection,
  StyledChatContainer,
  StyledChatList,
  StyledChatItem,
  StyledChatAuthor,
} from './StyledChat.js';

const dialogs = [
  {
    id: 1,
    message: 'Message from client 1',
    role: 'client',
  },
  {
    id: 2,
    message: 'Message from client 2',
    role: 'client',
  },
  {
    id: 3,
    message: 'Message from client 3',
    role: 'client',
  },
  {
    id: 4,
    message: 'Message from manager 1',
    role: 'manager',
  },
  {
    id: 5,
    message: 'Message from client 4',
    role: 'client',
  },
  {
    id: 6,
    message: 'Message from manager 2',
    role: 'manager',
  },
  {
    id: 7,
    message: 'Message from client 5',
    role: 'client',
  },
  {
    id: 8,
    message: 'Message from manager 3',
    role: 'manager',
  },
  {
    id: 9,
    message: 'Message from manager 4',
    role: 'manager',
  },
  {
    id: 10,
    message: 'Message from client 6',
    role: 'client',
  },
  {
    id: 11,
    message: 'Message from client 5',
    role: 'client',
  },
  {
    id: 12,
    message: 'Message from manager 5',
    role: 'manager',
  },
  {
    id: 13,
    message: 'Message from manager 6',
    role: 'manager',
  },
];

const Chat = () => {
  const [lastClientMessage, setLastClientMessage] = useState(null);
  const [lastManagerMessage, setLastManagerMessage] = useState(null);

  const findLastAuthorIndex = () => {
    dialogs.forEach((item, idx) =>
      item.role === 'client'
        ? setLastClientMessage(idx)
        : setLastManagerMessage(idx)
    );
  };

  useEffect(() => {
    findLastAuthorIndex();
  }, []);

  console.log('lastClientMessage', lastClientMessage);
  console.log('lastAdminMessage', lastManagerMessage);

  return (
    <Container>
      <StyledChatSection>
        <StyledChatContainer>
          <h2>Test styled chat:</h2>
          <StyledChatList>
            {dialogs.map(({ id, message, role }, idx) => (
              <StyledChatItem
                key={id}
                author={role}
                data-last-message-client={
                  role === 'client' && idx === lastClientMessage
                    ? lastClientMessage
                    : null
                }
                data-last-message-manager={
                  role === 'manager' && idx === lastManagerMessage
                    ? lastManagerMessage
                    : null
                }
              >
                <StyledChatAuthor>{role}</StyledChatAuthor>
                <p>{message}</p>
              </StyledChatItem>
            ))}
          </StyledChatList>
        </StyledChatContainer>
      </StyledChatSection>
    </Container>
  );
};

export default Chat;
