import { useState, useEffect } from "react";
import CartModal from "./CartModal";  
import cart from "../../assets/icon-cart.svg";
import styles from "./Cart.module.css";

function Cart() {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartModal, setCartModal] = useState(-1);

  const handleShowCart = () => {
    let state = cartModal;
    state === -1 ? (state = 1) : (state = -1);
    setCartModal(state);
  }
  const updateCartQuantity = () => {
    let quantity = 0;
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i).includes("amount")) {
        quantity += parseInt(localStorage.getItem(localStorage.key(i)));
      }
    }
    setCartQuantity(quantity);
  };

  useEffect(() => {
    updateCartQuantity();
    window.addEventListener("click", updateCartQuantity);
    return () => {
      window.removeEventListener("click", updateCartQuantity);
    };
  }, []);

  return (
    <div>
      <button onClick={() => handleShowCart()} className={styles.cart}>
        <img src={cart} alt="cart" />

        {cartQuantity > 0 && cartQuantity <= 9 && (
          <span className={styles.cart__count}>{cartQuantity}</span>
        )}
        {cartQuantity > 9 && <span className={styles.cart__count}>9+</span>}

      </button>
      {cartModal === 1 && (<CartModal />)}
      
    </div>
  );
  
}
export default Cart;
