module.exports= (arr)=> {
    let smthObject = {
        name: 'Dmitry',
        age: 19,
        rating:'',
        academicProblems:2,
        course:3,
        labLevelAccess:2
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
};