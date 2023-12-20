let math = 10;
let english = 6;
let science = 8;
let sport = 9;
let chemistry = 6;

document.getElementById("mathGrade").innerText = math;
document.getElementById("engGrade").innerText = english;
document.getElementById("sciGrade").innerText = science;
document.getElementById("sportGrade").innerText = sport;
document.getElementById("chemGrade").innerText = chemistry;
document.getElementById("studentName").innerText = "Bob Bobsky";

let avg = (math + english + science + sport + chemistry) / 5;
console.log(avg);

if (avg >= 8) {
  alert("CONGRATULATIONS!!! You've passed the semester!");
} else {
  alert("SORRY!!! You've failed the semester!");
}
