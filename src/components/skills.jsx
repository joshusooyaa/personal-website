
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import '../styles/skills.css'

export default function Skills( {items} ) {
  items = ["HELLO"]
  
  const settings = {
    dots: false,
    infinite: items.length > 3,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: items.length > 3,
    autoplaySpeed: 4500,
    cssEase: "linear",
    arrows: false,
  }

  return (
    <div style={{ width: '100%' }}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div className="skill" key={index}>
            {item}
          </div>
        ))}
      </Slider>
    </div>
  )
}