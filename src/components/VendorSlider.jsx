// ImageSlider.jsx
import React from 'react';
import Slider from 'react-slick';

const VendorSlider = ({ images }) => {
  if (!images || images.length === 0) {
    // Render a placeholder or return null if no images are available
    return <div>Loading...</div>; // Or any other placeholder
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // Add other settings as needed
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} style={{ width: '100%' }} />
        </div>
      ))}
    </Slider>
  );
};

export default VendorSlider;
