module.exports= (arr)=> {
    let smthObject = {
        name: 'Roma',
        department:'Physics',
        age: 24,
        rating:'',
        academicProblems:null,
        course:1,
        leadingFor: null
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
    let smth2Object = {
        name: 'Arslan',
        department:'Physics',
        age: 17,
        rating:'',
        academicProblems:null,
        course:1,
        labLevelAccess:1,
        leadingFor: null
    };
    arr.push(smth2Object);
    smth2Object.rating= arr.findIndex(i => i.name === smth2Object.name)+1;
    arr.pop();
    arr.push(smth2Object);
};