import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component{
  goToStore(event){
    event.preventDefault();
    console.log('You changed the URL');
    ///first grab the text from the box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`)
    ///transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);

  }
  render(){
    //anywhere else
    return (
      <form className="store-selector" onSubmit={(e)=>this.goToStore(e)}>
        {/*this is how to comment inside jsx make sure it's inside parent*/}
        <h2>Please Enter a Store</h2>
        <input type="text"  placeholder="Store Name" defaultValue={getFunName()}
          ref={(input) => { this.storeInput = input }}/>
        <button type="submit">Visit Store</button>
      </form>

    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
