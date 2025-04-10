document.getElementById('compute').addEventListener('click', function () {
            // Get input values
            const midtermGrade = parseFloat(document.getElementById('midtermGrade').value);
            const finalGrade = parseFloat(document.getElementById('finalGrade').value);

            // Validate inputs
            if (isNaN(midtermGrade) || isNaN(finalGrade)) {
                alert('Please enter valid grades for both midterm and final.');
                return;
            }

            if (midtermGrade < 0 || midtermGrade > 100 || finalGrade < 0 || finalGrade > 100) {
                alert('Grades must be between 0 and 100.');
                return;
            }

            // Calculate final grade (simple average for this example)
            const average = (midtermGrade + finalGrade) / 2;

            // Determine the remark based on the average
            let remark;
            if (average >= 99) remark = "1.0";
            else if (average >= 97) remark = "1.1";
            else if (average >= 95) remark = "1.2";
            else if (average >= 93) remark = "1.3";
            else if (average >= 90) remark = "1.5";
            else if (average >= 89) remark = "1.6";
            else if (average >= 87) remark = "1.8";
            else if (average >= 86) remark = "1.9";
            else if (average >= 85) remark = "2";
            else if (average >= 84) remark = "2.1";
            else if (average >= 83) remark = "2.2";
            else if (average >= 82) remark = "2.3";
            else if (average >= 81) remark = "2.4";
            else if (average >= 80) remark = "2.5";
            else if (average >= 79) remark = "2.6";
            else if (average >= 78) remark = "2.7";
            else if (average >= 77) remark = "2.8";
            else if (average >= 76) remark = "2.9";
            else if (average >= 75) remark = "3";
            else if (average >= 70) remark = "5";
            else remark = "Failed";

            // Display results
            document.getElementById('computedGrade').value = average.toFixed(2);
            document.getElementById('remarks').value = remark;
        });

        document.getElementById('new').addEventListener('click', function () {
            // Clear all inputs
            document.getElementById('studentName').value = '';
            document.getElementById('studentNumber').value = '';
            document.getElementById('midtermGrade').value = '';
            document.getElementById('finalGrade').value = '';
            document.getElementById('computedGrade').value = '';
            document.getElementById('remarks').value = '';
        });