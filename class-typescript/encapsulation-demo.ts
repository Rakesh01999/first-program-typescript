// access-modifier: public, protected, readonly

class User {
    // properties, method, constructor
    public userName: string;
    public age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age;
    }

    display(): void {
        console.log(`userNmae: ${this.userName}, age: ${this.age}`);
    };
}


class Student extends User {
    private studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void {
        console.log(`userNmae: ${this.userName}, age: ${this.age}`);
    }

    setStudentId(studentId: number): void {
        this.studentId = studentId
    }

    getStudentId(){
        return this.studentId;
    }
}

let student1 = new Student("Rakesh", 36, 12);
student1.setStudentId(123234);
console.log(student1.getStudentId());
// student1.display();

let user1 = new User("robin", 23);
user1.userName = "Pinky";
// console.log(user1);
// user1.display()