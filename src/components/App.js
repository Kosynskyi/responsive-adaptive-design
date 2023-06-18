import Header from './Header';
import Cards from './Cards';
import Faq from './Faq/Faq';
import Slider from './Slider';
import Map from './Map/Map';
import '../i18n';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chat from './Chat/Chat';

AOS.init();

function App() {
  return (
    <>
      <Header />
      <Cards />
      <Slider />
      <Map />
      <div
        style={{
          padding: '30px',
          outline: '1px solid yellow',
        }}
      >
        <div
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-anchor-placement="top-bottom"
          style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
        ></div>
      </div>
      <Faq />
      <Chat />
    </>
  );
}

export default App;
