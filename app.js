// let  arr : [number , boolean] = [12, true]
// enum StatusCodes {
//     ABANDONED = "abandoned status code 500",
//     NOTFOUND = "not found status code 404"
// }
// StatusCodes.ABANDONED
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
// interface user {
//     name : string,
//     age : number,
//     profession : string,
//     gender? : string
// }
// const getUser = (obj:user) =>{}
// getUser({
//     name : "siam",
//     age : 24,
//     profession: "student"
// })
// interface User {
//     name : string,
//     email : string,
//     password : string
// }
// interface Admin extends User{
//     admin : boolean
// }
// const admin = (obj:Admin) =>{}
// type sankhya = number;
// let a: sankhya; 
// let a: string | number | null
// a="siam"
// type arg = string | null;
// function abcd(obj:arg){
// }
// intersection type 
// classes and objects
// class Device{
//     name = "lg";
//     price = 12000;
//     category = "digial"
// }
// let d1 = new Device()
// let d2 = new Device()
// class HumanMaker{
//     age = 0;
//     constructor(public name:string, public isHandsome: boolean){}
// }
// new HumanMaker("siam", false)
// class BottleMaker{
//     constructor(public brand:string,public price:number,public color:string, public material:string){}
// }
// let b1 = new BottleMaker("Milton", 1200, "yellow", "metal")
// class Music{
//     constructor(public name : string, public artist : string, public thumbnail : string = "", ){
//         if(!thumbnail){
//             this.thumbnail = "something.jpg"
//         }
//     }
// }
// let me = new Music("ok", "siam", "", );
// class abcd{
//     name = "siam";
//     changeName(){
//         this.name
//     }
// }
// class BottleMaker{
//     constructor(public name : string){
//         this.name = name;
//     }
// }
// let name1 = new BottleMaker("siam")
// public and private concept
// class BottleMaker{
//     constructor(public name : string){}
// }
// let n1 = new BottleMaker("siam");
// n1.name = "arman"
// class CakeMaker{
//     constructor(private name : string){}
// }
// let c1 = new CakeMaker("pasty");
// c1.name = "yammy" //show error
// class and object access protected modifier
var BottleMaker = /** @class */ (function () {
    function BottleMaker() {
        this.name = "siam";
    }
    return BottleMaker;
}());
var MetalBottleMaker = /** @class */ (function (_super) {
    __extends(MetalBottleMaker, _super);
    function MetalBottleMaker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.metarial = "metal";
        return _this;
    }
    MetalBottleMaker.prototype.changeName = function () {
        this.name = "some other name";
    };
    return MetalBottleMaker;
}(BottleMaker));
var b1 = new MetalBottleMaker();
b1.changeName();
