class client {
  public name: string;

  constructor (name: string) {
    this.name = name;
  }
}

class order {
  public name: string[];
  public price: number;

  constructor (name: string[], price: number) {
    this.name = [];
    this.price = price;
  }

  public setNewOrder(newOrder: string[]) {
    this.name.push(...newOrder);
  }
}