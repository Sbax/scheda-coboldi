import "bootstrap/dist/css/bootstrap.css";
import {
  DnDCharacterSpellSheet,
  DnDCharacterStatsSheet,
} from "dnd-character-sheets";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [character, setCharacter] = useState({});

  const Title = (
    <img alt="Logo" className="image" src="./officina_coboldi_black_text.svg" />
  );

  const statsSheet = (
    <DnDCharacterStatsSheet
      character={character}
      onCharacterChanged={updateCharacter}
      title={Title}
    />
  );

  const spellSheet = (
    <DnDCharacterSpellSheet
      character={character}
      onCharacterChanged={updateCharacter}
      title={Title}
    />
  );

  function updateCharacter(character) {
    setCharacter(character);
  }

  return (
    <>
      <header className="no-print header">
        <button onClick={window.print}>Stampa</button>
      </header>
      <div className="app-holder">
        {statsSheet}
        <div className="page-break" />
        {spellSheet}
      </div>
    </>
  );
};

export default App;
