// ES_6   2015
class Student {
    constructor(roll, name, add, course) { // constructor 
        this.roll = roll;
        this.name = name;
        this.add = add;
        this.course = course;
    }
}
let std1 = new Student(101, 'Bruhath', 'Virginia', 'Angular');
let std2 = new Student(102, 'tejaswi', 'Tenessee', 'Java');
console.log(std1);
console.log(std2);