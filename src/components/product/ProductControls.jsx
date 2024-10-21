/* eslint-disable react/prop-types */
import styles from "./ProductControls.module.css";
import cart from "../../assets/icon-cart.svg";
import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";
import { useState } from "react";

function ProductControls({ product }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      localStorage.setItem(`cartProduct${product.id}`, JSON.stringify(product));
      localStorage.setItem(`cartProduct${product.id}.amount`, quantity);
    } else {
      localStorage.removeItem(`cartProduct${product.id}`);
      localStorage.removeItem(`cartProduct${product.id}.amount`);}
  };

  return (
    <div className={styles.product__controls}>
      <div className={styles.quantity__controls}>
        <button
          onMouseDown={() => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          }}
        >
          <img src={minus} alt="minus" />
        </button>
        <span>{quantity}</span>
        <button onMouseDown={() => setQuantity(quantity + 1)}>
          <img src={plus} alt="plus" />
        </button>
      </div>
      <button onClick={handleAddToCart} className={styles.cart__btn}>
        <img src={cart} alt="add to cart" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
}

export default ProductControls;
