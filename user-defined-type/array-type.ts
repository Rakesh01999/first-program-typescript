// let userNames :string[] ; // Array Declaration
let userNames: Array<string>; //Array Declaration
userNames = ['karim', 'rahim', 'tamal'];

userNames.sort();
console.log(userNames);
console.log(userNames[0]);

let multipleTypes: (string | number)[];
multipleTypes = [12, "34"];
console.log(multipleTypes);