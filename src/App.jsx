import React from 'react';
import 'bulma/css/bulma.css';
import Flashcard from './Flashcard';
import { gbFacts } from './facts';
import bigBen from './images/bigBenImg.jpg';
import gbFlag from './images/gbFlagImg.png';


function App() {

  return (
        <div className="section" style={{backgroundColor:'#FAF9F6', minHeight:'-0.02em'}}>
          <div className="container">
         <header className="mb-6 has-text-centered">
          <h1 className="title is-2" style={{fontWeight: 400, letterSpacing: '-0.02em', color: '#243370'}}>
            <span className='m-4 is-4by3 is-hidden-mobile'>
              <img src={bigBen} alt="Big Ben " style={{ width: '100%', maxWidth: '100px', borderRadius: '8px' }} />
            </span>
            Great Britain
            <span className='m-4 is-4by3 is-hidden-mobile'>
              <img src={gbFlag} alt="Britain Flag" style={{ width: '100%', maxWidth: '100px', borderRadius: '8px' }} />
              </span>
              </h1>
          <p className="subtitle is-6 has-text-grey">Click to flip the facts</p>
         </header>
         <div className="columns is-multiline is-centered">
          {gbFacts.map(fact => (
            <div className="column is-narrow" key={fact.id}>
            <Flashcard question={fact.q} answer={fact.a} />
          </div>
          ))}
         </div>
          </div>
        </div> 
  )
}

export default App
