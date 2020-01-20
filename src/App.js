import React, {Component} from 'react';
import Home from './Components/Home';

import {BrowserRouter, Route} from 'react-router-dom';
import Menu from "./Components/Menu";
import SingleGamePage from './Components/SingleGamePage';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Menu />
                <Route path="/" exact component={Home}/>
                <Route path="/game/:id" component={SingleGamePage}/>
            </BrowserRouter>
        );
    }
}

export default App;
