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

  const print = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(character));
    const dlAnchorElem = document.createElement("a");
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", "character.json");
    dlAnchorElem.click();

    window.print();
  };

  return (
    <>
      <header className="no-print header">
        <button onClick={print}>Stampa</button>
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
