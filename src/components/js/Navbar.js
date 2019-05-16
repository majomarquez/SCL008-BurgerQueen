import React from 'react';

import '../styles/Navbar.css';

import logoBurger from '../../images/logo.png';


class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <img className="home_logo" src={logoBurger} alt="Logo" />
            </div>
            <div className="kitchen_or_pos">
              <div className="row">
                <div className="col">
                  <buttom className="btn btn-primary">Pedido</buttom>
                </div>
                <div className="col">
                  <buttom className="btn btn-primary">Cocina</buttom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Navbar;
