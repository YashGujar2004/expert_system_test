document.addEventListener('DOMContentLoaded', function () {
  const teachingProcessTable = document.getElementById('teaching-process-table')
  // Attach the event listener to the table for inputs in both rows
  teachingProcessTable.addEventListener('input', calculateTeachingPoints)

  function calculateTeachingPoints () {
    let totalPoints = 0
    let validRows = 0

    // Row 1
    let scheduledClassesRow1 = document.querySelector(
      'input[name="scheduledClasses1"]'
    ).value
    let heldClassesRow1 = document.querySelector(
      'input[name="heldClasses1"]'
    ).value
    let pointsCellRow1 = document.getElementsByClassName('.pointsEarned1')

    // Row 2
    let scheduledClassesRow2 = document.querySelector(
      'input[name="scheduledClasses2"]'
    ).value
    let heldClassesRow2 = document.querySelector(
      'input[name="heldClasses2"]'
    ).value
    let pointsCellRow2 = document.querySelector('#pointsEarned2')

    // Calculate points for Row 1 if data is valid
    if (scheduledClassesRow1 && heldClassesRow1) {
      let percentage1 = (heldClassesRow1 / scheduledClassesRow1) * 100
      let points1 = calculatePoints(percentage1)
      totalPoints += points1
      pointsCellRow1.textContent = points1
      validRows++
    } else {
      pointsCellRow1.textContent = '' // Clear if invalid input
    }

    // Calculate points for Row 2 if data is valid
    if (scheduledClassesRow2 && heldClassesRow2) {
      let percentage2 = (heldClassesRow2 / scheduledClassesRow2) * 100
      let points2 = calculatePoints(percentage2)
      totalPoints += points2
      pointsCellRow2.textContent = points2
      validRows++
    } else {
      pointsCellRow2.textContent = '' // Clear if invalid input
    }

    // Calculate and display average weightage
    let avgWeightageInput = document.querySelector(
      'input[name="teachingAverage"]'
    )
    let avgWeightageFinal = document.querySelector('input[name="summary_tp_1"]')
    let avgWeightage = validRows > 0 ? totalPoints / validRows : 0
    avgWeightageInput.value = avgWeightage.toFixed(2)
    avgWeightageFinal.value = avgWeightage.toFixed(2)
  }

  // Function to calculate points based on percentage
  function calculatePoints (percentage) {
    if (percentage >= 100) {
      return 20
    } else if (percentage >= 90) {
      return 18
    } else if (percentage >= 80) {
      return 14
    } else if (percentage >= 70) {
      return 10
    } else if (percentage >= 60) {
      return 6
    } else {
      return 0 // No points if less than 60%
    }
  }

  const studentFeedback = document.getElementById('teaching-process-table2')
  // Attach the event listener to the table for inputs in both rows
  studentFeedback.addEventListener('input', calculateStudentPoints)

  function calculateStudentPoints () {
    let totalPoints = 0
    let validRows = 0
    // Row 1
    let feedbackRow1 = document.querySelector(
      'input[name="feedbackAverage1"]'
    ).value

    // Row 2
    let feedbackRow2 = document.querySelector(
      'input[name="feedbackAverage2"]'
    ).value

    // Calculate points for Row 1 if data is valid
    if (feedbackRow1) {
      totalPoints = feedbackRow1
      validRows++
    } else {
      pointsCellRow1.textContent = '' // Clear if invalid input
    }

    // Calculate points for Row 2 if data is valid
    if (feedbackRow2) {
      totalPoints = feedbackRow2
      validRows++
    } else {
      pointsCellRow2.textContent = '' // Clear if invalid input
    }

    // Calculate and display average weightage
    let avgWeightageInput = document.querySelector(
      'input[name="feedbackAverage"]'
    )
    let avgWeightageFinal = document.querySelector('input[name="summary_sf_1"]')
    let avgWeightage = validRows > 0 ? totalPoints / validRows : 0
    avgWeightageInput.value = avgWeightage.toFixed(2)
    avgWeightageFinal.value = avgWeightage.toFixed(2)
  }

  // YAHA PROBLEMS AARHI HAI

  // const deptActivitytable = document.getElementById('teaching-process-table');
  // // Attach the event listener to the table for inputs in both rows
  // deptActivitytable.addEventListener('input', calculateDeptPoints);

  // function calculateDeptPoints() {
  //     let totalPoints = 0;
  //     let validRows = 0;
  //     // Row 1
  //     let deptActyRow1 = document.querySelector('input[name="deptCreditPoint1"]').value;

  //     // Row 2
  //     let deptActyRow2 = document.querySelector('input[name="deptCreditPoint2"]').value;

  //     // Calculate points for Row 1 if data is valid
  //     if (deptActyRow1) {
  //         totalPoints = deptActyRow1
  //         validRows++;
  //     } else {
  //         pointsCellRow1.textContent = ''; // Clear if invalid input
  //     }
  //     // Calculate points for Row 2 if data is valid
  //     if (feedbackRow2) {
  //         totalPoints = deptActyRow2;
  //         validRows++;
  //     } else {
  //         pointsCellRow2.textContent = ''; // Clear if invalid input
  //     }

  //     // Calculate and display average weightage
  //     let avgWeightageInput = document.querySelector('input[name="deptCreditPoint"]');
  //     let avgWeightageFinal = document.querySelector('input[name="summary_da_1"]');
  //     let avgWeightage = validRows >0 ? (totalPoints + validRows): 0;
  //     avgWeightageInput.value = avgWeightage.toFixed(2);
  //     avgWeightageFinal.value = avgWeightage.toFixed(2);
  // }
})
// two nested event listener

// document.addEventListener('DOMContentLoaded', function () {
//     const teachingProcessTable = document.getElementById('teaching-process-table');
//     const feedbackTable = document.getElementById('students-feedback-table');

//     // Attach one event listener to the document or table, and handle both calculations
//     document.addEventListener('input', function (event) {
//         calculateTeachingPoints();
//         calculateFeedbackAverage();
//     });

//     // Teaching Process Calculation
//     function calculateTeachingPoints() {
//         let rows = teachingProcessTable.querySelectorAll('tbody tr');
//         let totalPoints = 0;
//         let validRows = 0;

//         rows.forEach(row => {
//             let scheduledClasses = row.querySelector('input[name="scheduledClasses1"]').value;
//             let heldClasses = row.querySelector('input[name="heldClasses1"]').value;
//             let pointsCell = row.querySelector('.pointsEarned1');

//             if (scheduledClasses && heldClasses) {
//                 let percentage = (heldClasses / scheduledClasses) * 100;
//                 let points = 0;
//                 if (percentage >= 100) {
//                     points = 20;
//                 } else if (percentage >= 90) {
//                     points = 18;
//                 } else if (percentage >= 80) {
//                     points = 14;
//                 } else if (percentage >= 70) {
//                     points = 10;
//                 } else if (percentage >= 60) {
//                     points = 6;
//                 }

//                 totalPoints += points;
//                 pointsCell.textContent = points;
//                 validRows++;
//             } else {
//                 pointsCell.textContent = '';
//             }
//         });

//         let avgWeightageInput = document.querySelector('input[name="tp_avg_weightage"]');
//         let avgWeightage = validRows > 0 ? (totalPoints / validRows) : 0;
//         avgWeightageInput.value = avgWeightage.toFixed(2);
//     }

//     // Student Feedback Calculation
//     function calculateFeedbackAverage() {
//         let feedback1 = document.querySelector('input[name="feedbackAverage1"]').value;
//         let feedback2 = document.querySelector('input[name="feedbackAverage2"]').value;

//         let feedback1Value = parseFloat(feedback1) || 0;
//         let feedback2Value = parseFloat(feedback2) || 0;

//         let validFeedbackCount = 0;
//         if (feedback1) validFeedbackCount++;
//         if (feedback2) validFeedbackCount++;

//         let averageFeedback = validFeedbackCount > 0 ? (feedback1Value + feedback2Value) / validFeedbackCount : 0;

//         let feedbackAverageInput = document.querySelector('input[name="feedbackAverage"]');
//         feedbackAverageInput.value = averageFeedback.toFixed(2);
//     }
// });
