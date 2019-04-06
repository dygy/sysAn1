module.exports=(studentsArr)=>{
    lowestRating();
    highestRating();
    older20();
    hasNoAcademicProblems();
    onFirstCourse();
    hasAccessToLab();
    whoLeadWho();

    function lowestRating() {
        let lastRating = 0;
        for (let x = 0; x < studentsArr.length; x++) {
            if (studentsArr[x].rating > lastRating) {
                lastRating = studentsArr[x].rating
            }
        }
        console.log('Lowest rating is : ' +lastRating)
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