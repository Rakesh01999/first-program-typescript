var users;
users = [];
var user1;
user1 = { userName: "Rakesh", userId: 200112 };
// console.log(user1);
var user2;
user2 = { userName: "Raihan" };
// console.log(user2);
var user3;
user3 = [{ userName: "Kashem" }, { userName: "Halim" }];
// console.log(user3);
var user4;
user4 = { userName: "Saimad" };
// console.log(user4);
users.push(user1);
users.push(user2);
console.log(users);
for (var key in users) {
    console.log(users[key]);
}
