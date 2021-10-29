import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="definitions">
      <h3>{props.meaning.partOfSpeech}</h3>{" "}
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition} <br />
              <em> {definition.example}</em>
            </p>
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
