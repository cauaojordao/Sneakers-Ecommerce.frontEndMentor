import imageProduct1 from "../../assets/image-product-1.jpg";
import imageProduct2 from "../../assets/image-product-2.jpg";
import imageProduct3 from "../../assets/image-product-3.jpg";
import imageProduct4 from "../../assets/image-product-4.jpg";
import imageProductThumb1 from "../../assets/image-product-1-thumbnail.jpg";
import imageProductThumb2 from "../../assets/image-product-2-thumbnail.jpg";
import imageProductThumb3 from "../../assets/image-product-3-thumbnail.jpg";
import imageProductThumb4 from "../../assets/image-product-4-thumbnail.jpg";
import ProductDisplay from "../product/ProductDisplay";
import ProductDesc from "../product/ProductDesc";

import styles from "./Product.module.css";
function Product() {
  const product = {
    name: "Fall Limited Edition Sneakers",
    price: 250,
    discount: 50,
    img: [imageProduct1, imageProduct2, imageProduct3, imageProduct4],
    desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they will withstand everything the weather can offer.",
    thumbnails: [
      imageProductThumb1,
      imageProductThumb2,
      imageProductThumb3,
      imageProductThumb4,
    ],
    id: 1,
  };

  return (
    <main className={styles.product__container}>
      <ProductDisplay img={product.img} thumbnails={product.thumbnails} />
      <ProductDesc
        product={product}/>
    </main>
  );
}

export default Product;
