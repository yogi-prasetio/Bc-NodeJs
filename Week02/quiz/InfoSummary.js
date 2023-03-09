"use strict";
exports.__esModule = true;
var JuraganRental_1 = require("./JuraganRental");
var summary = /** @class */ (function () {
    function summary(vehicle) {
        this.vehicle = vehicle;
    }
    summary.prototype.setTotalVehicle = function (vehicle) {
        this.vehicle = vehicle;
    };
    summary.prototype.getTotalVehicle = function (type) {
        if (type === undefined) {
            return this.vehicle.length;
        }
        else {
            return this.vehicle.filter(function (e) { return e.vehicleType === type; }).length;
        }
    };
    summary.prototype.getTotalIncomeVehicle = function (type) {
        if (type === undefined) {
            return this.vehicle.reduce(function (accumulator, current) { return accumulator + current.total; }, 0);
        }
        else {
            return this.vehicle
                .filter(function (e) { return e.vehicleType === type; })
                .reduce(function (accumulator, current) { return accumulator + current.total; }, 0);
        }
    };
    return summary;
}());
var suv1 = new JuraganRental_1.Suv("SUV", 2010, "10/01/2023", "D 1001 UM", 4);
var suv2 = new JuraganRental_1.Suv("SUV", 2010, "10/01/2023", "D 1002 UM", 4);
var suv3 = new JuraganRental_1.Suv("SUV", 2015, "12/01/2023", "D 1003 UM", 5);
var suv4 = new JuraganRental_1.Suv("SUV", 2015, "13/01/2023", "D 1004 UM", 5);
var taxi1 = new JuraganRental_1.Taxi("Taxi", 2002, "12/01/2023", "D 11 UK", 175000000, 45);
var taxi2 = new JuraganRental_1.Taxi("Taxi", 2015, "13/01/2023", "D 12 UK", 225000000, 75);
var taxi3 = new JuraganRental_1.Taxi("Taxi", 2020, "13/01/2023", "D 13 UK", 275000000, 90);
var jet1 = new JuraganRental_1.PrivateJet("Private Jet", 2015, "23/12/2022", "ID8089", 150000000, 12, 35000000, 15000000);
var jet2 = new JuraganRental_1.PrivateJet("Private Jet", 2018, "25/12/2022", "ID8099", 175000000, 15, 55000000, 25000000);
var vehicles = [
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
console.log('Change Price: ' + suv1.toString());
console.log("\nINFO SUMMARY:");
var summaryInfo = new summary(vehicles);
console.log('Total Vehicle\t\t: ' + summaryInfo.getTotalVehicle());
console.log('Total Vehicle (Filter)\t: ' + summaryInfo.getTotalVehicle("SUV"));
console.log('Total Income (SUV)\t: ' + summaryInfo.getTotalIncomeVehicle("SUV"));
console.log('Total Income (Taxi)\t: ' + summaryInfo.getTotalIncomeVehicle("Taxi"));
console.log('Total Income (Jet)\t: ' + summaryInfo.getTotalIncomeVehicle("Private Jet"));
console.log('TOTAL INCOME VEHICLE\t: ' + summaryInfo.getTotalIncomeVehicle());
