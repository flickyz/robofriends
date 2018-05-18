import React from 'react';

//creat robot card componant
const Card = ({name, email, id}) => {
	return (
		<div className='tc bg-light-blue white dib br4 pa2 ma4 grow bw2 shadow-5'>
			<img alt = 'robots' src = {`https://robohash.org/${id}?200x200`} className = 'ba b--navy br4 ma1'/>
			<div>
				<h2>{ name }</h2>
				<p>{ email }</p>
			</div>
		</div>
	);
}

export default Card;