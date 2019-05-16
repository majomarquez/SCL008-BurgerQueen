import React from 'react';

import '../styles/Customer.css';

class Customer extends React.Component {
  handleChange= (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick= () => {
    console.log('clicked');
  };

  render() {
    return (
      <div>
        <form>
          <div className="name">
            <label>Ingresa el nombre del Cliente</label>
            <input onChange={this.handleChange} className="form-control" type="text" name="customerName" />
            <buttom type="button" onClick={this.handleClick} className="btn btn-primary">Guardar</buttom>
          </div>
        </form>
      </div>

    );
  }
}

export default Customer;
