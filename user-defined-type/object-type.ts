let users: object[];
users = [];

let user1: { userName: string, userId: number };
user1 = { userName: "Rakesh", userId: 200112 };
// console.log(user1);

let user2: object;
user2 = { userName: "Raihan" };
// console.log(user2);

let user3: object[];
user3 = [{ userName: "Kashem" }, { userName: "Halim" }];
// console.log(user3);

let user4: { userName: string, userId?: number };
user4 = { userName: "Saimad" };
// console.log(user4);

users.push(user1);
users.push(user2);
console.log(users);

for (const key in users) {
    console.log(users[key]);
}