import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';
import ShoppingList from './ShoppingList.js';
import Gallery from './Gallery.js';

const myWork = [
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/8stKitchen2.png",
      'comment': ""
    },
    'image2': {
      'desc': "example screenshot of a project involving code",
      'src': "images/517Kitchen2.jpg",
      'comment': ""
	}
  },
  {
    'title': "Portfolio Boilerplate",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/example2.png",
      'comment': ""
    },
    'image2': {
      'desc': "example screenshot of a project involving code",
      'src': "images/517Kitchen2.jpg",
      'comment': ""
	}
  },
  {
    'title': "Work Example",
    'href': "https://example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/example3.png",
      'comment': `"Bengal cat" by roberto shabs is licensed under CC BY 2.0
           https://www.flickr.com/photos/37287295@N00/2540855181`
    },
    'image2': {
      'desc': "example screenshot of a project involving code",
      'src': "images/517Kitchen2.jpg",
      'comment': ""
	}
  }
];




const urls = [
  "images/418Front.jpg",
  "images/418Back.jpg"
];

ReactDOM.render(<Gallery imageUrls={urls}/>, document.getElementById('Gallery'));



ReactDOM.render(<ShoppingList/>, document.getElementById('ShoppingList'));
ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
