import Person from "./Person";

class Student extends Person {
  private _enrollment: string;
  private _examGrades: number[] = [];
  private _workGrades: number[] = [];

  constructor (name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) throw new Error('A matrícula ta pequena demais hahaay');
    this._enrollment = value;
  }

  get examGrades(): number[] {
    return this._examGrades;
  }

  set examGrades(value: number[]) {
    if (value.length < 4) throw new Error('Ta faltando provinhas ai chará');
    this._examGrades = value;
  }

  get workGrades(): number[] {
    return this._workGrades;
  }

  set workGrades(value: number[]) {
    if (value.length < 2) throw new Error('Deixou de fazer algum trabalho ?');
    this._workGrades = value;
  }

  // Gera uma especie de Hash indentificador único
  generateEnrollment(): string {
    const randomString = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');

    return `Stu${randomString}`;
  }

};

export default Student;