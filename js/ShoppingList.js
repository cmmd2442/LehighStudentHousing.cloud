import React from 'react';

const divStyle = {
  fontSize: '20px',
  margin: '40px',
  border: '5px solid pink'
};


class ShoppingList extends React.Component {
  render() {
    return (
      <div style = {divStyle} className="ShoppingList">
        {//<h1>Shopping List for {this.props.name}</h1>
        }
        <h1>Shopping List </h1>
        <ul>
	<li><a href={'http://google.com'}>Google</a></li>
	<li><a href={'3-Bedroom3'}>3-BedRoom</a></li>
        </ul>
{/*
	<a href="#WhatsApp">Home</a></li>
	<a href="#Oculus">Home</a></li>
        </ul>
         
	<ul>
          <li>href = Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>

*/}

      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />






export default ShoppingList;
