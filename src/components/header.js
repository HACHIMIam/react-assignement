import React, { Component } from 'react';
import Logo from '../styled_components/logo';
import HeaderTypo from '../styled_components/headrTypo';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

export default class header extends Component {
	render() {
		return (
			<Grid>
				<Row>
					<Col xs={6} md={6}>
						<Logo />
					</Col>
					<Col xs={6} md={6} end>
						<Row end="xs">
							<HeaderTypo>Have an account?</HeaderTypo>
							<HeaderTypo primary>LOG IN</HeaderTypo>
						</Row>
					</Col>
				</Row>
			</Grid>
		);
	}
}
