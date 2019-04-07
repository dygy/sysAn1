module.exports= (arr)=> {
    let smthObject = {
        name: 'Valerii',
        department:'Physics',
        age: 17,
        rating:'',
        academicProblems:5,
        course:2,
        labLevelAccess:1,
        leadingFor: null
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
    let smth2Object = {
        name: 'Linar',
        department:'Physics',
        age: 19,
        rating:'',
        academicProblems:null,
        course:2,
        labLevelAccess:1,
        leadingFor: null
    };
    arr.push(smth2Object);
    smth2Object.rating= arr.findIndex(i => i.name === smth2Object.name)+1;
    arr.pop();
    arr.push(smth2Object);
};