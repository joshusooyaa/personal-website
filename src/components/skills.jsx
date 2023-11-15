
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Skills( {items} ) {
  items = [1, 2, 3, 4, 5, 6]
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
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