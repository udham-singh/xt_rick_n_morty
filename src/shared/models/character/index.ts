export enum Gender {
  Male = "Male",
  Female = "Female",
  Genderless = "Genderless",
  Unknown = "Unknown",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "Unknown",
}

export class Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: Gender;
  origin: NameUrl;
  location: NameUrl;
  image: string;
  episode: string[];
  url: string;
  created: string;

  constructor(data: any) {
    this.id = data ? data.id : null;
    this.name = data ? data.name : null;
    this.status = data ? data.status : null;
    this.species = data ? data.species : null;
    this.type = data ? data.type : null;
    this.gender = data ? data.gender : null;
    this.origin = data ? data.origin : null;
    this.location = data ? data.location : null;
    this.image = data ? data.image : null;
    this.episode = data ? data.episode : null;
    this.url = data ? data.url : null;
    this.created = data ? data.created : null;
  }
}

export interface ICharacterFilter {
  id: number;
  label: string;
  value: string;
}

export interface NameUrl {
  name: string;
  url: string;
}
