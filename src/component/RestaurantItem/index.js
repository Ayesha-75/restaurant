// import {Component} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

// class RestaurantItem extends Component {
//   state = {
//     quantity: 0,
//   }

// incrementCart = () => {
//   this.setState(prevState => ({
//     quantity: prevState.quantity + 1,
//   }))
// }

// decrementCart = () => {
//   const {quantity} = this.state
//   if (quantity > 0) {
//     this.setState(prevState => ({
//       quantity: prevState.quantity - 1,
//     }))
//   }
// }

const RestaurantItem = props => (
  <CartContext.Consumer>
    {value => {
      const {incrementItemQuantity, decrementItemQuantity} = value
      const {itemDetails} = props
      const {
        dishCal,
        dishId,
        dishCurrency,
        dishDescription,
        dishImage,
        dishPrice,
        dishName,
        dishAvail,
      } = itemDetails

      const onClickDecrement = () => {
        decrementItemQuantity(dishId)
      }
      const onClickIncrement = () => {
        incrementItemQuantity(dishId)
      }
      const dishAvailability =
        dishAvail === true ? 'Customizations available' : 'Not available'

      const dishAvailClassName = dishAvail === true ? '' : 'active'

      return (
        <li className="item-container">
          <div>
            <h1 className="item-heading">{dishName}</h1>
            <p className="item-currency">
              {dishCurrency} {dishPrice}
            </p>
            <div className="desc-cont">
              <p className="desc">{dishDescription}</p>
              <p className="calories">{dishCal} calories</p>
            </div>
            {dishAvail ? (
              <div className="btn-container">
                <button
                  className="btn"
                  type="button"
                  onClick={onClickDecrement}
                >
                  -
                </button>
                <p className="count">0</p>
                <button
                  className="btn"
                  type="button"
                  onClick={onClickIncrement}
                >
                  +
                </button>
              </div>
            ) : null}

            <p className={`cust-para ${dishAvailClassName}`}>
              {dishAvailability}
            </p>
          </div>
          <div>
            <img src={dishImage} alt={dishName} className="item-img" />
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

//   render() {
//     return <div>{this.renderItems()}</div>
//   }
// }

export default RestaurantItem
