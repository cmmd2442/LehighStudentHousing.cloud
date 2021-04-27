import React from 'react';
import { If, Then, ElseIf, Else } from 'react-if-elseif-else-render';
import Image from 'react-image-resizer';
import ExampleWorkModal from './example-work-modal';
import Meight from './Meight';
import M418 from './M418';
import M417 from './M417';


import Navbar from './indexer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Home2 from './pages/home2';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import FiveBed1 from './pages/fiveBed1';
import FiveBed2 from './pages/fiveBed2';
import SignUp from './pages/signup';


import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';



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


	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/home2' component={Home2} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/fiveBed1' component={FiveBed1} />
		<Route path='/fiveBed2' component={FiveBed2} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	</Router>




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

{console.log('title is = ')}
{console.log(example.title)}

return (

        <div className="section__exampleWrapper"
          onClick={ (evt) => this.props.openModal(evt, example) }>

          <div className="section__example">
	{/*	<img src={M417} alt="test" /> */}
            {/*<img alt={example.image.desc} */}
            <img alt={example.image.desc} 

                 className="section__exampleImage"
                 src={example.image.src}

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
