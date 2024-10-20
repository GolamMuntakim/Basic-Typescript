// let  arr : [number , boolean] = [12, true]
// enum StatusCodes {
//     ABANDONED = "abandoned status code 500",
//     NOTFOUND = "not found status code 404"
// }
// StatusCodes.ABANDONED
function abcd(a, b) {
    if (typeof a === "string" && b === undefined) {
        console.log("siam");
    }
    if (typeof a === "string" && typeof b === "number") {
        return 123;
    }
    else
        throw new Error("something is wrong");
}
abcd("hey");
abcd("hey", 12);
