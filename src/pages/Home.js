import React from 'react';

import Navbar from '../components/js/Navbar';
import Customer from '../components/js/Customer';
import Hour from '../components/js/Hour';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navbar />
        <Customer />
        <Hour />
      </div>
    );
  }
}

export default Home;
