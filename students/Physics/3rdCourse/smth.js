module.exports= (arr)=> {
    let aArray=[];
    students();
    let smthObject = {
        name: 'Dmitrii',
        department:'Physics',
        age: 19,
        rating:'',
        academicProblems:2,
        course:3,
        labLevelAccess:2,
        leadingFor: null
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
    let smth2Object = {
        name: 'Denis',
        department:'Physics',
        age: 19,
        rating:'',
        academicProblems:null,
        course:3,
        labLevelAccess:3,
        leadingFor: aArray
    };
    arr.push(smth2Object);
    smth2Object.rating= arr.findIndex(i => i.name === smth2Object.name)+1;
    arr.pop();
    arr.push(smth2Object);
     function students () {
        for (let i=0;i<arr.length ; i++){
            if (arr[i].course <3 && arr[i].department==='Physics') {
               aArray.push(arr[i]);
            }
        }
    }
};