import React,{useState,useEffect, useRef} from "react";
import { useHistory } from "react-router-dom";
import 'antd/dist/antd.css';
import styles from './Address.module.css'
import { Modal, Button,Form,Input } from 'antd';
// Redux
import { connect } from "react-redux";
import {
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
 

const Address = ({ product, addToCart,addAddress }) => {
const history=useHistory()
    const [form] = Form.useForm();
       const [visible, setVisible] = useState(false);

  const showUserModal = () => {
    setVisible(true);
  };

  const OnCancel = () => {
    setVisible(false);
  };

  const onCreate = (values) => {
    
    addAddress(values)
    var address=[];
    var string ="";
    var originalAddress;
    for (let value of Object.values(values)) {
       address.push(value)// John, then 30
    }
    originalAddress=address.join(' ')
    addAddress(originalAddress)

    console.log('Received values of form: ', address.join(' '));
    setVisible(false);
  };

  return (
    <div className={styles.product__buttons}>
    
    <Button
              htmlType="button"
              style={{
                margin: '0 8px',
              }}
              onClick={showUserModal}
              className={`${styles.buttons__btn} ${styles.buttons__add}`}  >
              Add address
            </Button>
           <Modal title="ADD Address" visible={visible} okText='Next' onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            console.log("getFieldsValue",form.getFieldsValue())
            onCreate(values);
          }) .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }} onCancel={OnCancel} >
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
       
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
  //  addToCart: (id) => dispatch(addToCart(id)),
    //loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    addAddress:(address)=>dispatch(addAddress(address))
   // addAddress:(item,'addres1','address2','India','state','city')=>dispatch(addAddress(item,'addres1','address2','India','state','city'))
  };
};

export default connect(null, mapDispatchToProps)(Address);