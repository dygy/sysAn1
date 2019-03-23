module.exports= (arr)=> {
    let smthObject = {
        name: 'Slava',
        age: 21,
        rating:'',
        academicProblems:null,
        course:3
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
};