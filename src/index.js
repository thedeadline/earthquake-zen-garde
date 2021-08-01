import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Detail from './components/Detail';
import Home from './components/Home';
import Profile from './components/Profile';
import "./styles/index.scss";

class App extends Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </BrowserRouter>
    )}
}

ReactDOM.render(<App />, document.getElementById('root'))