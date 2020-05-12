import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';



const myWork = [
  {
    'title': "302 W 8 st",
    'href': "https://example.com",
    'desc': "302 w. 8 st.",
    'image': {
      'desc': "example screenshot of a project involving code",
      'src': "images/302front.jpg",
      'comment': ""
    }
  },
  {
    'title': "418 Selfridge st",
    'href': "https://example.com",
    'desc': "418 Selfridge st.",
    'image': {
      'desc': "A Serverless Portfolio",
      'src': "images/418Front.jpg",
      'comment': ""
    }
  },
  {
    'title': "417 Montclair",
    'href': "https://example.com",
    'desc': "A Serverless Portfolio",
    'image': {
      'desc': "example screenshot of a project involving cats",
      'src': "images/417Kitchen.jpg",
      'comment': `"Bengal cat" by roberto shabs is licensed under CC BY 2.0
           https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
];






ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));


console.log('Loaded react-dom');
console.log ("webpack works");



