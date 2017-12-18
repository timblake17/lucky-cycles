import React from 'react';
import { formatPrice } from '../helpers';

class Service extends React.Component{
  render(){
    const { details, index } = this.props;
    const isAvailable = details.status ==='available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out';
    return(
    <li className="menu-service">
      <img src={details.image} alt={details.name} />
      <h3 className="service-name">
        {details.name}
        <span className="price">{formatPrice(details.price)}</span>
        <p>{details.desc}</p>
        <button onClick={() => this.props.addToOrder(index)} disabled={!isAvailable}>{buttonText}</button>
      </h3>
    </li>
  )
  }
}


export default Service;
