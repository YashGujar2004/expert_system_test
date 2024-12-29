document.addEventListener('DOMContentLoaded', function () {

    const subjectsByDepartment = {
        'CS': {
            'Data Structures': '310251',
            'Wb Technology': '310252',
            'Database Mgnt': '310241',
            'CN & Security': '310244',

        },
        'IT': {
            'Web Dev': '314452',
            'NetworkSecurity': '314451',
            'Cloud Computing': '314452',
            'OS' : '314442',
            'HCI' : '314444'
        },
        'AI&DS': {
            'DBMS': '310241',
            'CN': '317521',
            'Web Technology': '310252',
            'AI' : '310253',
            'Data Science' : '317529',
            'ANN' : '317531',
            'DSA': '213831'
        },
        'EnTC': {
            'Digital Coms': '304181',
            'Microwave Eng': '304183',
            'Signal Processn': '304192',
            'Power Devices' : '304194',
        },
        'Electrical': {
            'Power Systems': '303146',
            'Control Systems': '303147',
            'Electric Machines': '303142',
            'Industrial Mgnt' : '311121'
        },
        'Mechanical': {
            'Thermodynamics': '302041',
            'Fluid Mechanics': '302042',
            'Machine Design': '302043',
            'CAD' : '302050',
            'Transmission Sys' : '302051'
        },
        'Printing': {
            'Printing Network': '308282',
            'Graphic Design': '308287',
            'Print Quality': '308285',
            'Color Mgnt ': '308283',
            'Ink Technology' : '308290'
        }
    };

    // Function to populate subject dropdown
    function populateSubjects(departmentSelect, subjectSelect, subjectCodeInput) {
        const department = departmentSelect.value;
        subjectSelect.innerHTML = '<option value="">Select Subject</option>';
        subjectCodeInput.value = '';

        if (department in subjectsByDepartment) {
            for (let subject in subjectsByDepartment[department]) {
                const option = document.createElement('option');
                option.value = subject;
                option.textContent = subject;
                subjectSelect.appendChild(option);
            }
        }
    }

    // Function to set subject code 
    function setSubjectCode(departmentSelect, subjectSelect, subjectCodeInput) {
        const department = departmentSelect.value;
        const subject = subjectSelect.value;
        if (department in subjectsByDepartment && subject in subjectsByDepartment[department]) {
            subjectCodeInput.value = subjectsByDepartment[department][subject];
        } else {
            subjectCodeInput.value = '';
        }
    }


// Function to populate other tables
function populateOtherTables(rowNumber, values) {
    // Populate student feedback table
    document.querySelector(`input[name="feedbackSemester${rowNumber}"]`).value = values.semester;
    document.querySelector(`input[name="feedbackSubjectName${rowNumber}"]`).value = values.subjectName;
    document.querySelector(`input[name="feedbackSubjectCode${rowNumber}"]`).value = values.subjectCode;

    // Populate depart activity table
    document.querySelector(`input[name="deptSemester${rowNumber}"]`).value = values.semester;
    
    // Populate inst activity table
    document.querySelector(`input[name="instSemester${rowNumber}"]`).value = values.semester;

    // Populate result summary table
    document.querySelector(`input[name="resultSemester${rowNumber}"]`).value = values.semester;
    document.querySelector(`input[name="resultSubjectName${rowNumber}"]`).value = values.subjectName;
    document.querySelector(`input[name="resultSubjectCode${rowNumber}"]`).value = values.subjectCode;
}

// Set up event listeners for department and subject dropdowns
for (let i = 1; i <= 2; i++) {
    const semesterSelect = document.querySelector(`select[name="semester${i}"]`);
    const departmentSelect = document.querySelector(`select[name="department"]`);
    const subjectSelect = document.querySelector(`select[name="subjectName${i}"]`);
    const subjectCodeInput = document.querySelector(`input[name="subjectCode${i}"]`);

    departmentSelect.addEventListener('change', () => {
        populateSubjects(departmentSelect, subjectSelect, subjectCodeInput);
    });

    subjectSelect.addEventListener('change', () => {
        setSubjectCode(departmentSelect, subjectSelect, subjectCodeInput);
        populateOtherTables(i, {
            semester: semesterSelect.value,
            subjectName: subjectSelect.value,
            subjectCode: subjectCodeInput.value
        });
    });

    semesterSelect.addEventListener('change', () => {
        populateOtherTables(i, {
            semester: semesterSelect.value,
            subjectName: subjectSelect.value,
            subjectCode: subjectCodeInput.value
        });
    });
}

// Teaching Process table

    const teachingProcessTable = document.getElementById('teaching-process-table');
    
    teachingProcessTable.addEventListener('input', calculateTeachingPoints);

    function calculateTeachingPoints() {
        let totalPoints = 0;
        let validRows = 0;

        // Row 1
        let scheduledClassesRow1 = document.querySelector('input[name="scheduledClasses1"]').value;
        let heldClassesRow1 = document.querySelector('input[name="heldClasses1"]').value;
        let pointsCellRow1 = document.querySelector('.pointsEarned1');
        
        // Row 2
        let scheduledClassesRow2 = document.querySelector('input[name="scheduledClasses2"]').value;
        let heldClassesRow2 = document.querySelector('input[name="heldClasses2"]').value;
        let pointsCellRow2 = document.querySelector('#pointsEarned2');
        
        // Calculate points for Row 1 
        if (scheduledClassesRow1 && heldClassesRow1) {
            let percentage1 = (heldClassesRow1 / scheduledClassesRow1) * 100;
            let points1 = calculatePoints(percentage1);
            totalPoints += points1;
            pointsCellRow1.textContent = points1;
            validRows++;
        } else {
            pointsCellRow1.textContent = ''; 
        }

        // Calculate points for Row 2 
        if (scheduledClassesRow2 && heldClassesRow2) {
            let percentage2 = (heldClassesRow2 / scheduledClassesRow2) * 100;
            let points2 = calculatePoints(percentage2);
            totalPoints += points2;
            pointsCellRow2.textContent = points2;
            validRows++;
        } else {
            pointsCellRow2.textContent = '';   
        }

        // Calculate and display average weightage
        let avgWeightageInput = document.querySelector('input[name="teachingAverage"]');
        let avgWeightageFinal = document.querySelector('input[name="summary_tp_1"]');
        let avgWeightage = validRows > 0 ? (totalPoints / validRows) : 0;
        avgWeightageInput.value = avgWeightage.toFixed(2);
        avgWeightageFinal.value = avgWeightage.toFixed(2);
    }

    // Function to calculate points based on percentage
    function calculatePoints(percentage) {
        if (percentage >= 100) {
            return 20;
        } else if (percentage >= 90) {
            return 18;
        } else if (percentage >= 80) {
            return 14;
        } else if (percentage >= 70) {
            return 10;
        } else if (percentage >= 60) {
            return 6;
        } else {
            return 0; // No points if less than 60%
        }
    }
    
// Student Feedback Table

    const studentFeedbackTable = document.getElementById('student-feedback-table');
 
    studentFeedbackTable.addEventListener('input', calculateStudentPoints);

    function calculateStudentPoints() {
        // Row 1
        let feedbackRow1 = document.querySelector('input[name="feedbackAverage1"]').value;

        // Row 2
        let feedbackRow2 = document.querySelector('input[name="feedbackAverage2"]').value;
        
        let num1 = parseFloat(feedbackRow1) || 0.0;
        let num2 = parseFloat(feedbackRow2) || 0.0;

        // Calculate and display average weightage
        let avgWeightageInput = document.querySelector('input[name="feedbackAverage"]');
        let avgWeightageFinal = document.querySelector('input[name="summary_sf_1"]');
        //let avgWeightage = validRows > 0 ? ((num1 + num2)/2): 0;
        let avgWeightage = (num1 + num2)/2;
        avgWeightageInput.value = Math.round(avgWeightage.toFixed(2));
        avgWeightageFinal.value = avgWeightage.toFixed(2);
        // document.getElementById('feedbackAverage').textContent = avgWeightage;
    }

//Deparmental Activity Table

    const deptActivitytable = document.getElementById('dept-activity-table');
    deptActivitytable.addEventListener('input', calculateDeptPoints);

    function calculateDeptPoints() {

        let deptActyRow1 = document.querySelector('input[name="deptCreditPoint1"]').value;
        let deptActyRow2 = document.querySelector('input[name="deptCreditPoint2"]').value;
        let num1 = parseFloat(deptActyRow1) ||0.0;
        let num2 = parseFloat(deptActyRow2) ||0.0;

        // Calculate and display average weightage
        let avgWeightageInput = document.querySelector('input[name="deptCreditPoint"]');
        let avgWeightageFinal = document.querySelector('input[name="summary_da_1"]');
        // let avgWeightage = ((num1 + num2)/20) * 20 ; THIS ALSO GIVES THE SAME OUTPUT
        let avgWeightage = (num1 + num2);
        avgWeightageInput.value = avgWeightage.toFixed(2);
        avgWeightageFinal.value = avgWeightage.toFixed(2);
    }

// credit points to departmental options

// Define credit points for activities
const activityCreditPoints = {
    SSS: {
        'Student Club in charge': 10,
        'Sports': 10,
        'Training and Placement': 8,
        'Academic Cordinator': 10,
        'Antiragging Cordinator': 8,
        'Skill Hub': 8
    },
    APaD: {
        'Entrepreneurship cell': 8,
        'TECHFest': 10,
        'Campaigning': 8
    },
    ITA: {
        'Officer for Valuation': 8,
        'Institute Website': 8,
        'Online Counseling': 8,
        'MIS Monitoring': 6
    },
    ID: {
        'Campus Maintenance': 6,
        'Sponsored Projects': 8,
        'Alumni Association': 6
    }
};

// Event listener for department activity 1
document.getElementById('deptDomain1').addEventListener('change', function() {
    const selectedDomain = this.value;
    const activitySelect = document.getElementById('deptActivity1');
    
    // Clear previous activity options
    activitySelect.innerHTML = '<option value="">Select Activity</option>';
    
    const activities = activityCreditPoints[selectedDomain];
    
    // Populate the activity select dropdown
    if (activities) {
        Object.keys(activities).forEach(function(activity) {
            const option = document.createElement('option');
            option.value = activity;
            option.text = activity;
            activitySelect.appendChild(option);
        });
    }
});

// Event listener for department activity 1 to assign credits automatically
document.getElementById('deptActivity1').addEventListener('change', function() {
    const selectedDomain = document.getElementById('deptDomain1').value;
    const selectedActivity = this.value;
    
    const creditPoints = activityCreditPoints[selectedDomain][selectedActivity] || 0;

    // Assign credit points to the corresponding input field
    document.querySelector('input[name="deptCreditPoint1"]').value = creditPoints;
    calculateDeptPoints(); 
});

// Repeat for deptDomain2 and deptActivity2
document.getElementById('deptDomain2').addEventListener('change', function() {
    const selectedDomain = this.value;
    const activitySelect = document.getElementById('deptActivity2');
    
    activitySelect.innerHTML = '<option value="">Select Activity</option>';
    
    const activities = activityCreditPoints[selectedDomain];
    if (activities) {
        Object.keys(activities).forEach(function(activity) {
            const option = document.createElement('option');
            option.value = activity;
            option.text = activity;
            activitySelect.appendChild(option);
        });
    }
});

document.getElementById('deptActivity2').addEventListener('change', function() {
    const selectedDomain = document.getElementById('deptDomain2').value;
    const selectedActivity = this.value;
    
    const creditPoints = activityCreditPoints[selectedDomain][selectedActivity] || 0;

    document.querySelector('input[name="deptCreditPoint2"]').value = creditPoints;
    calculateDeptPoints(); 
});


//Institute Activities
const domainActivities = {
    SSS: ['Student Club in charge','Sports', 'Training and Placement','Academic Cordinator', 'Antiragging Cordinator','Skill Hub'],
    APaD: ['Entrepreneurship cell', 'TECHFest', 'Campaigning'],
    ITA: ['Officer for Valuation', 'Institute Website', 'Online Counseling', 'MIS Monitoring'],
    ID: ['Campus Maintenance', 'Sponsored Projects', 'Alumni Association']
};

document.getElementById('deptDomain1').addEventListener('change', function() {
    const selectedDomain = this.value;
    const activitySelect = document.getElementById('deptActivity1');
    
    // Clear previous activity options
    activitySelect.innerHTML = '<option value="">Select Activity</option>';
    
    // Get the activities for the selected domain
    const activities = domainActivities[selectedDomain];
    
    // Populate the activity select dropdown
    if (activities) {
        activities.forEach(function(activity) {
            const option = document.createElement('option');
            option.value = activity;
            option.text = activity;
            activitySelect.appendChild(option);
        });
    }
});
document.getElementById('deptDomain2').addEventListener('change', function() {
    const selectedDomain = this.value;
    const activitySelect = document.getElementById('deptActivity2');
    
    // Clear previous activity options
    activitySelect.innerHTML = '<option value="">Select Activity</option>';
    
    // Get the activities for the selected domain
    const activities = domainActivities[selectedDomain];
    
    // Populate the activity select dropdown
    if (activities) {
        activities.forEach(function(activity) {
            const option = document.createElement('option');
            option.value = activity;
            option.text = activity;
            activitySelect.appendChild(option);
        });
    }
});

// Institute table calculations
const instituteActivityCreditPoints = {
    'NCC/NSS activities involvement': 4,
    'Swachh Bharat Mission': 8,
    'Blood Donation Programmes': 10,
    'Medical/Health Camp Organization': 10,
    'Conduct of Yoga Classes': 8,
    'Unnat Bharat Abhiyan': 4,
    'Nation Building Activities': 2,
    'Women Empowerment Programmes': 6,
    'Donations': 2,
    'Tree Plantation': 2,
    'Technical education Awareness': 8,
    'Any other activity': 4
};

document.querySelector('select[name="instActivity1"]').addEventListener('change', function() {
    const selectedActivity = this.value;
    const creditPoints = instituteActivityCreditPoints[selectedActivity] || 0;
    console.log("Selected activity: ", selectedActivity, " | Assigned credit: ", creditPoints);
    document.querySelector('input[name="instCreditPoint1"]').value = creditPoints;
    calculateInstPoints();
});

document.querySelector('select[name="instActivity2"]').addEventListener('change', function() {
    const selectedActivity = this.value;
    const creditPoints = instituteActivityCreditPoints[selectedActivity] || 0;
    console.log("Selected activity: ", selectedActivity, " | Assigned credit: ", creditPoints);
    document.querySelector('input[name="instCreditPoint2"]').value = creditPoints;
    calculateInstPoints();
});

// Function to calculate total and average institute points
function calculateInstPoints() {
    let instCredRow1 = document.querySelector('input[name="instCreditPoint1"]').value;
    let instCredRow2 = document.querySelector('input[name="instCreditPoint2"]').value;

    let mynum1 = parseFloat(instCredRow1) || 0.0;
    let mynum2 = parseFloat(instCredRow2) || 0.0;

    let totalCredits = mynum1 + mynum2;
    let averageCredits = totalCredits / 2;

    document.querySelector('input[name="instCreditPoint"]').value = averageCredits.toFixed(2);
    document.querySelector('input[name="summary_ia_1"]').value = averageCredits.toFixed(2);
}

// Result Summary Table

    const resSummaryTable = document.getElementById('result-summary-table');
    // Attach the event listener to the table for inputs in both rows
    resSummaryTable.addEventListener('input', calculateresult);

    function calculateresult(){
        let totalPoints2 = 0;
        let validRows2 = 0;

        let registedRow1 = document.querySelector('input[name="studentsRegistered1"]').value;
        let passedRow1 = document.querySelector('input[name="studentsPassed1"]').value;
        let result1 = document.querySelector('.resultPercentage1');
        
        // Row 2
        let registedRow2 = document.querySelector('input[name="studentsRegistered2"]').value;
        let passedRow2 = document.querySelector('input[name="studentsPassed2"]').value;
        let result2 = document.querySelector('.resultPercentage2');

        // Calculate points for Row 1 
        if (passedRow1 && registedRow1) {
            let percentage1 = (passedRow1 / registedRow1) * 100;
            let points11 = calculaterespoints(percentage1);
            totalPoints2 += points11;
            result1.textContent = percentage1.toFixed(2);
            validRows2++;
        } else {
            result1.textContent = ''; 
        }

        // Calculate points for Row 2 
        if (passedRow2 && registedRow2) {
            let percentage2 = (passedRow2 / registedRow2) * 100;
            let points22 = calculaterespoints(percentage2);
            totalPoints2 += points22;
            result2.textContent = percentage2.toFixed(2);
            validRows2++;
        } else {
            result2.textContent = '';   
        }

        // Calculate and display average weightage
        let avgWeightageInput = document.querySelector('input[name="averageResult"]');
        
        let avgWeightage = validRows2 > 0 ? (totalPoints2 / validRows2) : 0;
        avgWeightageInput.value = Math.round(avgWeightage.toFixed(2));
        document.querySelector('input[name="summary_acr_1"]').value = avgWeightage.toFixed(2);
    }
    // Function to calculate points based on percentage
    function calculaterespoints(percentage) {
        if (percentage >= 96) {
            return 20;
        } else if (percentage >= 90) {
            return 18;
        } else if (percentage >= 80) {
            return 14;
        } else if (percentage >= 70) {
            return 10;
        } else if (percentage >= 55) {
            return 6;    
        } else{
            return 0;
        }
    }
// Contribution To Society Table

// const contibutionTable = document.querySelector('input[name="cs_credit_point"]');
// const summaryCsField = document.querySelector('input[name="summary_cs_1"]');
// contibutionTable.addEventListener('input', function() {
//     summaryCsField.value = parseFloat(this.value).toFixed(2);
// });

// Summary Table

    const summaryFields = [
        'summary_tp_1',    // Teaching Process
        'summary_sf_1',    // Students' feedback
        'summary_da_1',    // Departmental Activities
        'summary_ia_1',    // Institute Activities
        'summary_acr_1',   // ACR
        'summary_cs_1'     // Contribution to Society
    ];
    
    const totalField = document.querySelector('input[name="summary_total_1"]');
    
    function calculatefinal() {
        let total = 0;
        
        summaryFields.forEach(fieldName => {
            const field = document.querySelector(`input[name="${fieldName}"]`);
            const value = parseFloat(field.value) || 0.0;
            total += value;
        });
        
        totalField.value = total.toFixed(2);
    
     // Update the 10-point scale automatically
        const scaleField = document.querySelector('input[name="summary_scale_1"]');
       if (scaleField) {
        scaleField.value = (total / 10).toFixed(2);
        }
    }
    
    // Event listeners to all summary fields
    summaryFields.forEach(fieldName => {
        const field = document.querySelector(`input[name="${fieldName}"]`);
        field.addEventListener('input', calculatefinal);
    });
        
});

document.getElementById('printBtn').addEventListener('click', function() {
    var form = document.getElementById('myForm');
    
    if (form.checkValidity()) {
        window.print();
    } else {
        alert("Please fill out all required fields before printing.");
    }
});
