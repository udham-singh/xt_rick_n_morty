import React from "react";
import { useSelector } from "react-redux";
import {
  selectCharacters,
  selectCharactersError,
} from "../../shared/selectors";
import { Character } from "../../shared/models/character";
import CharachterInfo from "../CharacterInfo/CharachterInfo";

export const CharactersList = () => {
  const characters = useSelector(selectCharacters);
  const error = useSelector(selectCharactersError);
  return error ? (
    <h2 style={{ textAlign: "center" }}>No Result Found</h2>
  ) : characters.length ? (
    <div className="characterContainer__list">
      {characters.map((character: Character) => (
        <div className="characterContainer__list__item" key={character.id}>
          <CharachterInfo data={character} />
        </div>
      ))}
    </div>
  ) : null;
};
