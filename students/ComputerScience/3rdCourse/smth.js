module.exports= (arr)=> {
    let smthObject = {
        name: 'Oleg',
        age: 19,
        rating:'',
        academicProblems:null,
        course:3,
        labLevelAccess:1
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
};