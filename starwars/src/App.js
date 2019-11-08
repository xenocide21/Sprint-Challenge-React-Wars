import React from 'react';
import './App.css';
import StarWars from "./components/StarWarsAPI";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

    const StyledH1 = styled.h1`
        color: grey;
    `;

  return (
    <div className="App">
        <StyledH1>React Wars</StyledH1>
      <StarWars/>
    </div>
  );
};

export default App;
