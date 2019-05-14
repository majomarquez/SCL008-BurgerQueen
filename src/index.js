import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

import * as serviceWorker from './serviceWorker';
import App from './App';


const container = document.getElementById('root');

ReactDOM.render(
<App
customer="Maja"
breakfast = "Desayuno en Burguer Queen"
lunch = "Almuerzo en Burguer Queen"
/> , 
container);// que y donde


 serviceWorker.unregister();
// import { get } from 'http';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


