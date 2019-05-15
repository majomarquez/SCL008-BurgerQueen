import React from 'react';

import '../styles/Hour.css';

import breakfastBurger from '../../images/desayuno.jpg';
import lunchBurger from '../../images/almuerzo.jpg';

class Hour extends React.Component{
    render(){
        return (
            <div className = "hour" >
                <div className="container-fluid">
                    <div className= "row">
                        <div className ="col" >
                            <div className="home_breakfast">
                                <img className="home_img_breakfast"src= {breakfastBurger} alt="img breakfast"/>
                                <h1>Horario de Desayuno</h1>
                            </div> 
                        </div> 
                        <div className ="col" >
                            <div className="home_lunch">
                                <img className="home_img_lunch" src={lunchBurger} alt="img lunch"/>
                                <h1>Horario de Almuerzo</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default Hour;