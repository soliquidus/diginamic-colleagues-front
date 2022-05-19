export class Model {
  id!: number
}

export class Colleague extends Model{
  matricule: number
  lastName: string
  firstName: string
  email: string
  birthDate: Date
  photoUrl: String


  constructor(matricule: number, lastName: string, firstName: string, email: string, birthDate: Date, photoUrl: String) {
    super();
    this.matricule = matricule;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.birthDate = birthDate;
    this.photoUrl = photoUrl;
  }
}

export class Matricule extends Model {
  number: string
  colleagueId: number


  constructor(number: string, colleagueId: number) {
    super();
    this.number = number;
    this.colleagueId = colleagueId;
  }
}
