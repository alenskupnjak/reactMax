import React, { Component } from 'react';
import Personone from '../Personone/PersonOne';

class Persons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('%c [Persons.js] 10 START  constructor START', 'color:green');
  }

  // ova komponenta se rijetko koristi !!!
  // static getDerivedStateFromProps(props, state) {
  //   console.log(
  //     '%c [Persons.js] 11 getDerivedStateFromProps',
  //     'color:green',
  //     props
  //   );
  //   return state;
  // }


  // Ako nema promjene u podacima ne prolazi kroz proces renderirenje copmponente
  shouldComponentUpdate(nextProps, nextState) {
    console.log('xxxxxxx',nextProps, nextState);
    return true
    if (nextProps.persons !== this.props.persons || nextProps.autorizacija) {
      console.log(
        '%c [Persons.js] 12 shouldComponentUpdate TRUE, DA mijenjam!!!',
        'color:green',
        nextProps,
        nextState
      );
      return true;
    } else {
      console.log(
        '%c [Persons.js] 12 shouldComponentUpdate FALSE, NE mijenjam!!!',
        'color:green',
        nextProps,
        nextState
      );
      return false;
    }
  }

  getSnapshotBeforeUpdate() {
    console.log('%c [Persons.js] 13 getSnapshotBeforeUpdate', 'color:green');
    return { msg: 'getSnapshotBeforeUpdate' };
  }

  // ovo ces cesto koristiti
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(
      '%c [Persons.js] 16 componentDidUpdate',
      'color:green',
      prevProps,
      prevState,
      snapshot
    );
    return true;
  }

  componentWillUnmount() {
    console.log('%c [Persons.js] 17 componentWillUnmount', 'color:green');
  }

  render() {
    console.log('%c [Persons.js] 14 rendering...', 'color:green', this.props);
    const prikazi = this.props.persons.map((data, index) => {
      return (
        <Personone
          klik={() => this.props.clicked(index)}
          name={data.name}
          age={data.age}
          key={data.id}
          promjena={(event) => this.props.changed(event, data.id)}
          dajProbaj={this.props.proba}
        ></Personone>
      );
    });

    if (prikazi.length === 0) {
      console.log('%c Tu sam', 'color:green');
      return (
        <div>
          <p className='zazeleni'>Nema ZAPISA</p>
        </div>
      );
    }
    console.log('%c [Persons.js] 15 Person=', 'color:green', prikazi);
    return prikazi;
  }
}

export default Persons;
