import React,{useState,useEffect}from 'react' 
import styles from './Cart.module.css'
import {connect} from 'react-redux';
import CartItem from './CartItem'
import { message } from 'antd';

const Cart = ({ cart,address }) => {
    const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;
    console.log(cart,...address)
    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });
     console.log(address)
    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);
return(
    <div className={styles.cart}>
    <div className={styles.cart__items}>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
<div className={styles.cart__summary}>
  <h4 className={styles.summary__title}>Cart Summary</h4>
  <div className={styles.summary__price}>
  
  <span>TOTAL: ({totalItems} items)</span>
    <span>Rs{totalPrice}</span>
  </div>
  <div className={styles.address__items}>
  <strong>Address:{address}</strong>
</div>

  <button className={styles.summary__checkoutBtn} onClick={()=>{ message.success('Order placed successfully')}}>
    Proceed To Checkout
  </button>
</div>
</div>


);
};

const mapStateToProps=(state)=>{
  return{
    cart:state.shop.cart,
    address:state.shop.address
  }
}

export default connect(mapStateToProps)(Cart);