import React,{useState,useEffect} from 'react'
import styles from './CartItem.module.css'
import {connect} from 'react-redux'
import {adjustItemQty} from '../../redux/Shopping/Shopping_action'
const CartItem = ({ item, adjustQty }) => {
    const [input, setInput] = useState(item.qty);
  
    const onChangeHandler = (e) => {
      setInput(e.target.value);
      adjustQty(item.id, e.target.value);
    };
  
    return (
        <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={item.image}
        alt={item.title}
      />
        <div className={styles.cartItem__details}>
          <p className={styles.details__title}>{item.title}</p>
          <p className={styles.details__desc}>{item.description}</p>
          <p className={styles.details__price}>Rs {item.price}</p>
        </div>
        <div className={styles.cartItem__actions}>
          <div className={styles.cartItem__qty}>
            <label htmlFor="qty">Qty</label>
            <input
              min="1"
              type="number"
              id="qty"
              name="qty"
              value={input}
              onChange={onChangeHandler}
            />
          </div>
          <button
            
            className={styles.actions__deleteItemBtn}
          >
            <img
              src="https://image.flaticon.com/icons/svg/709/709519.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    );
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
     // removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(CartItem);