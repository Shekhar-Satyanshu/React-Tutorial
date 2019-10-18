import React, {Component} from 'react';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Login from './Views/Pages/Login/Login';
import Register from './Views/Pages/Register/Register';
import Dashboard from './Views/Pages/Dashboard/Dashboard';


class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </Router>  
      </div>
        
    );
  }
}

export default App;




