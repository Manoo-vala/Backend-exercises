export default class Person {
  private _name: string = String();
  private _birthDate: Date = new Date();

  constructor(name:string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  get name(): string {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(date:Date) {
    this._birthDate = date
  }

  static getAge(value: Date): number {
    const diff = Math.abs(new Date().getTime() - value.getTime());
    const yearsMs = 31_536_000_000;
    return Math.floor(diff / yearsMs);
  }

  private validateName(value: string):void {
    if(value.length < 3) throw new Error('O nome deve ser maior');
  }

  private validateBirthDate(value:Date):void {
    if(value.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if(Person.getAge(value) > 120) throw new Error('Olá abuelita, seu tratamento de dados será diferente <3');
  }
}
