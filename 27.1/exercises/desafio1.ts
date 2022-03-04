class students {
  private registration: string;
  public name: string;
  readonly logicNote: number;
  readonly mathNote: number;
  readonly algorithmNote: number;
  readonly codingNote: number;
  readonly firstProject: number;
  readonly secondProject: number;


  constructor (registration: string, name: string, logicNote: number, mathNote: number, algorithmNote: number, codingNote: number, firstProject: number, secondProject: number) {
    this.registration = registration;
    this.name = name;
    this.logicNote = logicNote;
    this.mathNote = mathNote;
    this.algorithmNote = algorithmNote;
    this.codingNote = codingNote;
    this.firstProject = firstProject;
    this.secondProject = secondProject;
  }

  getAverage(): number {
    const average = (this.logicNote + this.mathNote + this.codingNote + this.algorithmNote + this.firstProject + this.secondProject) / 6
    console.log(`${this.name}'s grade point average is ${average}`);
    return average
  }

  getTotalGrade(): number {
    return (this.logicNote + this.mathNote + this.codingNote + this.algorithmNote + this.firstProject + this.secondProject);
  };

}

class students2 {
  private registration: string;
  public name: string;
  readonly workGrade: number[];
  readonly examsGrade: number[];


  constructor (registration: string, name: string) {
    this.registration = registration;
    this.name = name;
    this.workGrade = [];
    this.examsGrade = [];
  }

  setExamsNotes(newValue: number[]): void {
    this.examsGrade.push(...newValue);
  }

  setWorkNotes(newValue: number[]): void {
    this.workGrade.push(...newValue);
  }

  getWorkAverage(): number | void {
    if (this.workGrade.length = 0) {
      return console.log('Erro');
    }
    const someNotes = this.workGrade.reduce((curr, next) => curr + next, 0);
    return someNotes / this.workGrade.length;
  }

  getExamsAverage(): number | void {
    if (this.examsGrade.length = 0) {
      return console.log('Erro');
    }
    const someNotes = this.examsGrade.reduce((curr, next) => curr + next, 0);
    return someNotes / this.examsGrade.length;
  }
}

const Alunaras = new students2('25/02/2022', 'Marcelian')