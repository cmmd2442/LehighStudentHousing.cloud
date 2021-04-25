import React from 'react';
import ReactDOM from 'react-dom';
import Front418 from '!!url-loader!./Front418.jpg';


const FiveBed1 = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'Right',
		alignItems: 'Right',
		height: '100vh'
	}}
	>
	<h1>Five bedroom Welcome to GeeksforGeeks Team</h1>
	 <img src = {Front418} alt = "test" />
	</div>
);
};

ReactDOM.render(<FiveBed1/>, document.getElementById('example-work'));
export default FiveBed1;


