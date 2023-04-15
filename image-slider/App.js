import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchWallpapers() {
      const response = await fetch(
        "https://www.reddit.com/r/wallpaper.json?limit=20"
      );
      const json = await response.json();
      const images = json.data.children.map(
        (child) => child.data.url
      );
      setImages(images);
    }

    fetchWallpapers();
  }, []);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>Random wallpapers</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="wallpaper" />
              </div>
            )
        )}
      </div>
    </div>
  );
}
