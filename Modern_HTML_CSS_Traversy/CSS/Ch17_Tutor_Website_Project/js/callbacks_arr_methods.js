const gradeExam = {studentExam} => {
    return `Grading ${studentExam.name}'s exam: ${studentExam.score}/100`;
};

const exams = [
    {name: 'Alex', score: 95},
    {name: 'Jordan', score: 87},
    {name: 'Taylor', score: 92},
];

// Create a map method statement
const gradeResults = exams.map(gradeExam);
console.info(gradeResults);
