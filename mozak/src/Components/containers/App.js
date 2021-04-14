import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import AuthContent from '../common/auth-context';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('%c [App.js] 00 START  constructor START', 'color:red');
  }

  state = {
    persons: [
      { id: 'sdjjsee', name: 'Maxx', age: 311 },
      { id: 'dhgggdf', name: 'Manuu', age: 29 },
      { id: 'qww33jwj', name: 'Stephaniee', age: 26 },
      { id: 'qswwjwj', name: 'Stephaniee', age: 26 },
      { id: 'qbwwjwj', name: 'Stephaniee', age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    poredak: 'START',
  };

  // (contextType) reserved React word SAMO za classs !!
  static contextType = AuthContent;

  componentDidMount(props) {
    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
    this.setState({ poredak: '03' });
    console.log(
      '%c [App.js] 03 componentDidMount',
      'color:#3498DB',
      props,
      this.state.poredak
    );
  }

  componentDidUpdate(props) {
    // componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.
    // Use this as an opportunity to operate on the DOM when the component has been updated.
    // This is also a good place to do network requests as long as you compare the current props to previous props
    // (e.g. a network request may not be necessary if the props have not changed).
    console.log('%c [App.js] 04 componentDidUpdate', 'color:#3498DB', props);
    console.log('****', this.context.authenticated);
  }

  componentWillUnmount(props) {
    // componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. 
    // Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, 
    // or cleaning up any subscriptions that were created in componentDidMount().
    console.log('%c [App.js] 06 componentWillUnmount', 'color:#3498DB', props);
  }


  // *************************************************
  // ********************************************************
    // rijetko se koristi
  shouldComponentUpdate(props) {
    console.log('%c [App.js] 05 shouldComponentUpdate', 'color:#3498DB', props);
    // Ova funkcija mora vratiti vrijednost true je default
    return true;
  }
  //  rijetko se koristi
  static getDerivedStateFromProps(props, state) {
    console.log(
      '%c [App.js] 01 getDerivedStateFromProps NE KORISTI!!!',
      'color:#3498DB',
      props,
      state
    );
    return state;
  }
  // rijetko se koristi
  getSnapshotBeforeUpdate(props) {
    // this.setState({poredak:'06 - getSnapshotBeforeUpdate'})
    console.log(
      '%c [App.js] 06 getSnapshotBeforeUpdate',
      'color:#3498DB',
      props,
      this.state.poredak
    );
    return null;
  }


  // delete
  deletePersonHandler = (personIndex) => {
    // Obavezno raditi slice() metoda ili spread operator
    // const persons = this.state.persons.slice();  // 01
    const persons = [...this.state.persons]; // 02

    persons.splice(personIndex, 1);
    console.log(
      ' [App.js] deletePersonHandler ',
      personIndex,
      persons,
      this.state
    );
    this.setState({ persons: persons });
  };

  // Promjeni text
  nameChangedHandler = (event, id) => {
    // pronalazim index
    const personIndex = this.state.persons.findIndex((data) => {
      return data.id === id;
    });

    const personOne = { ...this.state.persons[personIndex] };
    // ili drugi nacin
    // personOne = Object.assign({}, this.state.persons[personIndex]);

    personOne.name = event.target.value;

    const allPersons = [...this.state.persons];
    allPersons[personIndex] = personOne;

    console.log(' [App.js] 01 nameChangedHandler', personIndex);
    this.setState({ persons: allPersons });
  };

  //
  // PRIKAZI/SAKRIJ listu
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  // Probna funkcija listu
  probaFunkcija = (data) => {
    console.log(data);
    console.log(data.target);
    console.log(data.target.currentTarget);
    // console.log(event.target.getAtribute('id'));
  };

  toggleAutorizacija = (e) => {
    console.log(e);
    console.log(this.context.authenticated);
    this.context.authenticated = !this.context.authenticated;
    // this.setState({ state: this.state });
    this.forceUpdate();
    // izaberiIme.authenticated = !izaberiIme.authenticated
  };

  render() {
    console.log('%c [App.js] 02 Render', 'color:#3498DB', this.props);
    // ako je person true prikazati ce na ekran
    let personsDOM = null;

    if (this.state.showPersons) {
      personsDOM = (
        <div>
          <Persons
            persons={this.state.persons}
            changed={this.nameChangedHandler}
            clicked={this.deletePersonHandler}
            proba={this.probaFunkcija}
            autorizacija={this.context.authenticated}
          ></Persons>
        </div>
      );
    }

    return (
      // <StyleRoot>
      <WithClass poslaoporuku="withclass poruka">
        <button
          onClick={() => {
            const promjeniStanje = this.state.showCockpit;
            this.setState({ showCockpit: !promjeniStanje });
          }}
        >
          {this.state.showCockpit ? 'Sakrij' : 'Prikazi'}
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLenght={this.state.persons.length}
            togglePersonsHandler={this.togglePersonsHandler}
            autorizacija={this.toggleAutorizacija}
          ></Cockpit>
        ) : null}
        {personsDOM}
      </WithClass>
      // </StyleRoot>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App);
export default App;
// export default withClassArguments(App,'promjeniText');
