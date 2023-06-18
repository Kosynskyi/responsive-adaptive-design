import React, { useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import Container from 'components/Container/Container';
import {
  StyledFaqMainTitle,
  StyledFaqSubTitle,
  StyledFaqItemTitle,
  StyledFaqText,
  StyledFaqItem,
} from './styledFaq';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const toggleOpen = () => {
    setIsOpen(prev => !prev);
    console.log(777);
  };

  const question1 = t('registrationAndSetting', { returnObjects: true });

  console.log('question1', question1);

  return (
    <Container style={{ paddingBottom: '100px' }}>
      <StyledFaqMainTitle>F.A.Q.</StyledFaqMainTitle>
      <StyledFaqSubTitle>Registration and login</StyledFaqSubTitle>
      <ul>
        <StyledFaqItem onClick={toggleOpen} isOpen={isOpen}>
          <StyledFaqItemTitle isOpen={isOpen}>
            How to register on Qweqwe?
          </StyledFaqItemTitle>
          {isOpen && (
            <StyledFaqText>
              Сvelit esse quam nihil molestiae consequatur, vel illum qui quam
              nihil molestiae consequatur dolorem eum illum qui dolorem. Neque
              porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquame eius modi
              tempora incidunt ut Labore et dolore magnam aliquam quaerat
              voluptatem. Corpti quos dolores et quas molestias excludeuri sint
              occaecati cupiditate non предусмотрительно, similique sunt in
              culpa qui officia deserunt mollitia animi, id est Laborum et
              dolorum fuga Et ha. rerum facilis est et expedita Differentio. Nam
              libero tempore, cum soluta nobis est eligendi optio cumque nihil
              impedit quo minus id quod maxime placeat facere possimus, omnis
              voluptas asserta est, omnis dolor repellendus. Nam libero tempore,
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus
              id quod maxime placeat facere possimus; Nam libero tempore, cum
              soluta nobis est eligendi optio cumque nihil impedit quo minus id
              quod maxime placeat facere possimus. Nam libero tempore, cum
              soluta nobis est eligendi optio cumque nihil impedit quo minus id
              quod maxime placeat facere possimus. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </StyledFaqText>
          )}
        </StyledFaqItem>
      </ul>
    </Container>
  );
};

export default Faq;
