
        var cl = false;
        var gradesArray = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-',
            'D+', 'D', 'D-', 'F'];
        var gradeSelect0 = document.getElementById('gradeSelect0');
        var gradeSelect1 = document.getElementById('gradeSelect1');
        var gradeSelect2 = document.getElementById('gradeSelect2');
        var gradeSelect3 = document.getElementById('gradeSelect3');
        var gradeSelect4 = document.getElementById('gradeSelect4');
        var gradeSelect5 = document.getElementById('gradeSelect5');
        var gradeSelect6 = document.getElementById('gradeSelect6');
        var gradeSelect7 = document.getElementById('gradeSelect7');
        var gradeSelect8 = document.getElementById('gradeSelect8');
        for (var i = 0; i < gradesArray.length; i++) {
            var myOption0 = document.createElement('option');
            var myOption1 = document.createElement('option');
            var myOption2 = document.createElement('option');
            var myOption3 = document.createElement('option');
            var myOption4 = document.createElement('option');
            var myOption5 = document.createElement('option');
            var myOption6 = document.createElement('option');
            var myOption7 = document.createElement('option');
            var myOption8 = document.createElement('option');
            myOption0.text = gradesArray[i];
            myOption1.text = gradesArray[i];
            myOption2.text = gradesArray[i];
            myOption3.text = gradesArray[i];
            myOption4.text = gradesArray[i];
            myOption5.text = gradesArray[i];
            myOption6.text = gradesArray[i];
            myOption7.text = gradesArray[i];
            myOption8.text = gradesArray[i];
            gradeSelect0.add(myOption0);
            gradeSelect1.add(myOption1);
            gradeSelect2.add(myOption2);
            gradeSelect3.add(myOption3);
            gradeSelect4.add(myOption4);
            gradeSelect5.add(myOption5);
            gradeSelect6.add(myOption6);
            gradeSelect7.add(myOption7);
            gradeSelect8.add(myOption8);
        }
        var coursesList = [
            { name: "WEb Enginering", creditHours: 2, grade: "" },
            { name: "WEb Enginering Lab", creditHours: 1, grade: "" },
            { name: "Visual Programming", creditHours: 2, grade: "" },
            { name: "VP Lab", creditHours: 1, grade: "" },
            { name: "DCCN", creditHours: 3, grade: "" },
            { name: "DCCN Lab", creditHours: 1, grade: "" },
            { name: "Computer Architecture", creditHours: 3, grade: "" },
            { name: "Numerical Method", creditHours: 3, grade: "" },
            { name: "Theory of Automata", creditHours: 2, grade: "" },
        ];
        var errorsList = document.getElementById('errorsList');
        function remitem(index) {
            let li = errorsList.children[parseInt(index)];
            errorsList.removeChild(li);
            for (let j = index; j < errorsList.childElementCount; j++) {
                let li = errorsList.children[j];
                li.dataset.index = j;
            }
        }
        totalCreditHours = 0;
        function findTotalCreditHours() {
            totalCreditHours = 0;
            var obj = document.getElementById('obj');
            obj.innerHTML = '';
            coursesList.forEach(course => {
                obj.innerHTML += Object.values(course) + '<br>';
                totalCreditHours += course.creditHours;
            });
            console.log('totalCreditHours', totalCreditHours);
        }
        this.findTotalCreditHours();
        document.getElementById('tch').innerHTML = totalCreditHours;
        var size = Object.keys(coursesList).length;
        function addGrade(course, grade) {
            for (var i in coursesList) {
                if (coursesList[i].name == course) {
                    coursesList[i].grade = grade;
                    console.log('grade pushed', coursesList[i].grade);
                    return;
                }
            }
            for (var j in errorsList?.childElementCount) {
                if (errorsList?.children[parseInt(j)] == course) {
                    remitem(parseInt(j));
                    alert('dgg');
                    return;
                }
            }
            return;
        }
        var lent = coursesList.length;
        var liCount = 0;
        function calculateGpa() {
            liCount = 0;
            var gpa = document.getElementById('gpa');
            findTotalCreditHours();
            errorsList.innerHTML = '';
            var error = document.getElementById('error');
            error.innerHTML = '';
            total = 0;
            for (var i in coursesList) {
                gpa.innerHTML = '';
                gpa.style.background = '#f2f2f2';
                //if grade empty
                if (!coursesList[i].grade) {
                    error.innerHTML = "Please Provide Grades for:<br>";
                    for (var j = i, k = 0; j < lent; j++) {
                        if (!coursesList[j].grade) {
                            k++;
                            doSetTimeout(k, coursesList[j].name);
                        }
                    }
                    total = 0;
                    location.href = "#errorsList";
                    break;
                }
                //otherwise
                var gradePoints = findGradePoints(coursesList[i].grade);
                total = total + gradePoints * coursesList[i].creditHours;
            }
            console.log('total are ', total);
            gpa.innerHTML = (total / totalCreditHours).toFixed(2);
            gpa.style.background = 'white';
        }
        function doSetTimeout(k, course) {
            setTimeout(function () {
                var listItem = document.createElement('li');
                listItem.appendChild(document.createTextNode(course));
                errorsList.appendChild(listItem);
            }, 1000 + k * 200);
        }
        function findGradePoints(grade) {
            switch (grade) {
                case 'A+':
                    return 4.3;
                case 'A':
                    return 4;
                case 'A-':
                    return 3.7;
                case 'B+':
                    return 3.3;
                case 'B':
                    return 3;
                case 'B-':
                    return 2.7;
                    break;
                case 'C+':
                    return 2.3;
                case 'C':
                    return 2;
                case 'C-':
                    return 1.7;
                case 'D+':
                    return 1.3;
                case 'D':
                    return 1;
                case 'D-':
                    return 0.7;
                case 'F':
                    return 0;
                default:
                    return 0
            }
        }