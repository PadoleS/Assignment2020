import * as actionTypes from './Shopping_types'

export const addToCart=(itemId)=>{
    return{
      type:actionTypes.ADD_TO_CART,
      payload:{
          id:itemId
      }
    }
}

export const adjustItemQty = (itemID, qty) => {
    return {
      type: actionTypes.ADJUST_ITEM_QTY,
      payload: {
        id: itemID,
        qty,
      },
    };
  };
  
  export const loadCurrentItem = (item) => {
    return {
      type: actionTypes.LOAD_CURRENT_ITEM,
      payload: item,
    
    };
  };

  export const addAddress = (itemId,address1,address2,Country, state,City) => {
    return {
      type: actionTypes.ADD_ADDRESS,
      payload: {
        id:itemId,
        address1,
        address2,
        Country,
        state,
        City
      }
    };
  };