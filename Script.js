<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> APPRAISAL AND 360° FEEDBACK FORM </title>
    <link rel="stylesheet" href="myCss.css">
    <script src="Script.js" defer></script>
</head>
<body>
<form  id="myForm">
    <div class="img">
        <img src="img2.jpg" alt="image not found" class="imgtag">
    </div>
    <br>
    <div class="form-border">
    <h1 id="hello">APPRAISAL AND 360° FEEDBACK FORM</h1>
    <br>
    <div class="section-header">SECTION A</div>
    <br>
    <div class="form-group">
        <label for="name">Name <span class="required">*</span></label>
        <input type="text" id="name" name="name" required>
    </div>
    <div class="form-group">
        <label for="designation">Designation <span class="required">*</span></label>
        <input type="text" id="designation" name="designation" required>
    </div>
    <div class="form-group">
        <label for="department">Department <span class="required">*</span></label>
        <select name="department" id="department" required>
            <option value="">Select Department</option>
            <option value="CS">CS</option>
            <option value="IT">IT</option>
            <option value="AI&DS">AI&DS</option>
            <option value="EnTC">EnTC</option>
            <option value="Electrical">Electrical</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Printing">Printing</option>
        </select>
    </div>
    <!-- <div class="form-group">
        <label for="year">Year <span class="required">*</span></label>
        <input type="number" id="year" name="year" min="1" max="4" required>
    </div> -->

    <div class="form-group">
        <label for="academicYear">Academic Year <span class="required">*</span></label>
        <input type="text" id="academicYear" name="academicYear" required>
    </div>
</div>
 <br>
 <br>
<div class="form-border" >
    <div class="section-header">A. Teaching Process (Max Point 20)</div>
    <p><em>Note: 10 Credit point for each semester</em></p>
    <table id="teaching-process-table">
        <tr>
            <th>S. No.</th>
            <th>Semester <span class="required">*</span></th>
            <th>Subject Name <span class="required">*</span></th>
            <th>Subject Code <span class="required">*</span></th>
            <th>No. of Scheduled Classes <span class="required">*</span></th>
            <th>No. of actually held classes <span class="required">*</span></th>
            <th>Points earned</th>
            <th>Supporting Document Index No.</th>
        </tr>
        <tr>
            <td>1</td>
            <td>
                <select name="semester1" id="semester1" required>
                    <option value="">Select Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </td>
            <td>
            <select name="subjectName1" id="subjectName1" required>
                <option value="">Select Subject</option>
            </select></td>
            <td><input type="text" name="subjectCode1" readonly required></td>
            <td><input type="number" name="scheduledClasses1" required></td>
            <td><input type="number" name="heldClasses1" required></td>
            <td class ="pointsEarned1"></td>
            <td><input type="text" name="documentIndex1"></td>
        </tr>
        <tr>
            <td>2</td>
            <td>
                <select name="semester2" id="semester2" required>
                    <option value="">Select Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </td>
            <td>
                <select name="subjectName2" id="subjectName2" required>
                    <option value="">Select Subject</option>
                </select>
            </td>
            <td><input type="text" name="subjectCode2" readonly required></td>
            <td><input type="number" name="scheduledClasses2"required></td>
            <td><input type="number" name="heldClasses2"required></td>
            <td id = "pointsEarned2" ></td>
            <td><input type="text" name="documentIndex2"></td>
        </tr>
    </table>

    <div class="form-group">
        <label for="teachingAverage">Average Weightage out of 20 Points:</label>
        <input type="number" name="teachingAverage" > 
        <!--<min="0" max="20" step="0.1" required>--> 
    </div>

</div>
<br>
 <br>
<div class="form-border" >
    <div class="section-header">B. Students' feedback (Max Point 20)</div>
    <p><em>Note: 10 Credit point for each sem. & min.70% students data</em></p>

    <table id="student-feedback-table">
        <tr>
            <th>S. No.</th>
            <th>Semester <span class="required">*</span></th>
            <th>Subject Name <span class="required">*</span></th>
            <th>Subject Code <span class="required">*</span></th>
            <th>Average Student feedback on the scale of 20 <span class="required">*</span></th>
            <th>Supporting Document Index No.</th>
        </tr>
            <tr>
                <td>1</td>
                <td><input type="text" name="feedbackSemester1" readonly required></td>
                <td><input type="text" name="feedbackSubjectName1" readonly required></td>
                <td><input type="text" name="feedbackSubjectCode1" readonly required></td>
                <td><input type="number" name="feedbackAverage1" min="0" max="20" required></td>
                <td><input type="text" name="feedbackDocumentIndex1"></td>
            </tr>
            <tr>
                <td>2</td>
                <td><input type="text" name="feedbackSemester2"readonly required></td>
                <td><input type="text" name="feedbackSubjectName2"readonly required></td>
                <td><input type="text" name="feedbackSubjectCode2"readonly required></td>
                <td><input type="number" name="feedbackAverage2" min="0" max="20" required></td>
                <td><input type="text" name="feedbackDocumentIndex2"></td>
            </tr>
    </table>
    <div class="form-group">
        <label for="feedbackAverage">Average Weightage out of 20 Points:</label>
        <input type="number" name="feedbackAverage">
    </div>
</div>
<br>
 <br>
<div class="form-border" >
    <form id="appraisalForm">
      
        <div class="section-header">C. Departmental Activities (Max Credit 20)</div>
        <p><em>Note: 10 Credit point for each semester</em></p>

    <table id="dept-activity-table">
            <tr>
                <th>S. No.</th>
                <th>Semester <span class="required">*</span></th>
                <th>Domain<span class="required">*</span></th>
                <th>Activity <span class="required">*</span></th>
                <th>Credit Point <span class="required">*</span></th>
                <th>Criteria </th>
                <th>Supporting Document Index No.</th>
            </tr>
            <tr>
                <td>1</td>
                <td><input type="text" name="deptSemester1" readonly required></td>
                <!-- <td><input type="text" name="deptActivity1"required></td> -->
                <td>
                    <select id="deptDomain1" name="deptDomain1">
                    <option value="">Select Domain</option>
                    <option value="SSS">Student Support Services</option>
                    <option value="APaD">Academic Development</option>
                    <option value="ITA">IT Activities</option>
                    <option value="ID">Inistitutional Development</option>
                    </select></td>
                    <td>
                        <select id="deptActivity1" name="deptActivity1">
                            <option value="">Select Activity</option>
                        </select>
                    </td>    
                <td><input type="number" name="deptCreditPoint1"required></td>
                <td><input type="text" name="deptCriteria1" min="0" max="10" ></td>
                <td><input type="text" name="deptDocumentIndex1"></td>
            </tr>
            <tr>
                <td>2</td>
                <td><input type="text" name="deptSemester2" readonly required></td>
                <td>
                    <select id="deptDomain2" name="deptDomain2">
                    <option value="">Select Domain</option>
                    <option value="SSS">Student Support Services</option>
                    <option value="APaD">Academic Development</option>
                    <option value="ITA">IT Activities</option>
                    <option value="ID">Inistitutional Development</option>
                    </select></td>
                    <td>
                        <select id="deptActivity2" name="deptActivity2">
                            <option value="">Select Activity</option>
                        </select>
                    </td>
                <td><input type="number" name="deptCreditPoint2" min="0" max="10" required></td>
                <td><input type="text" name="deptCriteria2"></td>
                <td><input type="text" name="deptDocumentIndex2"></td>
            </tr>
        </table>
        <div class="form-group">
            <label for="deptCreditPoint">Average Weightage out of 20 Points:</label>
            <input type="number" name="deptCreditPoint">
        </div>
    </div>
<br>
<br>
    <div class="form-border" >
        <div class="section-header">D. Institute Activities (Max Credit 10)</div>
        <p><em>Note: 5 Credit point for each semester</em></p>

    <table id="inst-activity-table">
            <tr>
                <th>S. No.</th>
                <th>Semester <span class="required">*</span></th>
                <th>Activity <span class="required">*</span></th>
                <th>Credit Point <span class="required">*</span></th>
                <th>Criteria</th>
                <th>Supporting Document Index No.</th>
            </tr>
            <tr>
                <td>1</td>
                <td><input type="text" name="instSemester1" readonly required></td>
                <td>
                    <select id="instActivity1" name="instActivity1">
                    <option value="">Select Activity</option>
                    <option value="NCC/NSS activities involvement">NCC/NSS activities involvement</option>
                    <option value="Swachh Bharat Mission">Swachh Bharat Mission</option>
                    <option value="Blood Donation Programmes">Blood Donation Programmes</option>
                    <option value="Medical/Health Camp Organization">Medical/Health Camp Organization</option>
                    <option value="Conduct of Yoga Classes">Conduct of Yoga Classes</option>
                    <option value="Unnat Bharat Abhiyan">Unnat Bharat Abhiyan</option>
                    <option value="Nation Building Activities">Nation Building Activities</option>
                    <option value="Women Empowerment Programmes">Women Empowerment Programmes</option>
                    <option value="Donations">Donations</option>
                    <option value="Tree Plantation">Tree Plantation</option>
                        <option value="Technical education Awareness">Technical education Awareness</option>
                        <option value="Any other activity">Any other activity</option>
                    </select></td>
                <td><input type="number" name="instCreditPoint1" min="0" max="10" required></td>
                <td><input type="text" name="instCriteria1"></td>
                <td><input type="text" name="instDocumentIndex1"></td>
            </tr>
            <tr>
                <td>2</td>
                <td><input type="text" name="instSemester2"readonly required></td>
                <td>
                    <select id="instActivity2" name="instActivity2">
                    <option value="">Select Activity</option>
                    <option value="NCC/NSS activities involvement">NCC/NSS activities involvement</option>
                    <option value="Swachh Bharat Mission">Swachh Bharat Mission</option>
                    <option value="Blood Donation Programmes">Blood Donation Programmes</option>
                    <option value="Medical/Health Camp Organization">Medical/Health Camp Organization</option>
                    <option value="Conduct of Yoga Classes">Conduct of Yoga Classes</option>
                    <option value="Unnat Bharat Abhiyan">Unnat Bharat Abhiyan</option>
                    <option value="Nation Building Activities">Nation Building Activities</option>
                    <option value="Women Empowerment Programmes">Women Empowerment Programmes</option>
                    <option value="Donations">Donations</option>
                    <option value="Tree Plantation">Tree Plantation</option>
                    <option value="Technical education Awareness">Technical education Awareness</option>
                    <option value="Any other activity">Any other activity</option>
                    </select></td>
                <td><input type="number" name="instCreditPoint2" min="0" max="10" required></td>
                <td><input type="text" name="instCriteria2" ></td>
                <td><input type="text" name="instDocumentIndex2"></td>
            </tr>
        </table>
        <div class="form-group"></div>
            <label for="instCreditPoint">Average Weightage out of 10 Points:</label>
            <input type="number" name="instCreditPoint">
        </div>
    </div>
    <br>
    <br>

    <div class="form-border">
        <div class="section-header">E. ACR maintained at institute level (Max Credit 20)</div>
        
        <h3>Result (Max 10 Credit Point)</h3>
    <table>
            <tr>
                <th>Category</th>
                <th>Extraordinary</th>
                <th>Excellent</th>
                <th>Very Good</th>
                <th>Good</th>
                <th>Satisfactory</th>
                <th>Poor</th>
            </tr>
            <tr>
                <td>Points</td>
                <td>10</td>
                <td>9</td>
                <td>8</td>
                <td>7</td>
                <td>5</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Result %</td>
                <td>100-96%</td>
                <td>95-90%</td>
                <td>89-80%</td>
                <td>79-70%</td>
                <td>69-55%</td>
                <td>Below 55%</td>
            </tr>
        </table>

        <h4>Result Summary</h4>
    <table id="result-summary-table">
            <tr>
                <th>S. No.</th>
                <th>Semester <span class="required">*</span></th>
                <th>Subject Name <span class="required">*</span></th>
                <th>Subject Code <span class="required">*</span></th>
                <th>No. of Students Registered <span class="required">*</span></th>
                <th>No. of Students Passed <span class="required">*</span></th>
                <th>Result %</th>
            </tr>
            <tr>
                <td>1</td>
                <td><input type="text" name="resultSemester1"readonly required></td>
                <td><input type="text" name="resultSubjectName1"readonly required></td>
                <td><input type="text" name="resultSubjectCode1"readonly required></td>
                <td><input type="number" name="studentsRegistered1"required></td>
                <td><input type="number" name="studentsPassed1"required></td>
                <td class="resultPercentage1"></td>
            </tr>
            <tr>
                <td>2</td>
                <td><input type="text" name="resultSemester2"readonly required></td>
                <td><input type="text" name="resultSubjectName2"readonly required></td>
                <td><input type="text" name="resultSubjectCode2"readonly required></td>
                <td><input type="number" name="studentsRegistered2"required></td>
                <td><input type="number" name="studentsPassed2"required></td>
                <td class="resultPercentage2"></td>
            </tr>
        </table>
</div>
<br>
<br>

<div class="form-border">
        <h3>Research (Max 10 Credit Point)</h3>
        <h4>Research Publication Summary</h4>
    <table id="research-table">
            <tr>
                <th>Category</th>
                <th>SCI <span class="required">*</span></th>
                <th>SCI-Extended <span class="required">*</span></th>
                <th>Scopus <span class="required">*</span></th>
                <th>Scopus Indexed / WOS <span class="required">*</span></th>
                <th>Other <span class="required">*</span></th>
            </tr>
            <tr>
                <td>Marks (per unit)</td>
                <td>4</td>
                <td>3</td>
                <td>2</td>
                <td>1.5</td>
                <td>1</td>
            </tr>
            <tr>
                <td>No. of Papers</td>
                <td><input type="number" name="sciPapers"required></td>
                <td><input type="number" name="sciExtendedPapers"required></td>
                <td><input type="number" name="scopusPapers"required></td>
                <td><input type="number" name="scopusIndexedPapers"required></td>
                <td><input type="number" name="otherPapers" required></td>
            </tr>
        </table>

        <div class="form-group">
            <label for="averageResult">Average Weightage out of 20 Points:</label>
            <input type="number" name="averageResult" > 
        </div>
        <div class="section-header">F. Contribution to Society (Max Credit 10)</div>
        <br>
    <table id = "contribution-table">
        <thead>
            <tr>
                <th>S. No.</th>
                <th>Semester <span class="required">*</span></th>
                <th>Activity <span class="required">*</span></th>
                <th>Credit Point <span class="required">*</span></th>
                <th>Criteria</th>
                <th>Enclosure No</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td><input type="text" name="cs_semester"required></td>
                <td><input type="text" name="cs_activity"required></td>
                <td><input type="text" name="cs_credit_point"required></td>
                <td><input type="text" name="cs_criteria"></td>
                <td><input type="text" name="cs_enclosure_no"></td>
            </tr>
        </tbody>
    </table>
</div>
<br>
<br>
<div class="form-border">
    <h2>Summary</h2>
    <table>
        <thead>
            <tr>
                <th>Summary</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>A. Teaching Process (Max Points 20)</td>
                <td><input type="text" name="summary_tp_1"></td>
               
            </tr>
            <tr>
                <td>B. Students' feedback (Max Points 20)</td>
                <td><input type="text" name="summary_sf_1"></td>
                <!-- <td><input type="text" name="summary_sf_2"></td>
                <td><input type="text" name="summary_sf_3"></td> -->
            </tr>
            <tr>
                <td>C. Departmental Activities (Max Points 20)</td>
                <td><input type="text" name="summary_da_1"></td>
                <!-- <td><input type="text" name="summary_da_2"></td>
                <td><input type="text" name="summary_da_3"></td> -->
            </tr>
            <tr>
                <td>D. Institute Activities (Max Points 10)</td>
                <td><input type="text" name="summary_ia_1"></td>
                <!-- <td><input type="text" name="summary_ia_2"></td>
                <td><input type="text" name="summary_ia_3"></td> -->
            </tr>
            <tr>
                <td>E. ACR (Max Points 20)</td>
                <td><input type="text" name="summary_acr_1"></td>
                <!-- <td><input type="text" name="summary_acr_2"></td>
                <td><input type="text" name="summary_acr_3"></td> -->
            </tr>
            <tr>
                <td>F. Contribution to Society (Max Points 10)</td>
                <td><input type="text" name="summary_cs_1"></td>
                <!-- <td><input type="text" name="summary_cs_2"></td>
                <td><input type="text" name="summary_cs_3"></td> -->
            </tr>
            <tr>
                <td>Total (Max Points 100)</td>
                <td><input type="text" name="summary_total_1"></td>
                <!-- <td><input type="text" name="summary_total_2"></td>
                <td><input type="text" name="summary_total_3"></td> -->
            </tr>
            <tr>
                <td>Total on 10 Point scale</td>
                <td><input type="text" name="summary_scale_1"></td>
                <!-- <td><input type="text" name="summary_scale_2"></td>
                <td><input type="text" name="summary_scale_3"></td> -->
            </tr>
        </tbody>
    </table>
        <button type="submit" id="printBtn">Submit Appraisal Form</button>
</form>
    </div>
</body>
</html>
