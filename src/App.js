import {Component} from 'react'
import CartContext from './context/CartContext'
import RestaurantList from './component/RestaurantList'
// import LoginForm from './component/LoginForm'
import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  incrementItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  decrementItemQuantity = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    }
  }

  // addCartItem = product => {
  //   const {cartList} = this.state
  //   const productObject = cartList.find(
  //     eachCartItem => eachCartItem.id === product.id,
  //   )

  //   if (productObject) {
  //     this.setState(prevState => ({
  //       cartList: prevState.cartList.map(eachCartItem => {
  //         if (productObject.id === eachCartItem.id) {
  //           const updatedQuantity = eachCartItem.quantity + product.quantity

  //           return {...eachCartItem, quantity: updatedQuantity}
  //         }
  //         return eachCartItem
  //       }),
  //     }))
  //   } else {
  //     const updatedCartList = [...cartList, product]

  //     this.setState({cartList: updatedCartList})
  //   }
  // }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          incrementItemQuantity: this.incrementItemQuantity,
          decrementItemQuantity: this.decrementItemQuantity,
        }}
      >
        return (
        <div>
          <RestaurantList />
        </div>
        )
      </CartContext.Provider>
    )
  }
}

// const App = () => (
//   <div>
//     <RestaurantList />
//   </div>
// )

export default App
