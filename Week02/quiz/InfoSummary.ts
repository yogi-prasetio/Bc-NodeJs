import { Vehicles, Suv, Taxi, PrivateJet } from "./JuraganRental";

interface info {
  setTotalVehicle(vehicle: Vehicles[], type?: string): void;
  getTotalVehicle(): number;
  getTotalIncomeVehicle(): number;
}

class summary implements info {
  private vehicle: Vehicles[];

  constructor(vehicle: Vehicles[]) {
    this.vehicle = vehicle;
  }

  setTotalVehicle(vehicle: Vehicles[]): void {
    this.vehicle = vehicle;
  }

  getTotalVehicle(type?: string): number {
    if (type === undefined) {
      return this.vehicle.length;
    } else {
      return this.vehicle.filter((e) => e.vehicleType === type).length;
    }
  }

  getTotalIncomeVehicle(type?: string): number {
    if (type === undefined) {
      return this.vehicle.reduce(
        (accumulator, current) => accumulator + current.total,
        0
      );
    } else {
      return this.vehicle
        .filter((e) => e.vehicleType === type)
        .reduce((accumulator, current) => accumulator + current.total, 0);
    }
  }
}

const suv1 = new Suv("SUV", 2010, "10/01/2023", "D 1001 UM", 4);
const suv2 = new Suv("SUV", 2010, "10/01/2023", "D 1002 UM", 4);
const suv3 = new Suv("SUV", 2015, "12/01/2023", "D 1003 UM", 5);
const suv4 = new Suv("SUV", 2015, "13/01/2023", "D 1004 UM", 5);

const taxi1 = new Taxi("Taxi", 2002, "12/01/2023", "D 11 UK", 175_000_000, 45);
const taxi2 = new Taxi("Taxi", 2015, "13/01/2023", "D 12 UK", 225_000_000, 75);
const taxi3 = new Taxi("Taxi", 2020, "13/01/2023", "D 13 UK", 275_000_000, 90);

const jet1 = new PrivateJet(
  "Private Jet",
  2015,
  "23/12/2022",
  "ID8089",
  150_000_000,
  12,
  35_000_000,
  15_000_000
);
const jet2 = new PrivateJet(
  "Private Jet",
  2018,
  "25/12/2022",
  "ID8099",
  175_000_000,
  15,
  55_000_000,
  25_000_000
);

let vehicles: Vehicles[] = [
  suv1,
  suv2,
  suv3,
  suv4,
  taxi1,
  taxi2,
  taxi3,
  jet1,
  jet2,
];

console.log('VEHICLE PURCHASE AND INCOME:');
console.log(suv1.toString());
console.log(suv2.toString());
console.log(suv3.toString());
console.log(suv4.toString());
console.log(taxi1.toString());
console.log(taxi2.toString());
console.log(taxi3.toString());
console.log(jet1.toString());
console.log(jet2.toString());

suv1.setPrice(30000000);
console.log('Change Price: '+suv1.toString());

console.log(`\nINFO SUMMARY:`);
const summaryInfo = new summary(vehicles);
console.log('Total Vehicle\t\t: '+summaryInfo.getTotalVehicle());
console.log('Total Vehicle (Filter)\t: '+summaryInfo.getTotalVehicle("SUV"));
console.log('Total Income (SUV)\t: '+summaryInfo.getTotalIncomeVehicle("SUV"));
console.log('Total Income (Taxi)\t: '+summaryInfo.getTotalIncomeVehicle("Taxi"));
console.log('Total Income (Jet)\t: '+summaryInfo.getTotalIncomeVehicle("Private Jet"));
console.log('TOTAL INCOME VEHICLE\t: '+summaryInfo.getTotalIncomeVehicle());
