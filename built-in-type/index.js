// built-in data type: number, string , boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var isActivated;
userId = 101;
firstName = "Rakesh";
lastName = " Biswas";
isActivated = true;
var fullName = firstName.concat(lastName);
// console.log(userId);
// console.log(`Your Id:${userId}, userName:${fullName}, account activated:${isActivated}`);
console.log(fullName.split(" "));
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
// console.log(userId.toLowerCase()); // show error for ts , but in js no error
function display() {
    // function display(){
    console.log("Hi  I am display");
}
display();
