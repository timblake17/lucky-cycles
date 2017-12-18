import React from 'react';
import AddServiceForm from './AddServiceForm';


class Inventory extends React.Component {
  constructor(){
    super();
    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e, key){
    const service = this.props.services[key];

    const updatedService ={
      ...service,
      [e.target.name]: e.target.value
    }
    this.props.updateService(key, updatedService);
    console.log(updatedService);
  }

  renderInventory(key){
    const service = this.props.services[key];
    return(
      <div className="service-edit" key={key}>
        <input type="text" name="name" value={service.name}placeholder="Service Name"
        onChange={(e) => this.handleChange (e,key)}/>
        <input type="text" name="price" value={service.price} placeholder="Service Price"
          onChange={(e) => this.handleChange (e,key)}/>
        <select type="text" name="Status" value={service.status} placeholder="Service Status"
          onChange={(e) => this.handleChange (e,key)}>
          <option value="available">In Stock </option>
          <option value="unavailable">Sold Out </option>
        </select>
        <textarea type="text" name="desc" value={service.desc} placeholder="Service Desc"
          onChange={(e) => this.handleChange (e,key)}></textarea>
        <input type="text" name="image" value={service.image} placeholder="Service Image"
        onChange={(e) => this.handleChange (e,key)}/>
        <button onClick={()=> this.props.removeService(key)}>Remove Service</button>
      </div>

    )
  }


  render(){
    return(
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.services).map(this.renderInventory)}
        <AddServiceForm addService={this.props.addService}/>
        <button onClick={this.props.loadSamples}>Load Services</button>
      </div>

    )
  }
}

  export default Inventory;
