module.exports=(studentsArr)=>{
    lowestRating();
    highestRating();
    older20();
    hasNoAcademicProblems();
    onFirstCourse();
    hasAccessToLab();
    whoLeadWho();
    tree()
    function lowestRating() {
        let lastRating = 0;
        for (let x = 0; x < studentsArr.length; x++) {
            if (studentsArr[x].rating > lastRating) {
                lastRating = studentsArr[x].rating
            }
        }
        console.log('Lowest rating is : ' +lastRating);
    }
    function tree() {
        let CSstd1 = null;
        let CSstd2 = null;
        let CSstd3 = null;
        let PHstd1 = null;
        let PHstd2 = null;
        let PHstd3 = null;
        let ECstd1 = null;
        let ECstd2 = null;
        let ECstd3 = null;
        //console.log(studentsArr);

        console.log('                                                   student');
        console.log('                    /                                |                                \\');
        console.log('        _Computer Science_                   ____Physics_____                     __Economics__');
        console.log('       /        |       \\                   /      |         \\                   /     |       \\');
        console.log('1stCourse 2ndCourse   3rdCourse      1stCourse 2ndCourse   3rdCourse       1stCourse 2ndCourse   3rdCourse');
        while (studentsArr.length > 0) {
            for (let x = 0; x < studentsArr.length; x++) {

                //  console.log(studentsArr[x].department === 'Physics' && studentsArr[x].course === 1);
                // console.log(studentsArr[x].department === 'Physics' && studentsArr[x].course === 2);
                //   console.log(studentsArr[x].department === 'Physics' && studentsArr[x].course === 3);
                //   console.log(studentsArr[x].department === 'CS' && studentsArr[x].course === 1);
                //   console.log(studentsArr[x].department === 'CS' && studentsArr[x].course === 2);
                //   console.log(studentsArr[x].department === 'CS' && studentsArr[x].course === 3);
                //   console.log(studentsArr[x].department === 'Economics' && studentsArr[x].course === 1);
                //   console.log(studentsArr[x].department === 'Economics' && studentsArr[x].course === 2);
                //   console.log(studentsArr[x].department === 'Economics' && studentsArr[x].course === 3);
                if (studentsArr[x].department === 'CS' && studentsArr[x].course === 1) {

                    CSstd1 = studentsArr[x].name;
                    studentsArr.splice(x, 1)
                } else if (studentsArr[x].department === 'CS' && studentsArr[x].course === 2) {
                    CSstd2 = studentsArr[x].name;
                    studentsArr.splice(x, 1)
                } else if (studentsArr[x].department === 'CS' && studentsArr[x].course === 3) {
                    CSstd3 = studentsArr[x].name;
                    studentsArr.splice(x, 1)
                } else if (studentsArr[x].department === 'Economics' && studentsArr[x].course === 1) {
                    ECstd1 = studentsArr[x].name;
                    studentsArr.splice(x, 1)
                } else if (studentsArr[x].department === 'Economics' && studentsArr[x].course === 2) {

                    ECstd2 = studentsArr[x].name;
                    studentsArr.splice(x, 1)
                } else if (studentsArr[x].department === 'Economics' && studentsArr[x].course === 3) {
                    ECstd3 = studentsArr[x].name;
                    studentsArr.splice(x, 1)

                } else if (studentsArr[x].department === 'Physics' && studentsArr[x].course === 1) {
                    PHstd1 = studentsArr[x].name;
                    studentsArr.splice(x, 1)
                } else if (studentsArr[x].department === 'Physics' && studentsArr[x].course === 2) {
                    PHstd2 = studentsArr[x].name;
                    studentsArr.splice(x, 1)

                } else if (studentsArr[x].department === 'Physics' && studentsArr[x].course === 3) {

                    PHstd3 = studentsArr[x].name;
                    studentsArr.splice(x, 1)
                }
                if (CSstd1 !== null && CSstd2 !== null && CSstd3 !== null
                    && PHstd1 !== null && PHstd2 !== null && PHstd3 !== null && ECstd1 !== null && ECstd2 !== null && ECstd3 !== null) {
                    console.log(CSstd1 + '      ' + CSstd2 + '         ' + CSstd3 + '             ' + PHstd1 + '     ' + PHstd2 + '   ' + PHstd3 + '         ' + ECstd1 + '       ' + ECstd2 + '       ' + ECstd3);
                    CSstd1 = null;
                    CSstd2 = null;
                    CSstd3 = null;
                    PHstd1 = null;
                    PHstd2 = null;
                    PHstd3 = null;
                    ECstd1 = null;
                    ECstd2 = null;
                    ECstd3 = null;

                }

            }
            //console.log('Lowest rating is : ' +lastRating);
        }
    }
    function highestRating() {
        let lastRating=Infinity;
        for (let x = 0;x<studentsArr.length;x++){
            if (studentsArr[x].rating<lastRating) {
                lastRating = studentsArr[x].rating
            }
        }
        console.log('Highest rating is : ' +lastRating)
    }
    function older20() {
        let names=[];
        for (let x = 0;x<studentsArr.length;x++){
            if (studentsArr[x].age>20) {
                names.push(studentsArr[x].name)
            }
        }
        console.log('Older than 20 y.o. : ' +names.toString())
    }

    function hasNoAcademicProblems() {
        let names=[];
        for (let x = 0;x<studentsArr.length;x++){
            if (studentsArr[x].academicProblems===null) {
                names.push(studentsArr[x].name)
            }
        }
        console.log('Has no academic debts : ' +names.toString())
    }

    function onFirstCourse() {
        let names=[];
        for (let x = 0;x<studentsArr.length;x++){
            if (studentsArr[x].course===1) {
                names.push(studentsArr[x].name)
            }
        }
        console.log('On first Course : ' +names.toString())
    }

    function hasAccessToLab() {
        let names=[];
        for (let x = 0;x<studentsArr.length;x++){
            if (studentsArr[x].labLevelAccess>0) {
                names.push(studentsArr[x].name)
            }
        }
        console.log('Has access to lab : ' +names.toString())
       // console.log(studentsArr);
    }
    function whoLeadWho() {
        let name ;
        let names=[];
        for (let x = 0;x<studentsArr.length;x++){
            if (studentsArr[x].leadingFor!== null) {
                name =studentsArr[x].name;
                for (let y = 0;y<studentsArr[x].leadingFor.length ;y++) {
                    names.push(studentsArr[x].leadingFor[y].name+' from '+
                        studentsArr[x].leadingFor[y].department+' department on '+
                        studentsArr[x].leadingFor[y].course+' course')
                }
            }
        }
        let string = name+' are leading : ' +names.toString()
            .replace(',',' and ')
            .replace('1','first')
            .replace('2','second');
        console.log(string)

    }
};