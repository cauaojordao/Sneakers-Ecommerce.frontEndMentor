import { useEffect, useState } from "react";
import styles from "./CartModal.module.css";

function CartModal() {
  const [cartInfo, setCartInfo] = useState([]);
  useEffect(() => {
    setCartInfo(JSON.parse(localStorage.getItem("cartProduct1")));
  }, []);

  console.log(cartInfo)
  return (
    <div id="CartModal" className={styles.cart__modal}>
      <h3>Cart</h3>
      {localStorage.length > 0 ? (
          <div>
          </div>
        ) : (
        <p className={styles.empty__cart}>Your cart is empty.</p>
      )}
    </div>
  );
}

export default CartModal;
