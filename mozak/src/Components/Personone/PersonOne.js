import React, { Component} from 'react';
import './Personone.css';
import PropTypes from 'prop-types';
import Auxx from '../hoc/Auxx';
import AuthContent from '../common/auth-context'

class Personone extends Component {
  constructor(props) {
    super(props);
    // console.log('%c [Personone.js] 00 rendering...', 'color:yellow', this.props);
  }

  // sluzi za prebacivanje komponenata izmedi componenata
  // (contextType) reserved React word SAMO za classs !!
  static contextType = AuthContent

  componentDidMount() {
    console.log('%c [PersonOne.js] 02 componentDidMount...', 'color:yellow');
    console.log(this.context.authenticated);
  }


  render() {
    console.log('%c [PersonOne.js] 01 rendering...', 'color:yellow', this.props);
    return (
      // isto i fragment funkcija
      <Auxx>
        {  this.context.authenticated ? (<p>Autoriziran</p>) : (<p>NE autoriziran</p>)}
        <div className='Person'>
          <p onClick={this.props.klik}>
            I'm {this.props.name} and I am {this.props.age} years old!
          </p>
          <p onClick={this.props.dajProbaj} id='tt'>
            xxxx{this.props.children}
          </p>
          <input
            type='text'
            onChange={this.props.promjena}
            value={this.props.name}
          />
        </div>
      </Auxx>
    );
  }
}

// prati rad u DEV modu, štiti od neželjenih vrijednosti
// preporučljivo
Personone.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  promjena: PropTypes.func,
};

// export default Radium(person);
export default Personone;
