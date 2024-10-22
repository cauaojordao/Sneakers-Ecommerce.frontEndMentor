import { useState, useEffect } from "react";
import CartModal from "./CartModal";
import cart from "../../assets/icon-cart.svg";
import styles from "./Cart.module.css";

function Cart() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartInfo, setCartInfo] = useState({});

  const handleShowCart = () => {
    setIsCartModalOpen((prev) => !prev);
  };

  const updateCartInfo = () => {
    const cartData = JSON.parse(localStorage.getItem("cartProduct1"));
    const quantity = JSON.parse(localStorage.getItem("cartProduct1.amount"));
    setCartQuantity(quantity);
    setCartInfo(cartData || {});
  };

  useEffect(() => {
    updateCartInfo();
    window.addEventListener("click", updateCartInfo);
    return () => {
      window.removeEventListener("click", updateCartInfo);
    };
  }, []);

  return (
    <div>
      <button onClick={handleShowCart} className={styles.cart}>
        <img src={cart} alt="cart" />

        {cartQuantity > 0 && cartQuantity <= 9 && (
          <span className={styles.cart__count}>{cartQuantity}</span>
        )}
        {cartQuantity > 9 && <span className={styles.cart__count}>9+</span>}
      </button>

      {isCartModalOpen && (
        <CartModal
          cartInfo={cartInfo}
          cartQuantity={cartQuantity}
          closeModal={() => setIsCartModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Cart;
