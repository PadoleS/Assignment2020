import React,{useState,useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import styles from "./Product.module.css";
import 'antd/dist/antd.css';
import { Modal, Button,Form,Input,InputNumber } from 'antd';
// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
  addAddress
} from '../../redux/Shopping/Shopping_action';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

// reset form fields when modal is form, closed
 

const Product = ({ product, addToCart, loadCurrentItem }) => {
const history=useHistory()
  /* const useResetFormOnCloseModal = ({ form, visible }) => {
    const prevVisibleRef = useRef();
    useEffect(() => {
      prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
      if (!visible && prevVisible) {
        form.resetFields();
      }
    }, [visible]);
  };
  
   */
    const [form] = Form.useForm();
   /*  useResetFormOnCloseModal({
      form,
      visible,
    });
   */
    const onOk = (values) => {

      addToCart(product.id).then(history.push('./cart'))
         };
  
  
  
  const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const hideUserModal = () => {
    setVisible(false);
  };

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  const onCancel=()=>{
    setVisible(false);
  }

  return (
    <div className={styles.product}>
      <img
        className={styles.product__image}
        src={product.image}
        alt={product.title}
      />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        <p className={styles.details__desc}>{product.description}</p>
        <p className={styles.details__price}>RS {product.price}</p>
      </div>

    {/*   <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Item
          </button>
        </Link>
     */}   
      <div className={styles.product__buttons}>
      <Button
              htmlType="button"
              style={{
                margin: '0 8px',
              }}
              onClick={showUserModal}
            >
              Add address
            </Button>
           <Modal title="ADD Address" visible={visible} okText='AddToCart' onOk={() => addToCart(product.id)} cancelText='' onCancel={onCancel}>
      <Form form={form} layout="vertical" name="userForm">
        <Form.Item
          name="Address line1"
          label="address line1"
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Address line2"
          label="address line"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="Country"
          label="country"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="State"
          label="state"
        >
          <Input/>
        </Form.Item>
        <Form.Item
          name="City"
          label="city"
        >
          <Input/>
        </Form.Item>
      </Form>
    </Modal>
           
        


            <button
          onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
   // addAddress:(item,'addres1','address2','India','state','city')=>dispatch(addAddress(item,'addres1','address2','India','state','city'))
  };
};

export default connect(null, mapDispatchToProps)(Product);