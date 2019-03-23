module.exports= (arr)=> {
    let smthObject = {
        name: 'Valerii',
        age: 17,
        rating:'',
        academicProblems:5,
        course:2,
        labLevelAccess:1
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
};