let result = document.getElementById("result");
let Grade = document.getElementById("grade");

function calculateGrade() {
    let grade = parseFloat(Grade.value);
    let letterGrade;
    
    if (grade >= 90) {
        letterGrade = "A";
    } else if (grade >= 80) {
        letterGrade = "B";
    } else if (grade >= 70) {
        letterGrade = "C";
    } else if (grade >= 60) {
        letterGrade = "D";
    } else {
        letterGrade = "F";
    }

    result.innerHTML = `Your letter grade is ${letterGrade}.`;
}


