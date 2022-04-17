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

  const formatResult = (value) => {
    if (value > 0) {
      return `+${value}`;
    }

    return `${value}`;
  };

  const getModifier = (stat) => Math.floor((Number(stat) - 10) / 2);

  const setDefault = () => {
    const char = { ...character };
    const {
      str,
      dex,
      con,
      int,
      wis,
      cha,
      strSaveChecked,
      dexSaveChecked,
      conSaveChecked,
      intSaveChecked,
      wisSaveChecked,
      chaSaveChecked,
    } = char;

    const proficiencyBonus = parseInt(char.proficiencyBonus);

    if (!proficiencyBonus) {
      return;
    }

    const strMod = getModifier(str);
    const dexMod = getModifier(dex);
    const conMod = getModifier(con);
    const intMod = getModifier(int);
    const wisMod = getModifier(wis);
    const chaMod = getModifier(cha);

    console.log({ strMod, dexMod, conMod, intMod, wisMod, chaMod });

    if (str || str === 0) {
      if (strSaveChecked) {
        char.strSave = formatResult(strMod + proficiencyBonus);
      } else {
        char.strSave = formatResult(strMod);
      }
    }

    if (dex || dex === 0) {
      if (dexSaveChecked) {
        char.dexSave = formatResult(dexMod + proficiencyBonus);
      } else {
        char.dexSave = formatResult(dexMod);
      }
    }

    if (con || con === 0) {
      if (conSaveChecked) {
        char.conSave = formatResult(conMod + proficiencyBonus);
      } else {
        char.conSave = formatResult(conMod);
      }
    }

    if (int || int === 0) {
      if (intSaveChecked) {
        char.intSave = formatResult(intMod + proficiencyBonus);
      } else {
        char.intSave = formatResult(intMod);
      }
    }

    if (wis || wis === 0) {
      if (wisSaveChecked) {
        char.wisSave = formatResult(wisMod + proficiencyBonus);
      } else {
        char.wisSave = formatResult(wisMod);
      }
    }

    if (cha || cha === 0) {
      if (chaSaveChecked) {
        char.chaSave = formatResult(chaMod + proficiencyBonus);
      } else {
        char.chaSave = formatResult(chaMod);
      }
    }

    if (dexMod || dexMod === 0) {
      if (char.skillAcrobaticsChecked) {
        char.skillAcrobatics = formatResult(dexMod + proficiencyBonus);
      } else {
        char.skillAcrobatics = formatResult(dexMod);
      }
    }

    if (wisMod || wisMod === 0) {
      if (char.skillAnimalHandlingChecked) {
        char.skillAnimalHandling = formatResult(wisMod + proficiencyBonus);
      } else {
        char.skillAnimalHandling = formatResult(wisMod);
      }
    }

    if (intMod || intMod === 0) {
      if (char.skillArcanaChecked) {
        char.skillArcana = formatResult(intMod + proficiencyBonus);
      } else {
        char.skillArcana = formatResult(intMod);
      }
    }

    if (strMod || strMod === 0) {
      if (char.skillAthleticsChecked) {
        char.skillAthletics = formatResult(strMod + proficiencyBonus);
      } else {
        char.skillAthletics = formatResult(strMod);
      }
    }

    if (dexMod || dexMod === 0) {
      if (char.skillStealthChecked) {
        char.skillStealth = formatResult(dexMod + proficiencyBonus);
      } else {
        char.skillStealth = formatResult(dexMod);
      }
    }

    if (intMod || intMod === 0) {
      if (char.skillInvestigationChecked) {
        char.skillInvestigation = formatResult(intMod + proficiencyBonus);
      } else {
        char.skillInvestigation = formatResult(intMod);
      }
    }

    if (chaMod || chaMod === 0) {
      if (char.skillDeceptionChecked) {
        char.skillDeception = formatResult(chaMod + proficiencyBonus);
      } else {
        char.skillDeception = formatResult(chaMod);
      }
    }

    if (chaMod || chaMod === 0) {
      if (char.skillIntimidationChecked) {
        char.skillIntimidation = formatResult(chaMod + proficiencyBonus);
      } else {
        char.skillIntimidation = formatResult(chaMod);
      }
    }

    if (chaMod || chaMod === 0) {
      if (char.skillPerformanceChecked) {
        char.skillPerformance = formatResult(chaMod + proficiencyBonus);
      } else {
        char.skillPerformance = formatResult(chaMod);
      }
    }

    if (wisMod || wisMod === 0) {
      if (char.skillInsightChecked) {
        char.skillInsight = formatResult(wisMod + proficiencyBonus);
      } else {
        char.skillInsight = formatResult(wisMod);
      }
    }

    if (wisMod || wisMod === 0) {
      if (char.skillMedicineChecked) {
        char.skillMedicine = formatResult(wisMod + proficiencyBonus);
      } else {
        char.skillMedicine = formatResult(wisMod);
      }
    }

    if (intMod || intMod === 0) {
      if (char.skillNatureChecked) {
        char.skillNature = formatResult(intMod + proficiencyBonus);
      } else {
        char.skillNature = formatResult(intMod);
      }
    }

    if (wisMod || wisMod === 0) {
      if (char.skillPerceptionChecked) {
        char.skillPerception = formatResult(wisMod + proficiencyBonus);
      } else {
        char.skillPerception = formatResult(wisMod);
      }

      char.passivePerception = (10 + parseInt(char.skillPerception)).toString();
    }

    if (chaMod || chaMod === 0) {
      if (char.skillPersuasionChecked) {
        char.skillPersuasion = formatResult(chaMod + proficiencyBonus);
      } else {
        char.skillPersuasion = formatResult(chaMod);
      }
    }

    if (dexMod || dexMod === 0) {
      if (char.skillSlightOfHandChecked) {
        char.skillSlightOfHand = formatResult(dexMod + proficiencyBonus);
      } else {
        char.skillSlightOfHand = formatResult(dexMod);
      }
    }

    if (intMod || intMod === 0) {
      if (char.skillReligionChecked) {
        char.skillReligion = formatResult(intMod + proficiencyBonus);
      } else {
        char.skillReligion = formatResult(intMod);
      }
    }

    if (wisMod || wisMod === 0) {
      if (char.skillSurvivalChecked) {
        char.skillSurvival = formatResult(wisMod + proficiencyBonus);
      } else {
        char.skillSurvival = formatResult(wisMod);
      }
    }

    if (intMod || intMod === 0) {
      if (char.skillHistoryChecked) {
        char.skillHistory = formatResult(intMod + proficiencyBonus);
      } else {
        char.skillHistory = formatResult(intMod);
      }
    }

    updateCharacter(char);
  };

  return (
    <>
      <header className="no-print header">
        <button onClick={print}>Stampa</button>
        <button onClick={setDefault}>Calcola</button>
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
