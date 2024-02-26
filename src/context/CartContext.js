import React from 'react'

const CartContext = React.creatContext({
  cartList: [],
  incrementItemQuantity: () => {},
  decrementItemQuantity: () => {},
})

export default CartContext
