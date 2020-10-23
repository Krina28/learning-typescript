"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle1 = (function () {
    function Vehicle1(id, make) {
        this._id = id;
        this._make = make;
    }
    Vehicle1.prototype.start = function () {
        return "Vehicle with id: " + this._id + ", make as " + this._make + " stated..";
    };
    return Vehicle1;
}());
var FourWheeler1 = (function (_super) {
    __extends(FourWheeler1, _super);
    function FourWheeler1(id, make, model) {
        if (make === void 0) { make = "Honda"; }
        if (model === void 0) { model = "Civic"; }
        var _this = _super.call(this, id) || this;
        _this._make = make;
        _this._model = model;
        return _this;
    }
    FourWheeler1.prototype.start = function () {
        var bResult = _super.prototype.start.call(this);
        return bResult + ", model is " + this._model;
    };
    FourWheeler1.prototype.move = function () {
        return "Moving like a car";
    };
    return FourWheeler1;
}(Vehicle1));
