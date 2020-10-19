import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from './components/shop/index';
import ItemDetails from './components/itemDetails/index';
import NotFound from './components/notFoundPage/index';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/items/" component={ Shop } />
                <Route exact path="/items/:id" component={ ItemDetails } />
                <Route component={ NotFound } />
            </Switch>
        </Router>
    </React.StrictMode>,
document.getElementById('root'));