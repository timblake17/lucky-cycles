import React from 'react';

class AddServiceForm extends React.Component {
  createService(event){
    event.preventDefault();
    const service = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
    }
    this.props.addService(service);
    this.serviceForm.reset();
}

  render(){
    return(
      <form ref={(input) => this.serviceForm = input}className="service-edit" onSubmit={(e) => this.createService(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Service Name" />
        <input ref={(input) => this.price = input} type="text" placeholder="Service Price" />
        <select ref={(input) => this.status = input}>
          <option value="available">In Stock </option>
          <option value="unavailable">Sold Out </option>
        </select>
        <textarea ref={(input) => this.desc = input} placeholder="Service Desc" />
        <input ref={(input) => this.image = input} type="text" placeholder="Service Image" />
        <button type="submit">+ Add Item </button>
      </form>

    )
  }
}

  export default AddServiceForm;
