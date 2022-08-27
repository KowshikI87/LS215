let gradeLetterObj = {
  A: [93, 100],
  B: [85, 92],
  C: [77, 84],
  D: [69, 76],
  E: [60, 68],
  F: [0, 59]
};

const EXAM_WEIGHT = 0.65;
const EXERCISE_WEIGHT = 0.35;

function generateClassRecordSummary(scores) {
  let studentSummary = calculateStudentsGrades(scores);
  let examSummary = calculateExamSummary(scores);
  return {studentGrades: calculateStudentsGrades(scores),
    exams: calculateExamSummary(scores)};
}

// eslint-disable-next-line max-lines-per-function
function calculateExamSummary(scores) {
  //initial values are set so they are overridden on first iteration (later on)
  let numOfExams = scores[Object.keys(scores)[0]].scores.exams.length;

  let examsData = [];
  for (let idx = 0; idx < numOfExams; idx++) {
    examsData.push({average: 0, minimum: 100, maximum: 0});
  }

  //go through each students --> use forEach method
  //go through the exams for a student (use index) and update
  //total, minimum, maximum for exam
  Object.keys(scores).forEach((curntStdnt) => {
    let curntStdntData = scores[curntStdnt];
    curntStdntData.scores.exams.forEach((examMark, index) => {
      examsData[index]['average'] += examMark;

      if (examMark < examsData[index]['minimum']) {
        examsData[index]['minimum'] = examMark;
      }

      if (examMark > examsData[index]['maximum']) {
        examsData[index]['maximum'] = examMark;
      }
    });
  });

  //Change average (which is total to actual average)
  let numStudents = Object.keys(scores).length;
  examsData.forEach(curntExamData => {
    curntExamData['average'] = (curntExamData['average'] / numStudents).toFixed(1);
  });

  return examsData;
}

function calculateStudentsGrades(scores) {
  return Object.keys(scores).map(studentName => {
    let totalExamScores = calculateArraySum(scores[studentName].scores.exams);

    let totalExerciseScores = calculateArraySum(scores[studentName].
      scores.exercises);

    let finalScore = ((totalExamScores / scores[studentName].
      scores.exams.length) * EXAM_WEIGHT) +
      (totalExerciseScores * EXERCISE_WEIGHT);

    return `${Math.round(finalScore)} (${returnGradeLetter(Math.round(finalScore))})`;
  });
}

function calculateArraySum(arr) {
  return arr.reduce((total, curntValue) => {
    return total + curntValue;
  }, 0);
}


function returnGradeLetter(score) {
  let grade = Object.keys(gradeLetterObj).find(gradeLetter => {
    if (score >= gradeLetterObj[gradeLetter][0] &&
      score <= gradeLetterObj[gradeLetter][1]) {
      return true;
    } else {
      return false;
    }
  });

  return grade;
}

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

console.log(generateClassRecordSummary(studentScores));
console.log("stop");

// // returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],