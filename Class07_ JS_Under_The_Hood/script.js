// There is a JSON file with students. Make a call to the file and get the following data from it:

// All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2
// Student emails of all female students with age between 20 and 30 years, ordered ascending
// Students full names of students above 40, ordered descending
// Count of students using google mail
// The average age of female students living in Skopje

let getAverageGradeHigherThanThree = (data) => {
  let averageGradeHigerThanThree = data.filter(
    (student) => student.averageGrade > 3
  );
  console.log(averageGradeHigerThanThree);
  return averageGradeHigerThanThree;
};

let getFemailsWithAverageGradeFive = (data) => {
  let femailsWithAverageGradeHigherThanFive = data.filter(
    (student) => student.gender === "Female" && student.averageGrade === 5
  );
  let femaileNamesWithAvgGradeFive = femailsWithAverageGradeHigherThanFive.map(
    (student) => student.firstName
  );
  console.log(femaileNamesWithAvgGradeFive);
};

let getAdultMalesFromSkopje = (data) => {
  let allAdultMales = data.filter(
    (male) => male.gender === "Male" && male.age > 18 && male.city === "Skopje"
  );
  console.log(allAdultMales);
};

let getFemaleAverageGradeWithAgeOverTwentyFour = (data) => {
  let womenAvgGradeOverTwentyFour = data.filter(
    (student) => student.gender === "Female" && student.age > 24
  );

  //   let womenAvgGradeOverTwentyFour1 = womenAvgGradeOverTwentyFour.filter(
  //     (student) => console.log(student.averageGrade)
  //   );
  console.log(
    womenAvgGradeOverTwentyFour.map(
      (student) =>
        `${student.firstName} has average grade ${student.averageGrade}`
    )
  );
};

function getData() {
  fetch(
    "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
  )
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      getAverageGradeHigherThanThree(data);
      getFemailsWithAverageGradeFive(data);
      getAdultMalesFromSkopje(data);
      getFemaleAverageGradeWithAgeOverTwentyFour(data);
    });
}

getData();
