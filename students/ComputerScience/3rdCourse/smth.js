module.exports= (arr)=> {
    let smthObject = {
        name: 'Oleg',
        department:'CS',
        age: 19,
        rating:'',
        academicProblems:null,
        course:3,
        labLevelAccess:1,
        leadingFor: null
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
    let smth2Object = {
        name: 'Vladimir',
        department:'CS',
        age: 23,
        rating:'',
        academicProblems:3,
        course:3,
        labLevelAccess:1,
        leadingFor: null
    };
    arr.push(smth2Object);
    smth2Object.rating= arr.findIndex(i => i.name === smth2Object.name)+1;
    arr.pop();
    arr.push(smth2Object);
};