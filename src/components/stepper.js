import React, { Component } from 'react';
import Step from '../styled_components/step';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

export default class stepper extends Component {
	render() {
		return (
			<div className="stepper">
				<Grid>
					<Row center="xs">
						<Col xs={6} md={3}>
							<Step>PERSONAL INFO</Step>
						</Col>
						<Col xs={6} md={3}>
							<Step>ELIGIBILITY</Step>
						</Col>
						<Col xs={6} md={3}>
							<Step checked>YOUR HEALTH</Step>
						</Col>
						<Col xs={6} md={3}>
							<Step checked>COMMITMENT</Step>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
