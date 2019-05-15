import React from 'react';
import './App.css'

import logoBurger from './images/logo.png';
import breakfastBurger from './images/desayuno.jpg';
import lunchBurger from './images/almuerzo.jpg';


class App extends React.Component{
    render(){
        
        return (
            <div className = "home" >
                <div className="container-fluid">
                    
                    <div className="home_header">
                        <div className= "row">
                            <div className ="col" >
                                <img className="home_logo" src={logoBurger} alt="Logo"/>
                            </div>
                            <div className ="col" >
                                <h1 className="name">{this.props.customer}</h1>
                            </div>
                        </div>
                    </div>
            
                    <div className= "row">
                        <div className ="col" >
                            <div className="home_breakfast">
                                <img className="home_img_breakfast"src= {breakfastBurger} alt="img breakfast"/>
                                <h1>{this.props.breakfast}</h1>
                            </div> 
                        </div>
                         
                        <div className ="col" >
                            <div className="home_lunch">
                                <img className="home_img_lunch" src={lunchBurger} alt="img lunch"/>
                                <h1>{this.props.lunch}</h1>
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>
        )}
}

export default App;