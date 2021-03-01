import React, { useEffect, useRef, useContext } from 'react';
import './Cockpit.css';
import Auxx from '../hoc/Auxx';
import withClassArguments from '../hoc/withClassArguments';
import AuthContent from '../common/auth-context';

const cockpit = (props) => {
  const selektirajButton = useRef(null);

  // sluzi za prebacivanje komponenata izmedi componenata
  const izaberiIme = useContext(AuthContent);


  // aktivira se samo prvi puta i nakon brisanja sa ekrana nakon RENDERIRANJA
  useEffect(() => {
    console.log('%c [cockpit.js] 02 useEffect', 'color:magenta');
    // HTTP request
    const timer = setTimeout(() => {
      console.log('%c [cockpit.js] 02 setTimeout', 'color:olive');
    }, 1000);

    // click button
    // selektirajButton.current.click();

    // Aktivira se samo kada se ova komponenta brise (unmount) sa ekrana
    return () => {
      clearTimeout(timer);
      toggleAutorizacija()
      console.log('%c [cockpit.js] 02 cleanup work use efect', 'color:magenta');
    };

    //  za prazno [] aktivira se samo jednom!!!
  }, []);

  //
  useEffect(() => {
    console.log('%c [cockpit.js] 03 useEffect', 'color:magenta');
    // HTTP request
    return () => {
      console.log('%c [cockpit.js] 03 cleanup work use efect', 'color:magenta');
    };

    //  za prazno [] aktivira se samo jednom!!!
    //  ako nema nista aktivira se svaki puta
  });

  const toggleAutorizacija = (e) => {
    console.log(e);
    izaberiIme.authenticated = !izaberiIme.authenticated
    console.log(izaberiIme);
  };

  // uredivanje CSS
  let classes = [];
  let pokusCSS = 'red';

  if (props.personsLenght <= 3) {
    pokusCSS = 'red ajmoo';
    classes.push('red');
  }
  if (props.personsLenght <= 2) {
    pokusCSS = 'red ajmoo bold';
    classes.push('bold');
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <p className={pokusCSS}>01 pokusno!</p>
      <p className='zazeleni'>02 pokusno!</p>
      {/* <p className={zazeleni}>03 pokusno!</p> */}
      <button key='1' className={pokusCSS} onClick={props.togglePersonsHandler}>
        Toggle Persons
      </button>

      <button
        key='2'
        className='styleCSSpokus'
        onClick={props.autorizacija}
        ref={selektirajButton}
      >
        Promjeni
      </button>

      <button className='styleCSSpokus' onClick={toggleAutorizacija}>
        Promjeni lokalno
      </button>
    </div>
  );
};

// memo stiti od nepotrebnog renderiranja ako nije doslo do promjene u komponenti
//  ako se komponenta stalno mijenja onda nema smisla to stavljati jer je to dodatna funkcija
// export default React.memo(cockpit);

// export default cockpit;
export default withClassArguments(cockpit, 'promjeniText');
