import { useState } from 'react';
import { useMedia } from 'react-use';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Container from 'components/Container';
import { dataCards } from 'data/dataCards';
import {
  CardList,
  CardItem,
  FakeImg,
  Title,
  DescrWrapper,
  Description,
  Text,
} from './Cards.styled';

const Cards = () => {
  const [currentDescr, setCurrentDescr] = useState(null);
  const isNarrow = useMedia('(max-width: 767px)');

  const toggleDescr = id => {
    currentDescr === id ? setCurrentDescr(null) : setCurrentDescr(id);
  };

  return (
    <Container>
      <CardList>
        {dataCards.map(({ id, title, description, text }) => (
          <CardItem key={id}>
            <FakeImg></FakeImg>
            <Title>{title}</Title>

            {isNarrow ? (
              <>
                <DescrWrapper onClick={() => toggleDescr(id)}>
                  <Description>{description}</Description>
                  {id === currentDescr ? (
                    <TiArrowSortedUp />
                  ) : (
                    <TiArrowSortedDown />
                  )}
                </DescrWrapper>
                {id === currentDescr && <Text>{text}</Text>}
              </>
            ) : (
              <>
                <Description>{description}</Description>
                <Text>{text}</Text>
              </>
            )}
          </CardItem>
        ))}
      </CardList>
    </Container>
  );
};

export default Cards;
