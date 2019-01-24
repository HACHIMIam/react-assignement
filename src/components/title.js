import React, { Component } from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import Wrapper from '../styled_components/wrapper';

export default class title extends Component {
	render() {
		return (
			<Wrapper>
				<Row center="xs">
					<Col xs={12}>
						<Row center="xs">
							<Col xs={6}>
								<h2>So far so good.Let's talk about your health</h2>
								<p>
									We use this info to put you in a group with poeple close to your attributes (wierd
									choice of word){' '}
								</p>
							</Col>
						</Row>
					</Col>
				</Row>
			</Wrapper>
		);
	}
}
