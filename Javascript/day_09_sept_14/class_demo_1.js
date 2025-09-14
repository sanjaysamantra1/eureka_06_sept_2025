function add(a, b) {
    console.log(a + b)
}
add(10, 20);

// ES_5  <2015
function Student(roll, name, add, course) { // constructor / class
    this.roll = roll;
    this.name = name;
    this.add = add;
    this.course = course;
}
let std1 = new Student(101, 'Bruhath', 'Virginia', 'Angular');
let std2 = new Student(102, 'tejaswi', 'Tenessee', 'Java');
console.log(std1, std2);