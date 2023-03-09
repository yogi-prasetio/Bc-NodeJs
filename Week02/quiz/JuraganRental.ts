export class Vehicles {
  vehicleType: string;
  protected year: number;
  protected transcationDate: string;
  total: number;

  constructor(vehicleType: string, year: number, transactionDate: string) {
    this.vehicleType = vehicleType;
    this.year = year;
    this.transcationDate = transactionDate;
    this.total = 0;
  }
}

export class Suv extends Vehicles {
  private noPol: string;
  private price: number;
  private tax: number;
  private seat: number;
  private rent: number;
  private driver: number;

  constructor(
    vehicleType: string,
    year: number,
    transactionDate: string,
    noPol: string,
    seat: number
  ) {
    super(vehicleType, year, transactionDate);
    this.noPol = noPol;
    this.price = 350_000_000;
    this.tax = this.price / 10;
    this.seat = seat;
    this.rent = 500_000;
    this.driver = 150_000;
    this.total = this.rent + this.driver;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

  getTotal(): number {
    return this.total;
  }
  toString(): string {
    return `${this.noPol} | ${this.vehicleType} | ${this.price} | ${this.rent} + ${this.driver} | ${this.getTotal()}`;
  }
}

export class Taxi extends Vehicles {
  private noPol: string;
  private price: number;
  private tax: number;
  private seat: number;
  private order: number;
  private orderPerKm: number;

  constructor(
    vehicleType: string,
    year: number,
    transactionDate: string,
    noPol: string,
    price: number,
    order: number
  ) {
    super(vehicleType, year, transactionDate);
    this.noPol = noPol;
    this.price = price;
    this.tax = this.price / 10;
    this.seat = 4;
    this.order = order;
    this.orderPerKm = 4_500;
    this.total = this.order * this.orderPerKm;
  }

  setPrice(price: number): void {
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

  getTotal(): number {
    return this.total;
  }
  toString(): string {
    return `${this.noPol} | ${this.vehicleType} | ${this.price} | ${this.order} x ${this.orderPerKm} | ${this.getTotal()}`;
  }
}

export class PrivateJet extends Vehicles {
  private noPol: string;
  private price: number;
  private tax: number;
  private seat: number;
  private rent: number;
  private driver: number;

  constructor(
    vehicleType: string,
    year: number,
    transactionDate: string,
    noPol: string,
    price: number,
    seat: number,
    rent: number,
    driver: number
  ) {
    super(vehicleType, year, transactionDate);
    this.noPol = noPol;
    this.price = price;
    this.tax = this.price / 10;
    this.seat = seat;
    this.rent = rent;
    this.driver = driver;
    this.total = this.rent + this.driver;
  }
  
  setPrice(price: number): void {
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

  getTotal(): number {
    return this.total;
  }
  toString(): string {
    return `${this.noPol} | ${this.vehicleType} | ${this.price} | ${this.rent} + ${this.driver} | ${this.getTotal()}`;
  }
}