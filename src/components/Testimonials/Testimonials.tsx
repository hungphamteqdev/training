import Slider, { CustomArrowProps } from 'react-slick';
import dots from '../../images/dots.png';
import doubleQuote2 from '../../images/double-quote-2.png';
import doubleQuote from '../../images/double-quote.png';
import sliderImage from '../../images/slider-image.png';
import starts from '../../images/starts.png';
import styles from './Testimonials.module.scss';

const SlickButtonFix = ({
  children,
  ...props
}: CustomArrowProps & { children: React.ReactNode }) => (
  <span {...props}>{children}</span>
);

const RightArrow = () => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 5H15M15 5L11 1M15 5L11 9"
        stroke="#453232"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const LeftArrow = () => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 5H1M1 5L5 1M1 5L5 9"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const SliderItem = () => {
  return (
    <div className={styles['testimonials__slider-item']}>
      <div className={styles['testimonials__slider-image']}>
        <img src={sliderImage} alt="" />
        <img src={doubleQuote} alt="" />
      </div>
      <div className={styles['testimonials__slider-text']}>
        <img src={doubleQuote2} alt="" />
        <h3>Save Time Managing Social Media For Your Business</h3>
        <p>
          Is be upon sang fond must shew. Really boy law county she unable her
          sister. Feet you off its like like six. Among sex are leave law built
          now. In built table in an rapid blush. Merits behind on afraid or
          warmly.
        </p>
        <p>
          Believing neglected so so allowance existence departure in. In design
          active temper be uneasy.
        </p>
        <img src={starts} alt="" />
        <h4>Angela Taylor</h4>
        <p>CEO SAMSUNG</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    nextArrow: (
      <SlickButtonFix>
        <button>
          <RightArrow />
        </button>
      </SlickButtonFix>
    ),
    prevArrow: (
      <SlickButtonFix>
        <button>
          <LeftArrow />
        </button>
      </SlickButtonFix>
    ),
  };
  return (
    <div className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonials__inner}>
          <div className={styles.testimonials__heading}>
            <p>Testimonials</p>
            <h2>Check what our clients are saying</h2>
          </div>
          <div className={`${styles.testimonials__slider}`}>
            <Slider {...settings} className="testimonials-slider">
              <div>
                <SliderItem />
              </div>
              <div>
                <SliderItem />
              </div>
              <div>
                <SliderItem />
              </div>
              <div>
                <SliderItem />
              </div>
              <div>
                <SliderItem />
              </div>
              <div>
                <SliderItem />
              </div>
            </Slider>
            <img src={dots} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
