/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import styles from "./ProductDisplay.module.css";

function ProductDisplay({ img, thumbnails }) {
  const [thumbs, setThumbs] = useState([]);
  const [imageRendered, setImageRendered] = useState(0);

  const handleChangeImage = (index) => {
    setImageRendered(index);
    if (img[imageRendered] === img[index]) {
      img.classList.add(styles.selected__img);
    } else {
      img.classList.remove(styles.selected__img);
    }
  };

  useEffect(() => {
    if (thumbnails) {
      setThumbs(thumbnails);
    }
  }, [thumbnails]);

  return (
    <section className={styles.display__container}>
      <img
        className={styles.main__img}
        src={img[imageRendered]}
        alt="shoe display"
      />
      <div className={styles.thumbs__container}>
        {thumbs.length > 0 &&
          thumbs.map((thumb, index) => (
            <div
              className={
                index === imageRendered ? styles.img__selected__container : ""
              }
              key={thumb}
            >
              <img
                className={`${
                  index === imageRendered
                    ? styles.img__selected
                    : styles.thumbs__img
                }`}
                src={thumb}
                alt="image.thumb.render"
                onClick={() => handleChangeImage(index)}
              />
            </div>
          ))}
      </div>
    </section>
  );
}

export default ProductDisplay;
