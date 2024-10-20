"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPayment = addPayment;
exports.getDetails = getDetails;
var payment = /** @class */ (function () {
    function payment(name) {
        this.name = name;
    }
    return payment;
}());
exports.default = payment;
function addPayment(val) {
    console.log(val);
}
function getDetails() { }
