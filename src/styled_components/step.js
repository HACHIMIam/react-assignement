import styled from 'styled-components';

export default styled.div`
	line-height: 40px;
	background: ${(props) => (props.checked ? '#f2f5f8' : '#fff')};
	background-image: ${(props) => (props.checked ? "url('oval2.png')" : "url('round-done-button.png')")};
	background-repeat: no-repeat;
	background-position: 20% 50%;
	width: 100%;
	font-size: 0.8em;
	font-weight: bold;
	box-sizing: border-box;
	padding: 10px 30%;
	border: 1px solid #ccc;
	&:hover {
		background: #518ecc;
		background-image: url('oval.png');
		background-repeat: no-repeat;
		background-position: 20% 50%;
		color: #fff;
	}
`;
