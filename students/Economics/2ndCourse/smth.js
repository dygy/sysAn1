module.exports= (arr)=> {
    let smthObject = {
        name: 'Sergey',
        age: 22,
        rating:'',
        academicProblems:1,
        course:2
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
};