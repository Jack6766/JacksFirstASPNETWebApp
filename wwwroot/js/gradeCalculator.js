function calculateGrades() {
    // Define the variables
    var assignmentGrade = parseFloat(document.getElementById("assignments").value);
    var groupProjGrade = parseFloat(document.getElementById("groupProjects").value);
    var quizGrade = parseFloat(document.getElementById("quizzes").value);
    var examGrade = parseFloat(document.getElementById("exams").value);
    var intexGrade = parseFloat(document.getElementById("intex").value);

    // Assign each grade a percentatge total
    var assignmentGradeCalc = assignmentGrade * .5;
    var groupProjGradeCalc = groupProjGrade * .1;
    var quizGradeCalc = quizGrade * .1;
    var examGradeCalc = examGrade * .2;
    var intexGradeCalc = intexGrade * .1;

    // Calculate the total from all the grades
    var gradeTot = assignmentGradeCalc + groupProjGradeCalc + quizGradeCalc + examGradeCalc
        + intexGradeCalc;
    document.getElementById('total').value = gradeTot;

    // Equate the percentage total to a letter grade
    if (gradeTot >= 94) {
        document.getElementById("letter").value = "A";
    }

    else if (gradeTot >= 90 && gradeTot <= 93) {
        document.getElementById("letter").value = "A-";
    }

    else if (gradeTot >= 87 && gradeTot <= 89) {
        document.getElementById("letter").value = "B+";
    }

    else if (gradeTot >= 84 && gradeTot <= 86) {
        document.getElementById("letter").value = "B";
    }

    else if (gradeTot >= 80 && gradeTot <= 83) {
        document.getElementById("letter").value = "B-";
    }

    else if (gradeTot >= 77 && gradeTot <= 79) {
        document.getElementById("letter").value = "C+";
    }

    else if (gradeTot >= 74 && gradeTot <= 76) {
        document.getElementById("letter").value = "C";
    }

    else if (gradeTot >= 70 && gradeTot <= 73) {
        document.getElementById("letter").value = "C-";
    }

    else if (gradeTot >= 67 && gradeTot <= 69) {
        document.getElementById("letter").value = "D+";
    }

    else if (gradeTot >= 64 && gradeTot <= 66) {
        document.getElementById("letter").value = "D";
    }

    else if (gradeTot >= 60 && gradeTot <= 63) {
        document.getElementById("letter").value = "D-";
    }

    else {
        document.getElementById("letter").value = "F";
    }
}