let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateClassRecordSummary(scores) {
  let studentGrades = [];
  let examGrades = [];

  Object.values(scores).forEach(student => {
    let examScore = computeAverage(student.scores.exams);
    let exercises = (student.scores.exercises.reduce((sum, grade) => sum + grade));
    let totalScore = Math.round(examScore * 0.65 + exercises * 0.35);
    let finalGrade = `${totalScore} (${computeLetterGrade(totalScore)})`;

    studentGrades.push(finalGrade);
    examGrades.push(student.scores.exams);
  });

  let examInfo = computeExamInfo(examGrades);

  return {
    studentGrades,
    exams: examInfo,
  };
}

function computeAverage(scores) {
  return (scores.reduce((total, number) => total + number) / scores.length);
}

function computeLetterGrade(score) {
  if (score >= 93) {
    return 'A';
  } else if (score >= 85) {
    return 'B';
  } else if (score >= 77) {
    return 'C';
  } else if (score >= 69) {
    return 'D';
  } else if (score >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function computeExamInfo(grades) {
  let result = [];

  for (let i = 0; i < grades[0].length; i += 1) {
    let gradesForTest = [];
    grades.forEach(student => {
      gradesForTest.push(student[i]);
    });

    result.push({
      average: (computeAverage(gradesForTest)),
      minimum: Math.min(...gradesForTest),
      maximum: Math.max(...gradesForTest),
    });
  }
  
  return result;
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }