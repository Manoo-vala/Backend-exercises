import Person from "./Person";
import Subject from "./Subject";

class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _salary: number;
  private _admissionDate = new Date ();
  private _registration: string;
  
  constructor (name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this._salary = salary;
    this._subject = subject;
    this._registration = this.generateRegistration();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(value: Subject) {
      this._subject = value;
  }

  get registration(): string {
      return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres.');

    this._registration = value
  }

  get salary(): number {
      return this._salary
  }

  set salary(value: number) {
      if (value < 0) throw new Error('O salário não pode ser negativo.');

      this._salary = value
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
      if (value.getTime() > new Date().getTime()) throw new Error('A data de admissão não pode ser uma data no futuro.');

      this._admissionDate = value
  }

  generateRegistration(): string {
      const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

      return `PRF${randomStr}`;
  }
}

/* `Class`: Teacher OK
`Extends`: Person OK
`Implements`: Employee OK
`Attributes`:
    - subject: a disciplina lecionada pela pessoa professora OK
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário e a disciplina OK
`Validations`:
    - O registro deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro */