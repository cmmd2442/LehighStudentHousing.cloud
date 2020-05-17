import React from 'react';

class Meight extends React.Component {
  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o fa-4x"></i>
	 <p>Click to Return</p>
        </span>
        <img alt={example.image.desc}
             className="modal__image"
             src={example.image.src}/>
             <img alt={example.image.desc}
                  className="modal__image"
                  src={"../images/8stLivingRoom.jpg"}/>
             <img alt={example.image.desc}
                  className="modal__image"
                  src={"../images/8stKitchen.jpg"}/>
             <img alt={example.image.desc}
                  className="modal__image"
                  src={"../images/8stBedroom.jpg"}/>
             <img alt={example.image.desc}
                  className="modal__image"
                  src={"../images/8stDeck.jpg"}/>
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

export default Meight;
