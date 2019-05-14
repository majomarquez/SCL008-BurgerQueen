import React from 'react';

import logoBurger from '../images/logo.png';
import breakfastBurger from '../images/desayuno.jpg';
import lunchBurger from '../images/almuerzo.jpg';

class Home extends React.Component{
    render(){
        
        return (
            <div className="Home" >
                <div className="Home_header">
                    <img src={logoBurger} alt="Logo"/>
                </div>

                <div className="Home_customer">
                    <h1>{this.props.customer}</h1>
                </div>

                <div className="Home_breakfast">
                    <img src= {breakfastBurger} alt="img breakfast"/>
                    <h1>{this.props.breakfast}</h1>
                </div>  

                <div className="Home_lunch">
                    <img src={lunchBurger} alt="img lunch"/>
                    <h1>{this.props.lunch}</h1>
                </div>  
            </div> 
        )}
}
