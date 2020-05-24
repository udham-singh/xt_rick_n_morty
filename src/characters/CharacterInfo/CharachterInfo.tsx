import React, { memo, useState } from "react";
import { Character, Gender } from "../../shared/models/character";
import { Image } from "../../shared/components/atoms";
import "./characterInfo.scss";

type Props = {
  data: Character;
};

const genderPrefixMap = {
  [Gender.Male]: "He is",
  [Gender.Female]: "She is",
  [Gender.Genderless]: "They're",
  [Gender.Unknown]: null,
};

const CharachterInfo = (props: Props) => {
  const { data } = props;
  const [showCardDesc, setShowCardDesc] = useState<boolean>(false);
  const toggleCardDescription = (value: boolean) => {
    setShowCardDesc(value);
  };
  const getCharacterDescription = () => {
    let description = genderPrefixMap[data.gender] || "";
    if (data.species !== "Unknown") {
      description += ` ${data.species}`;
    }
    description += ` from ${data.origin.name}.`;
    description += `Last known location: ${data.location.name}`;
    return description;
  };
  return (
    <div
      className="card"
      onMouseEnter={() => toggleCardDescription(true)}
      onMouseLeave={() => toggleCardDescription(false)}
    >
      <figure className="card__image">
        <Image src={data.image} alt={data.name + " avatar"}></Image>
      </figure>
      <div
        className={
          showCardDesc ? "card__description--active" : "card__description"
        }
      >
        <span className="card__title">{data.name}</span>
        <span className="card__subtitle">{data.origin.name}</span>
        {showCardDesc && (
          <div className="card__body">
            <p className="card__body__item">{getCharacterDescription()}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(CharachterInfo);
