let userId: number | string | boolean;
userId = 123;
userId = "Hello";
userId = true;
console.log(userId);


function displayUserInfo(userId: string | number) {
    console.log(userId);
}

displayUserInfo("234");
displayUserInfo(234);