import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
	height: 60px;
	width: 60px;
	font-size: 30px;
	border-radius: 3px;
	background-color: "#f2f5f8";
	border: 3px solid #858a8c;
	&:focus {
		border-color: #518ecc;
	}
`;

const Checkbox = ({ className, placeholder, ...props }) => <Input placeholder={placeholder} />;

export default Checkbox;
