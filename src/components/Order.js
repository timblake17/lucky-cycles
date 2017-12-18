import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  constructor(){
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key){
      const service = this.props.services[key];
      const count = this.props.order[key];
      const removeButton = <button onClick={()=> this.props.removeFromOrder(key)}> &times; </button>

      if(!service || service.status === 'unavailable'){
        return <li key={key}> {service ? service.name : 'service'}{removeButton}is no longer available!</li>
      }

      return(
        <li key={key}>
          <span>{count}hr {service.name} {removeButton}</span>
          <span className="price">{formatPrice(count * service.price)}</span>
        </li>
      )
  }

  render(){
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const service = this.props.services[key];
      const count = this.props.order[key];
      const isAvailable = service && service.status ==='available';
        if(isAvailable){
          return prevTotal + (count * service.price || 0)
        }
        return prevTotal;
    }, 0); ///reduce needs a starting value of 0

    return(
      <div className="order-wrap">
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <li className="total">
            <strong>Total:</strong>
          {formatPrice (total)}
          </li>
        </ul>


      </div>
      )
  }
}

  export default Order;
