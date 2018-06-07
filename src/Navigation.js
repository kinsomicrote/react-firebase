import React, { Component } from 'react';
import { Row, Column } from 'rebass';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import ProtectedRoute from './ProtectedRoute';
import LogOut from './LogOut';
import { AuthConsumer } from './context/AuthContext';

class Navigation extends Component {
  render() {
    return (
      <AuthConsumer>
        {({ authenticated }) => {
          return (
            <Router>
              <div>
                {console.log('nav', authenticated)}
                <Row>
                  <Column>
                    <NavLink to="/">Home</NavLink>
                    {authenticated
                      ? <span>
                          <NavLink to="/dashboard">Dashboard</NavLink>
                          <LogOut />
                        </span>
                      : <span>
                          <NavLink to="/login">Login</NavLink>
                          <NavLink to="/register">Register</NavLink>
                        </span>}
                  </Column>
                </Row>

                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <ProtectedRoute path="/dashboard" component={Dashboard} />
                </Switch>
              </div>
            </Router>
          );
        }}
      </AuthConsumer>
    );
  }
}

export default Navigation;
