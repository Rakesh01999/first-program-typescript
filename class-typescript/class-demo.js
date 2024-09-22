var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userNmae: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
// class object
// user1 - name: Rakesh Biswsas, age:25
// user2 - name: Rakesh Biswsas, age:31
var user1 = new User("Rakesh Biswas", 25);
user1.display();
var user2 = new User("Kamal Khan", 28);
user2.display();
