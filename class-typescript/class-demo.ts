class User{
    // properties, method, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void{
        console.log(`userNmae: ${this.userName}, age: ${this.age}`);
    }
}

// class object
// user1 - name: Rakesh Biswsas, age:25
// user2 - name: Rakesh Biswsas, age:31

let user1 = new User("Rakesh Biswas", 25);
user1.display();

let user2 = new User("Kamal Khan", 28);
user2.display();