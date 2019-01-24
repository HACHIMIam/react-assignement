import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import FemaleProfile from '../styled_components/femaleGender';
import MaleProfile from '../styled_components/maleGender';
import Input from '../styled_components/input';
import Checkbox from '../styled_components/checkBox';
import RadioBox from '../styled_components/radioBox';
export default class form extends Component {
	state = {
		male: true,
		parent: true,
		siblings: false,
		active: true,
		diables: 'pre'
	};
	setFemale = () => {
		this.setState({ male: false });
	};
	setMale = () => {
		this.setState({ male: true });
	};
	handleParent = (event) => {
		this.setState({ parent: event.target.checked });
	};
	handleSiblings = (event) => {
		this.setState({ siblings: event.target.checked });
	};
	handleActive = (event) => {
		this.setState({ active: true });
	};
	handleNotActive = () => {
		this.setState({ active: true });
	};
	handleNonActive = () => {
		this.setState({ active: false });
	};
	handeldiables = (event, value) => {
		this.setState({ diables: value });
	};

	render() {
		return (
			<Grid>
				<Row className="col-wrapper">
					<Col xs={6} md={3}>
						<h4>YOUR GENDER</h4>
					</Col>
					<Col xs={6} md={3} onClick={this.setFemale}>
						<FemaleProfile checked={!this.state.male} />
					</Col>
					<Col xs={6} md={3} onClick={this.setMale}>
						<MaleProfile checked={this.state.male} />
					</Col>
				</Row>
				<Row className="col-wrapper">
					<Col xs={6} md={3}>
						<h4>HEIGHT & WEIGHT</h4>
					</Col>
					<Col xs={6} md={1}>
						<Input /> ft
					</Col>
					<Col xs={6} md={1} className="col">
						<Input /> in
					</Col>
					<Col xs={6} md={1} placeholder={'000'} className="col">
						<Input /> ibs
					</Col>
				</Row>
				<Row className="col-wrapper">
					<Col xs={6} md={3}>
						<h4>FAMILY HISTORY</h4>
					</Col>
					<Col xs={6} md={8} lg={8}>
						<Row>
							<Col xs={6} md={12}>
								<h4 style={{ margin: 0 }}>Anyone in your family have prediabettes? </h4>
							</Col>
							<Col xs={6} md={12} style={{ margin: 0 }}>
								<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit </p>
							</Col>
						</Row>
						<Row>
							<Col xs={6} md={4}>
								<label>
									<Checkbox checked={this.state.parent} onChange={this.handleParent} />
									<span style={{ marginLeft: 80, fontWeight: 800, fontSize: 15 }}>Parent</span>
								</label>
							</Col>
							<label>
								<Checkbox checked={this.state.siblings} onChange={this.handleSiblings} />
								<span style={{ marginLeft: 80, fontWeight: 800, fontSize: 15 }}>Siblings</span>
							</label>
						</Row>
						<Row />
					</Col>
				</Row>
				<Row className="col-wrapper">
					<Col xs={6} md={3}>
						<h4>ACTIVITY LEVEL</h4>
					</Col>
					<Col xs={6} md={8} lg={8}>
						<Row>
							<h4>How active are you on a week basic? </h4>
						</Row>
						<Row>
							<Col xs={6} md={6}>
								<Row>
									{' '}
									<img src={!this.state.active ? 'sofa2.png' : 'sofa.png'} alt="sofa" />
								</Row>
								<label>
									<RadioBox checked={!this.state.active} onChange={this.handleNonActive} />
									<span style={{ marginLeft: 5, fontWeight: 800, fontSize: 15 }}>
										Not very active
									</span>
								</label>
								<p>Lorem ipsum dolor sit amet consectetur, </p>
							</Col>
							<Col xs={6} md={6}>
								<Row>
									{' '}
									<img src={!this.state.active ? 'bicycle.png' : 'bicycle2.png'} alt="sofa" />
								</Row>
								<label>
									<RadioBox checked={this.state.active} onChange={this.handleActive} />
									<span style={{ marginLeft: 5, fontWeight: 800, fontSize: 15 }}>active</span>
								</label>
								<p>Lorem ipsum dolor sit amet consectetur, </p>
							</Col>
						</Row>
						<Row />
					</Col>
				</Row>
				<Row className="col-wrapper">
					<Col xs={6} md={3}>
						<h4>DIABETES</h4>
					</Col>
					<Col xs={6} md={8} lg={8}>
						<Row>
							<h4>Have you been diagnosed with diabetes before? </h4>
						</Row>
						<Row>
							<Col xs={6} md={4}>
								<label>
									<RadioBox
										checked={this.state.diables === 'pre'}
										onChange={(e) => this.handeldiables(e, 'pre')}
									/>
									<span style={{ marginLeft: 5, fontWeight: 800, fontSize: 15 }}>Pre-diabetes</span>
								</label>
							</Col>
							<Col xs={6} md={4}>
								<label>
									<RadioBox
										checked={this.state.diables === 'type2'}
										onChange={(e) => this.handeldiables(e, 'type2')}
									/>
									<span style={{ marginLeft: 5, fontWeight: 800, fontSize: 15 }}>Type-2</span>
								</label>
							</Col>
							<Col xs={6} md={4}>
								<label>
									<RadioBox
										checked={this.state.diables === 'no'}
										onChange={(e) => this.handeldiables(e, 'no')}
									/>
									<span style={{ marginLeft: 5, fontWeight: 800, fontSize: 15 }}>Neither </span>
								</label>
							</Col>
						</Row>
						<Row />
					</Col>
				</Row>
			</Grid>
		);
	}
}
