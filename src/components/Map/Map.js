import Container from 'components/Container';

const Map = () => {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d637.754273047169!2d28.658778578905856!3d50.254265059855314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c6493ef20603f%3A0xa890de8871e5eadd!2z0KHQvtCx0L7RgNC90LDRjyDQv9C7Liwg0JbQuNGC0L7QvNC40YAsINCW0LjRgtC-0LzQuNGA0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDEwMDAw!5e0!3m2!1sru!2sua!4v1681582166455!5m2!1sru!2sua"
        title="main square of the city"
        width="100%"
        height="550"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

export default Map;
