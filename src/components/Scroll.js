import React from 'react';

const Scroll = (props) => {
	return (
		//setting scroll bar's style
		<div style = 
			{{ overflowY: 'scroll', height: '800px' }}>
				{props.children}
		</div>
		)
};

export default Scroll;