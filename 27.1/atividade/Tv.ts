class TV {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    console.log(`Created TV ${brand} - ${resolution}`);
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }
  
  turnOn(): void {
    console.log(`${this._brand} - ${this._size} - ${this._resolution} - ${this._connections}.`);
  }

  get connectedTo(): string {
    return this._connectedTo;
  }
  
  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
    } else {
      console.log('Invalid Connection to this tv!');
      
    }
  }
};

const firstTv = new TV('Massquerain', 62, '6200px', ['HDMI', 'Ethernet']);

firstTv.turnOn();

firstTv.connectedTo = 'HDMI';

console.log(`A tv ${firstTv} está conectada via ${firstTv.connectedTo}`);
