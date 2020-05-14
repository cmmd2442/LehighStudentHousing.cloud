import React from 'react';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import Image from 'react-image-resizer';
import ExampleWorkModal from './example-work-modal';
import Meight from './Meight';
import M418 from './M418';
import M417 from './M417';



class ExampleWork extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      'modalOpen': false,
      'selectedExample': this.props.work[0],
      username: '',
      flag: false,
	i: 1

    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.mySubmitHandler = this.mySubmitHandler.bind(this);
    this.myChangeHandler = this.myChangeHandler.bind(this);
  }

  mySubmitHandler(event){
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler(event){
    this.setState({username: event.target.value});
    this.setState({flag: this.props.work.example});
  }

  openModal(evt, example) {
    this.setState({
      'modalOpen': true,
      'selectedExample': example
    });
  }

  closeModal(evt) {
    this.setState({
      'modalOpen': false
    });
  }



  render() {

    return (
      <span>
      <section className="section section--alignCentered section--description">


        { this.props.work.map( (example, idx) => {
          return (
            <ExampleWorkBubble  example={example} key={idx}
            openModal={this.openModal}/>

          )
        })
      }


      </section>


      <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username}</h1>
      <h1>Hello </h1>
      <p>Enter your name, and submit:</p>
      this.state.flag={this.props.work.title}
      <input
        type='text'
        onChange={this.myChangeHandler}
      />
      <input
        type='submit'
      />
      </form>

{console.log('Loaded react-dom-tester')}
{console.log(this.state.selectedExample)}
{console.log(this.state.selectedExample.title)}
{console.log('Loaded react-dom-test')}




      <ExampleWorkModal example={this.state.selectedExample}
        open={this.state.modalOpen} closeModal={this.closeModal}/>

      <If condition={this.state.selectedExample.title=="418 Selfridge st"}>
     	<Then>
	<M418 example={this.state.selectedExample}
        open={this.state.modalOpen} closeModal={this.closeModal}/>
	</Then>
      </If>

      <If condition={this.state.selectedExample.title=="417 Montclair"}>
     	<Then>
	<M417 example={this.state.selectedExample}
        open={this.state.modalOpen} closeModal={this.closeModal}/>
	</Then>

      </If>

      <If condition={this.state.selectedExample.title=="302 W 8 st"}>
     	<Then>
	<Meight example={this.state.selectedExample}
        open={this.state.modalOpen} closeModal={this.closeModal}/>
	</Then>
      </If>

      </span>

    )
  }
}

class ExampleWorkBubble extends React.Component {
  render() {

    let example = this.props.example;
    let h = 600;
    let w = 900;

{console.log('title is = ')}
{console.log(example.title)}

return (

        <div className="section__exampleWrapper"
          onClick={ (evt) => this.props.openModal(evt, example) }>

          <div className="section__example">
            <img alt={example.image.desc}

                 className="section__exampleImage"
                 src={example.image.src}
		height = {h}
		width = {w}	

		/>

            <dl className="color--cloud">
              <dt className="section__exampleTitle section__text--centered">
                {example.title}
                {/*}{example.title}*/}
              </dt>
              <dd></dd>
            </dl>
          </div>
        </div>
    )
  }
}

export default ExampleWork;
