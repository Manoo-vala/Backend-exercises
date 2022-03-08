
class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {

      const dateStr = `${year}-${month}-${day}`;

      if (new Date(dateStr).getDate() !== day) {
          day = 1;
          month = 1;
          year = 1900;
      }

      this._day = day;
      this._month = month;
      this._year = year;
  }

  get day(): number {
      return this._day
  }

  set day(value: number) {
      this._day = value;
  }

  get month(): number {
      return this._month
  }

  set month(value: number) {
      this._month = value;
  }

  get year(): number {
      return this._year
  }

  set year(value: number) {
      this._year = value;
  }

  getMonthName():string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];
    return months[this.month -1];
  };

  isLeapYear(): boolean {
    return this._year % 4 === 0;
  }

  compare(date: Data):number {
    const currentDate = `${this._year}-${this._month}-${this._day}`

    const dateStr = `${date.year}-${date.month}-${date.day}`

    if(new Date(currentDate) > new Date(dateStr)) return 1;
    if(new Date(currentDate) < new Date(dateStr)) return -1;

    return 0;
  }

  format(format:string):string {
    switch(format) {
      case 'dd/mm/aaaa':
        return `${this._day}/${this._month}/${this._year}`;
      case 'aaaa/mm/dd':
        return `${this._year}/${this._month}/${this._day}`;
      case 'dd de M de aa':
        return `${this.day} de ${this.getMonthName} de ${(this._year.toString()).slice(-2)}`
      case 'dd, M de aaaa':
        return `${this.day}, ${this.getMonthName} de ${this._year}`
      
      default:
        return 'Data inválida'
    }
  }
}

const testDate = new Data(29, 1, 1989);

console.log(testDate);