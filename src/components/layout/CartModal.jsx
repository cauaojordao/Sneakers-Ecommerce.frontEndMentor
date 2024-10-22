/* eslint-disable react/prop-types */
import trash from "../../assets/icon-delete.svg";
import { useRef, useEffect } from "react";
import styles from "./CartModal.module.css";

function CartModal({ cartInfo, cartQuantity, closeModal }) {
  const modalRef = useRef(null);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleClickOutside);
    return () => {
      document.removeEventListener("mouseup", handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.modal__overlay}>
      <div id="CartModal" className={styles.cart__modal} ref={modalRef}>
        <h3>Cart</h3>
        {cartQuantity > 0 ? (
          <div className={styles.cart__container}>
            <div className={styles.cart__info}>
              <img className={styles.img__preview} src={cartInfo.img[0]} alt="cart" />
              <div className={styles.container__details}>
                <p>{cartInfo.name}</p>
                <div className={styles.cart__pricing}>
                  <p>${(cartInfo.price * cartInfo.discount) / 100}.00</p>
                  <p>x {cartQuantity}</p>
                  <p className={styles.total}>
                    ${""}
                    {((cartInfo.price * cartInfo.discount) / 100) *
                      cartQuantity}.00
                  </p>
                </div>
              </div>
              <button className={styles.trash}>
                <img src={trash} alt="trash" />
              </button>
            </div>
            <button className={styles.checkout__btn}>Checkout</button>
          </div>
        ) : (
          <p className={styles.empty__cart}>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}

export default CartModal;
