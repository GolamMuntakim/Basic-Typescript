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
// class BottleMaker{
//     public name = "siam"
// }
// class MetalBottleMaker extends BottleMaker{
//     public metarial = "metal"
//     changeName(){
//         this.name = "some other name"
//     }
// }
// let b1 = new MetalBottleMaker()
// b1.changeName()
//optional properties class
// class User{
//     constructor(public readonly name:string){}
//     changeName(){
//         this.name = "hello"
//     }
// }
// let u1 = new User("siam")
// u1.changeName();
// class and object parameter property
// class User{
//     constructor(public name:string, public age: number, public gender?:string){}
// }
// let user = new User("siam", 24, "male")
//another way for perameter property 
// class peoples{
//     public name;
//     public age;
//     constructor(name:string, age:number){
//         this.name = name ;
//         this.age = age;
//     }
// }
// let people = new peoples("Arman", 18)
// classes and objects: Getters and setters:
// class User{
//     constructor(public _name:string, public age:number){}
//     getName(){
//         return this._name;
//     }
//     setName(value:string){
//         this._name = value;
//     }
// }
// let u1 = new User("siam", 24)
// static members
// class NodeJs{
//     static version = 1.5
//     static getRandomNumber(){
//         return Math.random()
//     }
// }
// classes and objects abstract classes
// class payment{
//     constructor(protected amount: number, protected account: number){}
//     isAmountValid(amount : number){
//         return this.amount > 0;
//     }
// }
// class pay extends payment{}
// introduction to function types
// const abcd = (name : string, cb: (value:string)=> void) =>{
//  cb("siam")
// }
// abcd("siam", (value:string)=>{
//     console.log(value)
// })
// optional  parameter in functions
function abcdef(name, age, gender) { }
abcdef("siam", 24, "male");
// default parameter in function
function abcd(name, age, gender) {
    if (gender === void 0) { gender = "not to be discloused"; }
    console.log(name, age, gender);
}
abcd("siam", 24, "male");
abcd("lagbaraq", 22);
