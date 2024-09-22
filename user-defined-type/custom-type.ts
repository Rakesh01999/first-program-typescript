type User = { userName: string, userId: number };

let users: User[];
users = [];


let user1: User;
user1 = { userName: "Rakesh", userId: 200112 };
// console.log(user1);
users.push(user1);

let user2: User;
user2 = { userName: "Raihan", userId: 345 };
// console.log(user2);
users.push(user2);

let user3: User;
user3 = { userName: "Kashem" , userId: 566}; 
// console.log(user3);
users.push(user3);

let user4: User ;
user4 = { userName: "Saimad" , userId: 345 };
// console.log(user4);
users.push(user4);


// console.log(users);


type RequestType = "GET" | "POST";
let getRequest : RequestType ;
getRequest  = "GET";

function requestHandler(requestType: RequestType){
    console.log(requestType);
}
requestHandler("GET");