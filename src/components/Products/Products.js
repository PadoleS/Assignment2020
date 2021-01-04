import React from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";
import Address from '../Address/Address'

import Product from './Product';

const Products = ({ products }) => {
  return (
    <div>
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div >
    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);