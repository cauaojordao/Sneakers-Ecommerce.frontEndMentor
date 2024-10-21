/* eslint-disable react/prop-types */
import ProductControls from "./ProductControls";
import styles from "./ProductDesc.module.css";

function ProductDesc({ product }) {
  return (
    <section className={styles.desc__container}>
      <h2 className={styles.company}>SNEAKER COMPANY</h2>
      <h1>{product.name}</h1>
      <p>{product.desc}</p>
      <div className={styles.price__container}>
        <h2 className={styles.price}>{`$${product.price / (100 / product.discount)}.00`}</h2>
        <span className={styles.discount}>{product.discount}%</span>
        <span className={styles.originalPrice}>${product.price}.00</span>
      </div>

      <ProductControls
        product={product}
      />
    </section>
  );
}


export default ProductDesc;
