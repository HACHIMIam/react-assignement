import React from 'react';

import styled from 'styled-components';

const ImageWrapper = styled.div`
	background-image: ${(props) => (props.checked ? "url('man2.png')" : "url('man.png')")};
	background-repeat: no-repeat;
	min-height: 90px;
	text-align: center;
	padding-top: 5px;
	color: ${(props) => (props.checked ? '#858a8c' : '#a4acb0')};
`;
const profile = ({ className, checked, ...props }) => (
	<ImageWrapper checked={checked}>
		<h4>Male</h4>
	</ImageWrapper>
);
export default profile;
