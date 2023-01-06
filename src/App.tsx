import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './App.css';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import FooterCTA from './components/FooterCTA/FooterCTA';
import Header from './components/Header/Header';
import RegisterCTA from './components/RegisterCTA/RegisterCTA';
import RelatedCompanies from './components/RelatedCompanies/RelatedCompanies';
import SectionContent1 from './components/SectionContent1/SectionContent1';
import SectionContent2 from './components/SectionContent2/SectionContent2';
import SectionContent3 from './components/SectionContent3/SectionContent3';
import Testimonials from './components/Testimonials/Testimonials';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';

function App() {
  return (
    <div className="App">
      <Header />
      <RelatedCompanies />
      <SectionContent1 />
      <RegisterCTA />
      <SectionContent2 />
      <Testimonials />
      <CTA />
      <SectionContent3 />
      <WhyChooseUs />
      <FooterCTA />
      <Footer />
    </div>
  );
}

export default App;
