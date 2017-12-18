import React from 'react';


const Header = (props) => {
  return (
    <header className="top">
      <h1>
        Lucky
        <span className="ofThe">
          <span className="of">of</span>
          <span className="the">the</span>
        </span>
        Cycles
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3>
    </header>
  )
}






export default Header;
