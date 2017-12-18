import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import services from '../Services';
import Service from './Service';
import base from '../base';

class App extends React.Component {
  constructor(){
    super();

    this.addService = this.addService.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.updateService = this.updateService.bind(this);
    this.removeService = this.removeService.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);

    ///get initial state
    this.state = {
      services: {},
      order: {}
    };
  }

  componentWillMount(){
    ///runs before <App> is rendered
    this.ref = base.syncState(`${this.props.params.storeId}/services`,{
      context: this,
      state: 'services'
    });

    //check if there is any order in localStorage
    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef){
      //update our App component's order state
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUnmount () {
    base.removeBinding(this.ref);
  }

  componentWillUpdate(nextProps, nextState){
    localStorage.setItem(`order-${this.props.params.storeId}`,
      JSON.stringify(nextState.order));
  }

  addService(service){
    const services = {...this.state.services};
    // add in your new services
    const timestamp = Date.now();
    services[`service-${timestamp}`] = service;
    // set state
    this.setState({ services })
  }

  updateService(key, updatedService){
    const services = {...this.state.services};
    services[key] = updatedService;
    this.setState({ services });
  }

  removeService(key){
    const services = {...this.state.services};
    services[key] = null;
    this.setState({ services });
  }

  loadSamples() {
    this.setState({
      services: services
    });
  }

  addToOrder(key){
    ////take copy of our state
    const order = {...this.state.order};
    // update or add the new number of services
    order[key] = order[key] + 1 || 1;
    //update state
    this.setState({ order });
    }

    removeFromOrder(key){
      ////take copy of our state
      const order = {...this.state.order};
      // update or add the new number of service
      delete order[key];
      //update state
      this.setState({ order });
      }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
          <ul className="list-of-services">
            {
              Object
                .keys(this.state.services)
                .map(key => <Service key={key} index={key}
                details={this.state.services[key]}
                addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order
          services={this.state.services}
          order={this.state.order}
          params={this.props.params}
          removeFromOrder={this.removeFromOrder}/>
        <Inventory
          addService={this.addService} loadSamples={this.loadSamples} services={this.state.services}
          updateService={this.updateService}
          removeService={this.removeService}
        />
      </div>
    )
  }
}

export default App;
