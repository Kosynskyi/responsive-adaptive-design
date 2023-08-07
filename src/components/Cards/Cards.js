import { useState } from 'react';
import { useMedia } from 'react-use';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Container from 'components/Container';
import { dataCards } from 'data/dataCards';
import {
  CardSection,
  CardList,
  CardItem,
  FakeImg,
  Title,
  DescrWrapper,
  Description,
  Text,
  StyledInputContainerWrapper,
} from './Cards.styled';

const Cards = () => {
  const [currentDescr, setCurrentDescr] = useState(null);
  const isNarrow = useMedia('(max-width: 767px)');

  const toggleDescr = id => {
    currentDescr === id ? setCurrentDescr(null) : setCurrentDescr(id);
  };

  // <div class="block-form__input">
  //   <div class="radiobuttons">
  //     <div class="radiobuttons__item">
  //       Вариант 1
  //       <input type="radio" value="1" checked name="nameradio" />
  //     </div>
  //     <div class="radiobuttons__item">
  //       Вариант 1
  //       <input type="radio" value="2" checked name="nameradio" />
  //     </div>
  //     <div class="radiobuttons__item">
  //       Вариант 1
  //       <input type="radio" value="3" checked name="nameradio" />
  //     </div>
  //   </div>
  // </div>;

  // .radiobuttons {}
  // .radiobuttons__item {
  //   position: relative;
  //   padding: 0px 0px 0px 50px;
  //   font-size: 16px;
  //   color: #b2b2b2;
  //   margin-bottom: 20px;

  //   transition: all .3s ease 0s;
  //   -webtransition: all .3s ease 0s;
  //   -moz-transition: all .3s ease 0s;
  //   -ms-transition: all .3s ease 0s;
  //   -o-transition: all .3s ease 0s;
  // }

  // .radiobuttons__item.active {
  //   color: #000;
  // }

  // .radiobuttons__item input {
  //   display: none;
  // }

  // $.each($('.radiobuttons__item'), function (index, val) {
  //   if ($(this).find('input').prop('checked') === true) {
  //     $(this).addClass('active');
  //   }
  // });
  // $(document).on('click', '.radiobutton__item', function (event) {
  //   $(this)
  //     .parents('.radiobuttons')
  //     .find('.radiobuttons__item')
  //     .removeClass('active');
  //   $(this)
  //     .parents('.radiobuttons')
  //     .find('.radiobuttons__item input')
  //     .prop('checked', false);
  //   $(this).toggleClass('active');
  //   $(this).find('input').prop('checked'.true);
  //   return false;
  // });

  return (
    <CardSection>
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
        <StyledInputContainerWrapper>
          <label>
            <input type="radio" name="gender" value="male" id="male" checked />
            Чоловіча стать
          </label>

          <label for="female">Жіноча стать</label>
          <input type="radio" name="gender" value="female" id="female" />
        </StyledInputContainerWrapper>
      </Container>
    </CardSection>
  );
};

export default Cards;
