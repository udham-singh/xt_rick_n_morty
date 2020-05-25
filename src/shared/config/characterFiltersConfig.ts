import {
  CharacterSpecies,
  CharacterGender,
  CharacterFilter,
  CharacterStatus,
} from "../constants/characterConstants";

const FILTERS_CONFIG: CharacterFilter[] = [
  {
    category: "Species",
    key: "species",
    options: [
      "None",
      CharacterSpecies.Human,
      CharacterSpecies.Alien,
      CharacterSpecies.Animal,
      CharacterSpecies.Disease,
      CharacterSpecies.Humanoid,
      CharacterSpecies.Robot,
      CharacterSpecies.Vampire,
      CharacterSpecies.Unknown,
    ],
  },
  {
    category: "Gender",
    key: "gender",
    options: [
      "None",
      CharacterGender.Male,
      CharacterGender.Female,
      CharacterGender.Genderless,
      CharacterGender.Unknown,
    ],
  },
  {
    category: "Status",
    key: "status",
    options: [
      "None",
      CharacterStatus.Alive,
      CharacterStatus.Dead,
      CharacterStatus.Unknown,
    ],
  },
];

export default FILTERS_CONFIG;
