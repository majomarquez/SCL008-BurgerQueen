import React from 'react';

import '../styles/Navbar.css';

import logoBurger from '../../images/logo.png';


class Navbar extends React.Component {
    render(){
        return(
        <div className = "Navbar" >
            <div className="container-fluid">
                <div className= "row">
                    <div className ="col" >
                        <img className="home_logo" src={logoBurger} alt="Logo"/>
                    </div>
                    <div className ="col" >
                        <img className="imput_name" src={logoBurger} alt="Logo"/>
                    </div>
                </div>
            </div>
        </div>
            
        )}
}

export default Navbar