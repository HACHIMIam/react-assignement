import React from 'react';
import styled from 'styled-components';

const RadioboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

const Hiddenradiobox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Styledradiobox = styled.div`
	display: inline-block;
	width: 40px;
	height: 40px;
	background: ${(props) => (props.checked ? '#518ecc' : '#f2f5f8')};
	border-radius: 50%;
	transition: all 150ms;

	${Hiddenradiobox}:focus + & {
		box-shadow: 0 0 0 3px #518ecc;
	}
`;

const radiobox = ({ className, checked, ...props }) => (
	<RadioboxContainer className={className}>
		<Hiddenradiobox checked={checked} {...props} />
		<Styledradiobox checked={checked} />
	</RadioboxContainer>
);

export default radiobox;
