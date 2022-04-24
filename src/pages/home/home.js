import React from "react";
import { Link } from "wouter";
import barbarianAncestral from "../../characters/barbarian-ancestral-guardian.json";
import barbarianTotem from "../../characters/barbarian-totem-warrior.json";
import fighterChampion from "../../characters/fighter-champion.json";
import rogueSwashbuckler from "../../characters/ladro-swashbuckler.json";
import wizardDivination from "../../characters/mago-divinazione.json";
import rangerHunter from "../../characters/ranger-hunter.json";
import warlockFeywild from "../../characters/warlock-fatato.json";
import Button from "../../components/button/button";
import "./home.scss";

function Home() {
  const characters = [
    { id: "barbarian-ancestral-guardian", ...barbarianAncestral },
    { id: "barbarian-totem-warrior", ...barbarianTotem },
    { id: "fighter-champion", ...fighterChampion },
    { id: "ladro-swashbuckler", ...rogueSwashbuckler },
    { id: "mago-divinazione", ...wizardDivination },
    { id: "ranger-hunter", ...rangerHunter },
    { id: "warlock-fatato", ...warlockFeywild },
  ].map((char) => ({
    ...char,
    level: char.classLevel.match(/\d/),
    classString: char.classLevel.replace(/\d/g, ""),
  }));

  return (
    <main className="home">
      <img
        alt="Logo"
        className="image"
        src="/officina_coboldi_black_text.svg"
      />

      <a className="site" href="https://officinacoboldi.it">
        Vai al nostro sito
      </a>

      <h1>Compendio dei Personaggi</h1>

      <Link href="/sheet">
        <Button>Nuovo personaggio</Button>
      </Link>

      <table>
        <thead>
          <tr>
            <th>Classe</th>
            <th>Livello</th>
            <th>Razza</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char) => (
            <tr key={char.id}>
              <td>{char.classString}</td>
              <td>{char.level}</td>
              <td>{char.race}</td>
              <td>
                <Link href={`/sheet/${char.id}`}>
                  <Button>Vedi</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Home;
