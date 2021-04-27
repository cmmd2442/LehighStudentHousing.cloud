import React from 'react';
import ReactDOM from 'react-dom';
import Front418 from '!!url-loader!./Front418.jpg';
import kitchen418 from '!!url-loader!./kitchen418.jpg';
import back418 from '!!url-loader!./back418.jpg';
import back418_2 from '!!url-loader!./back418-2.jpg';


const FiveBed1 = () => {
return (
	<span>
	<h1>418 Selfridge St</h1>	
	<div className="center" >
	 <img src = {Front418} className = "photo" alt="test" />
	 <img src = {kitchen418} className = "photo" alt = "test" />
	 <img src = {back418} className = "photo" alt = "test" />
	 <img src = {back418_2} className = "photo" alt = "test" />
	</div>
	<h1>Other Houses</h1>	
	</span>
);
};

ReactDOM.render(<FiveBed1/>, document.getElementById('example-work'));
export default FiveBed1;
