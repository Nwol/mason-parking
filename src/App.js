import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import firebase from './firebase';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';

import mySvg from './gmu_edu-icon.svg';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentWillMount() {
		var _this = this;
		console.log(firebase);
		firebase.auth.onAuthStateChanged(function (user) {
			_this.setState({ user: user });
		}, function (error) {
			console.log(error);
		});
	}

	/**
	 * Add other navs later
	 */
	render() {
		let nav;
		if (this.state.user) {
			nav = <Nav className="mr-auto">
				{/* <LinkContainer to={"/whereDidIPark"}>
          <NavItem>Where Did I Park?</NavItem>
        </LinkContainer>
        <LinkContainer to={"/viewScreen"}>
          <NavItem>View Parking Map</NavItem>
		</LinkContainer> */}
				<Nav.Link>
					<LinkContainer to={"/logout"}>
						<Nav.Item>Logout</Nav.Item>
					</LinkContainer>
				</Nav.Link>
			</Nav>
		}
		else {
			nav = <Nav className="mr-auto">
				<Nav.Link>
					<LinkContainer to={"/login"}>
						<Nav.Item>Register/Sign-in</Nav.Item>
					</LinkContainer>
				</Nav.Link>
			</Nav>
		}
		if (this.state.user === undefined) {
			return <span>Loading...</span>
		}

		return (
			<HashRouter>
				<div className="App">
					<Navbar bg="light" variant="light">
						<LinkContainer to={"/"}>
							<Navbar.Brand>
								<img
									className="logo-img"
									alt=""
									src={mySvg}
									width="30"
									height="30"
								/>
								{'Mason Parking'}
							</Navbar.Brand>
						</LinkContainer>
						{nav}
					</Navbar>
					<div className={"content"}>
						<div className={"container"}>
							<Route exact path={"/"}/>
							<Route exact path={"/login"} component={Login} />
							<Route exact path={"/logout"} component={Logout} />
						</div>
					</div>
				</div>
			</HashRouter>
		);
	}




}

export default App;
