abstract class User {
    // properties, method, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    abstract display(): void ;
}


class Student extends User {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void{
        console.log(`userNmae: ${this.userName}, age: ${this.age}`);
    }
}

let student1 = new Student("Rakesh", 36, 12);
student1.display();
