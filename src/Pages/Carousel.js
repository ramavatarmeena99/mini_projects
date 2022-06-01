import React from "react";
import Slider from "react-slick";
import Style from "./index.module.css";

export default function Carousel() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      style={{ width: "50px" }}
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    ></button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    ></button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    customPaging: (dots) => (
      <div
        style={{
          width: "25px",
          height: "25px",
          color: "red",
          border: "1px solid red",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            border: "1px solid red",
            borderRadius: "50%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            paddingTop: "2px",
            fontSize: "14px",
          }}
        >
          {dots + 1}
        </div>
      </div>
    ),
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#121212",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#121212",
          padding: "0px 20px",
        }}
      >
        <Slider className={Style.slider} {...settings}>
          <div className={Style.imgSlider}>
            <img
              className={Style.image}
              alt="img"
              src="https://images.hindustantimes.com/tech/img/2021/08/03/960x540/PUBG-Mobile-Tencent-Ban_1625203763846_1627990663466.jpg"
            />
          </div>
          <div className={Style.imgSlider}>
            <img
              alt="img"
              className={Style.image}
              src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/01/14/949612-first-slide.jpg"
            />
          </div>
          <div className={Style.imgSlider}>
            <img
              alt="img"
              className={Style.image}
              src="https://theculturednerd.org/wp-content/uploads/2020/10/Crucible-Featured.png"
            />
          </div>
          <div className={Style.imgSlider}>
            <img
              alt="img"
              className={Style.image}
              src="https://statics.igg.com/sites/igg/www/game/2021/06/06/215329_60bd8a29366571300_min.jpg"
            />
          </div>
          <div className={Style.imgSlider}>
            <img
              alt="img"
              className={Style.image}
              src="https://external-preview.redd.it/rLZXvl7lGMKhQXPF5Wd7Cf8SHqdK2XGzd-QP_1z-zws.jpg?width=640&crop=smart&auto=webp&s=b2183c78b5c66308a0842dcaf0bf8b97434e0f03"
            />
          </div>
          <div className={Style.imgSlider}>
            <img
              alt="img"
              className={Style.image}
              src="https://static3.cbrimages.com/wordpress/wp-content/uploads/2021/06/Guardians-of-the-Galaxy.jpg"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
}
