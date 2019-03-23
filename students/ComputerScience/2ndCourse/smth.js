module.exports= (arr)=> {
    let smthObject = {
        name: 'Ivan',
        age: 18,
        rating:'',
        academicProblems:null,
        course:2
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
};