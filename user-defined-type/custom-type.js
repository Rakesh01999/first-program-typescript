var users;
users = [];
var user1;
user1 = { userName: "Rakesh", userId: 200112 };
// console.log(user1);
users.push(user1);
var user2;
user2 = { userName: "Raihan", userId: 345 };
// console.log(user2);
users.push(user2);
var user3;
user3 = { userName: "Kashem", userId: 566 };
// console.log(user3);
users.push(user3);
var user4;
user4 = { userName: "Saimad", userId: 345 };
// console.log(user4);
users.push(user4);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
