class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    console.log(`Created TV ${brand} - ${resolution}`);
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
  }
  
  turnOn(connectedTo) {
    console.log(`${this.brand} - ${this.size} - ${this.resolution} - ${this.connections} - ${connectedTo}.`);
    
  }
};

const firstTv = new TV('Massquerain', 62, '6200px', ['HDMI', 'Ethernet']);

firstTv.turnOn('HDMI');