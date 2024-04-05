import { useState } from "react";
import { ArrowBigLeft } from "lucide-react";
import { ArrowBigRight } from "lucide-react";
import "./img-slider.css";
type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImg = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  };

  const showNextImg = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  };

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <img src={imageUrls[imageIndex]} className="img-slider-img" alt="" />
      <button
        onClick={showPrevImg}
        className="img-slider-btn"
        style={{ left: "0" }}
      >
        <ArrowBigLeft />
      </button>
      <button
        onClick={showNextImg}
        className="img-slider-btn"
        style={{ right: "0" }}
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
