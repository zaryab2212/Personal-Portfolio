import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider = ({ name, images }) => {
  return (
    <>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {images &&
          images.length > 0 &&
          images.map((img) => {
            return (
              <div>
                <img src={img} />
                <p className="legend">{name}</p>
              </div>
            );
          })}
      </Carousel>
    </>
  );
};

export default Slider;
