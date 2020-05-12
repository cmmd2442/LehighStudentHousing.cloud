import React from 'react';

class ExampleWorkModal extends React.Component {
  render() {
    let example = this.props.example;
    let modalClass = this.props.open ? 'modal--open' : 'modal--closed';

    return (
      <div className={"background--skyBlue " + modalClass}>
        <span className="color--cloud modal__closeButton"
          onClick={this.props.closeModal}>
          <i className="fa fa-window-close-o"></i>
        </span>
	

        <div className="color--cloud modal__text">
          <h2 className="modal__title">
            {example.title}
          </h2>
          <a className="color--skyBlue modal__link"
             href="http://www.lehighstudenthousing.com">
             {/*href={example.href}>*/}
             Click me!
          </a>
          <a className="color--skyBlue modal__link"
             href={example.href}>
             Click me!
          </a>

          {/*<p className="modal__description">*/}
          {/*<p className="section__exampleImage_modal">*/}

  <img className="section__exampleImage_modal"  src={"../images/302front.jpg"}/>
  <img className="section__exampleImage_modal" src={example.image2.src}/>
  <img  className="section__exampleImage_modal" src={"images/418Front.jpg"} />
  <img  className="section__exampleImage_modal" src={example.image3.src} />

          {/*</p>*/}
        </div>
      </div>
    )
  }
}

export default ExampleWorkModal;
