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

// let user1 = new User("Rakesh Biswas", 25);
// user1.display();

// let user2 = new User("Kamal Khan", 28);
// user2.display();

class Student extends User{
    studentId:number;

    constructor(userName: string, age: number, studentId:number){
        super(userName, age);
        this.studentId= studentId;
    }

    display(): void{
        console.log(`userNmae: ${this.userName}, age: ${this.age}, studetId:${this.studentId}`);
    }
}

let student1 = new Student("Rakesh", 36, 12);
let student2 = new Student("Salam", 26, 45);
student1.display();