class Client {
  private _name:string = String();

  constructor (name: string) {
    this.name = name;
  }

  get name():string {
    return this.name;
  }

  set name(name: string) {
    if (name.length < 3) {
      throw new Error('Nome curto demaissss');
    }
    this._name = name;
  }
}

class OrderProduct {
  private _name:string = String();
  private _price:number = Number();

  constructor(name:string, price:number) {
    this.name = name;
    this.price = price
  }

  get name():string {
    return this._name;
  }

  get price():number {
    return this._price;
  }
  
  set name(value:string) {
    if (value.length < 3) {
      throw new Error('Nome curto demaissss');
    }
    this._name = value;
  }

  set price(value:number) {
    if(value < 0) throw new Error('De graça, nem injeção na testa.');

    this._price = value;
  }
}

class Order {
  private _client: Client;
  private _items: OrderProduct[] = [];
  private _paymentMethod:string;
  private _discount:number = 0;

  constructor(client: Client, items:OrderProduct[], pay:string, discount:number) {
    this._client = client;
    this.items = items;
    this._paymentMethod = pay;
    this.discount = discount;
  }

  get client():Client {
    return this._client;
  };

  set client(value:Client) {
    this._client = value 
  }

  get items():OrderProduct[] {
    return this._items;
  }

  set items(values:OrderProduct[]) {
    if (values === []) throw new Error('Precisa haver ao menos um pedido');
    this._items = values;
  }

  get paymentMethod():string {
    return this._paymentMethod;
  }

  set paymentMethod(pay:string) {
    this._paymentMethod = pay;
  }

  get discount():number {
    return this._discount;
  }

  set discount(disc:number) {
    if(disc < 0) throw new Error('O desconto precisa ser válido');
    this._discount = disc;
  }

  calculateTotal() {
    return this.items.reduce((prev, curr) => {
      const totalValue = prev += curr.price;

      return totalValue;
    }, 0);
  }

  calculateWithDiscount() {
    return this.calculateTotal() * (1 - this._discount)
  }
}