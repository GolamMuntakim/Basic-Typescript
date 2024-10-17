// let  arr : [number , boolean] = [12, true]
// enum StatusCodes {
//     ABANDONED = "abandoned status code 500",
//     NOTFOUND = "not found status code 404"
// }
// StatusCodes.ABANDONED
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
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name) {
        this.name = name;
    }
    return BottleMaker;
}());
var n1 = new BottleMaker("siam");
n1.name = "arman";
var CakeMaker = /** @class */ (function () {
    function CakeMaker(name) {
        this.name = name;
    }
    return CakeMaker;
}());
var c1 = new CakeMaker("pasty");
// c1.name = "yammy" //show error
