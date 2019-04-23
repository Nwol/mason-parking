import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, Polyline } from 'google-maps-react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export class ViewScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { showingInfoWindow: false, activeMarker: {}, selectedPlace: {}, cardType: '', polyLineVal: [] };
		this.mapStyles = { width: '100%', height: '100%' };
		this.parkingLots = [
			{ lat: 38.826775, lng: -77.307994, name: 'lotA' },
			{ lat: 38.825438, lng: -77.305887, name: 'lotC' },
			{ lat: 38.831276, lng: -77.300749, name: 'lotD' },
			{ lat: 38.832948, lng: -77.311446, name: 'lotI' },
			{ lat: 38.828801, lng: -77.312064, name: 'lotJ' },
			{ lat: 38.828259, lng: -77.311811, name: 'lotK' }
		];
		this.findParking.bind(this);
		this.onMarkerClick.bind(this);
		this.onClose.bind(this);
	}

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onClose = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

	findParking = (e) => {
		e.preventDefault();
		let chosenVal = {};
		let smallLatVal = 0;
		let smallLongVal = 0;
		let stateSetterVal = [];
		for (let i = 0; i < this.parkingLots.length; i++) {
			if (i === 0) {
				smallLatVal = this.parkingLots[i]['lat'] - 38.831500;
				smallLongVal = this.parkingLots[i]['lng'] - (-77.311488);
				chosenVal = this.parkingLots[i];
				continue;
			}
			else {
				if (this.parkingLots[i]['lat'] - 38.831500 < smallLatVal && this.parkingLots[i]['lng'] - (-77.311488) < smallLongVal) {
					smallLatVal = this.parkingLots[i]['lat'] - 38.831500;
					smallLongVal = this.parkingLots[i]['lng'] - (-77.311488);
					chosenVal = this.parkingLots[i];
				}
				else {
					continue;
				}
			}
		}

		stateSetterVal.push(
			<Polyline
				options={{
					path: [{ lat: 38.831500, lng: -77.311488 }, { lat: chosenVal['lat'], lng: chosenVal['lng'] }],
					strokeColor: '#FF0000',
					strokeOpacity: 0.8,
					strokeWeight: 4
				}} />
		);
		this.setState({polyLineVal: stateSetterVal});
		console.log(this.state.polyLineVal);
	};

	render() {

		let markerArray = [];
		this.parkingLots.map(data => {
			return markerArray.push(<Marker
				key={data['name']}
				onClick={this.onMarkerClick}
				name={data['name']}
				position={{ lat: data['lat'], lng: data['lng'] }}
			/>);
		});
		return (
			<div className="row no-gutters">
				{this.props.user && (<Card bg="info" text="white" style={{ width: '18rem' }}>
					<Card.Header>Where TF did I park?</Card.Header>
					<Card.Body>
						<Card.Title>Click the button below to get directions to where you parked.</Card.Title>
							<Button onClick={this.findParking} variant="success">Find my parking spot</Button>
					</Card.Body>

				</Card>)}
				<div className="col order-last map">
					<Map
						google={this.props.google}
						zoom={15.5}
						style={this.mapStyles}
						initialCenter={{
							lat: 38.831534,
							lng: -77.311587
						}}
					>
						<Marker
							onClick={this.onMarkerClick}
							name={'George Mason University'}
						/>
						{markerArray}
						{this.state.polyLineVal}
						<InfoWindow
							marker={this.state.activeMarker}
							visible={this.state.showingInfoWindow}
							onClose={this.onClose}
						>
							<div>
								<h4>{this.state.selectedPlace.name}</h4>
							</div>
						</InfoWindow>
					</Map>
				</div>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBlKEmXM6RHfCq2eYdxUtTMfbu-XTCqVIw'
})(ViewScreen);