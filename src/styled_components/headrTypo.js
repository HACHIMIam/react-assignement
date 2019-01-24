import styled from 'styled-components';

export default styled.h3`
	color: ${(props) => (props.primary ? '#518ecb' : '#cfd0d1')};
	padding: 5px;
	font-size: 16px;
`;
