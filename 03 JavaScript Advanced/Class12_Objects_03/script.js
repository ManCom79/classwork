console.log("Classes");

class Academy {
  constructor(
    name,
    students,
    subjects,
    start,
    end,
    numberOfClasses,
    printStudents,
    printSubjects
  ) {
    this.name = name;
    this.students = students;
    this.subjects = subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = subjects.length * 10;
    this.printStudents = function () {
      for (let i = 0; i < this.students.length; i++) {
        console.log(`Student id_${i} is ${students[i]}`);
      }
    };
    this.printSubjects = function () {
      for (let i = 0; i < this.subjects.length; i++) {
        console.log(`Subject id_${i} is ${subjects[i]}`);
      }
    };
  }
}

const flightClub = new Academy(
  "Flight Club",
  ["John", "Jane", "Bob", "Julia"],
  ["Fluid Mechanics", "Dynamics"],
  Date.now().toString,
  "10.09.2024"
);

console.log(flightClub);

console.log(flightClub.numberOfClasses);
flightClub.printStudents();
flightClub.printSubjects();

class Subject {
  constructor(
    title,
    numberOfClasses,
    isElective,
    academy,
    students,
    overridaClasses
  ) {
    this.title = title;
    this.numberOfClasses = numberOfClasses;
    this.isElective = isElective;
    this.academy = academy;
    this.students = students;
    this.overridaClasses = overridaClasses;
  }
}
