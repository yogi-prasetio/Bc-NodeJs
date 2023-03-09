"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.PrivateJet = exports.Taxi = exports.Suv = exports.Vehicles = void 0;
var Vehicles = /** @class */ (function () {
    function Vehicles(vehicleType, year, transactionDate) {
        this.vehicleType = vehicleType;
        this.year = year;
        this.transcationDate = transactionDate;
        this.total = 0;
    }
    return Vehicles;
}());
exports.Vehicles = Vehicles;
var Suv = /** @class */ (function (_super) {
    __extends(Suv, _super);
    function Suv(vehicleType, year, transactionDate, noPol, seat) {
        var _this = _super.call(this, vehicleType, year, transactionDate) || this;
        _this.noPol = noPol;
        _this.price = 350000000;
        _this.tax = _this.price / 10;
        _this.seat = seat;
        _this.rent = 500000;
        _this.driver = 150000;
        _this.total = _this.rent + _this.driver;
        return _this;
    }
    Suv.prototype.setPrice = function (price) {
        this.price = price;
    };
    Suv.prototype.getPrice = function () {
        return this.price;
    };
    Suv.prototype.getTotal = function () {
        return this.total;
    };
    Suv.prototype.toString = function () {
        return "".concat(this.noPol, " | ").concat(this.vehicleType, " | ").concat(this.price, " | ").concat(this.rent, " + ").concat(this.driver, " | ").concat(this.getTotal());
    };
    return Suv;
}(Vehicles));
exports.Suv = Suv;
var Taxi = /** @class */ (function (_super) {
    __extends(Taxi, _super);
    function Taxi(vehicleType, year, transactionDate, noPol, price, order) {
        var _this = _super.call(this, vehicleType, year, transactionDate) || this;
        _this.noPol = noPol;
        _this.price = price;
        _this.tax = _this.price / 10;
        _this.seat = 4;
        _this.order = order;
        _this.orderPerKm = 4500;
        _this.total = _this.order * _this.orderPerKm;
        return _this;
    }
    Taxi.prototype.setPrice = function (price) {
        this.price = price;
    };
    Taxi.prototype.getPrice = function () {
        return this.price;
    };
    Taxi.prototype.getTotal = function () {
        return this.total;
    };
    Taxi.prototype.toString = function () {
        return "".concat(this.noPol, " | ").concat(this.vehicleType, " | ").concat(this.price, " | ").concat(this.order, " x ").concat(this.orderPerKm, " | ").concat(this.getTotal());
    };
    return Taxi;
}(Vehicles));
exports.Taxi = Taxi;
var PrivateJet = /** @class */ (function (_super) {
    __extends(PrivateJet, _super);
    function PrivateJet(vehicleType, year, transactionDate, noPol, price, seat, rent, driver) {
        var _this = _super.call(this, vehicleType, year, transactionDate) || this;
        _this.noPol = noPol;
        _this.price = price;
        _this.tax = _this.price / 10;
        _this.seat = seat;
        _this.rent = rent;
        _this.driver = driver;
        _this.total = _this.rent + _this.driver;
        return _this;
    }
    PrivateJet.prototype.setPrice = function (price) {
        this.price = price;
    };
    PrivateJet.prototype.getPrice = function () {
        return this.price;
    };
    PrivateJet.prototype.getTotal = function () {
        return this.total;
    };
    PrivateJet.prototype.toString = function () {
        return "".concat(this.noPol, " | ").concat(this.vehicleType, " | ").concat(this.price, " | ").concat(this.rent, " + ").concat(this.driver, " | ").concat(this.getTotal());
    };
    return PrivateJet;
}(Vehicles));
exports.PrivateJet = PrivateJet;
