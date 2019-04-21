import React, { Component } from 'react';
import './App.css';

import {HashRouter, Redirect, Route} from "react-router-dom";
import Login from "./Login"
import firebase from "./firebase"
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap"

class App extends Component {
  constructor(props){
    super(props);
    this.state={user: ''};
  }

  componentWillMount() {
    var _this = this;
    console.log(firebase);
    firebase.auth.onAuthStateChanged(function (user) {
      _this.setState({user: ''});
    }, function(error) {
      console.log(error);
    });
  }

  /**
   * Add other navs later
   */
  render() {
    let nav;
    if(this.state.user){
      nav = <Nav>
        <LinkContainer to={"/whereDidIPark"}>
          <NavItem>Where Did I Park?</NavItem>
        </LinkContainer>
        <LinkContainer to={"/viewScreen"}>
          <NavItem>View Parking Map</NavItem>
        </LinkContainer>
        <LinkContainer to={"/logout"}>
          <NavItem>Logout</NavItem>
        </LinkContainer>
      </Nav>
    }
    else{
      nav = <Nav>
          <LinkContainer to={"/login"}>
            <NavItem>Register/Sign-in</NavItem>
          </LinkContainer>
      </Nav>
    }
    if(this.state.user === undefined){
      return <span>Loading...</span>
    }

    return (
      <HashRouter>
        <div className="App">
          <Navbar>
            <Navbar.Header>
              <LinkContainer to={"/"}>
                <Navbar.Brand>Mason Parking</Navbar.Brand>
              </LinkContainer>
            </Navbar.Header>
            {nav}
          </Navbar>
          <div className={"content"}>
            <div className={"container"}>
              <Route exact path={"/"}/>
              <Route exact path={"/login"} component={Login}/>
            </div>
          </div>
        </div>
      </HashRouter>
    );
  }

  logout(){
    firebase.auth.signOut();
    return <Redirect to="/"/>
  }


  
}

export default App;
