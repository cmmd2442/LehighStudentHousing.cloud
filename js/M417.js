import React from 'react';
import Image from 'react-image-resizer';

class M417 extends React.Component {
  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';
    let h = 300;
    let w = 410;	

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o fa-4x"></i>
	 <p>Click to Return</p>
        </span>
        <img alt={example.image.desc}
             className="modal__image"
             src={example.image.src }
       	     width={w}
	     height={h}	
	/> 
             <img alt={example.image.desc}
                  className="modal__image"
                  src={"images/417Living3.jpg"}
       	     width={w}
	     height={h}	
        />
             <img alt={example.image.desc}
                  className="modal__image"
                  src={"../images/417Living2.jpg"}
       	     width={w}
	     height={h}	
         />
        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            {example.title}
          </h2>
          <a className="color--skyBlue modal__link"
             href={example.href}>
             Click me!
          </a>
          <p className="modal__description">
            {example.desc}
          </p>
        </div>
      </div>
    )
  }
}

export default M417;
