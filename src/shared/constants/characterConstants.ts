export enum SortParam {
  None = "none",
  Name = "name",
  Gender = "gender",
  Species = "species",
}

export enum SortDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum CharacterSpecies {
  Human = "Human",
  Alien = "Alien",
  Humanoid = "Humanoid",
  Animal = "Animal",
  Vampire = "Vampire",
  Robot = "Robot",
  Disease = "Disease",
  Unknown = "Unknown",
}

export enum CharacterGender {
  Male = "Male",
  Female = "Female",
  Genderless = "Genderless",
  Unknown = "Unknown",
}

export enum CharacterStatus {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}

export interface CharacterFilter {
  category: string;
  key: string;
  childKey?: string;
  options: string[];
}
