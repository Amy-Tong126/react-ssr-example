import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Start from "./component/Start";
import Home from "./component/Home";

const App = () => (
    <Switch>
        <Route path='/report_:id' component={Home}/>
        <Route exact path='/' component={Start}/>
    </Switch>
)

export default App;