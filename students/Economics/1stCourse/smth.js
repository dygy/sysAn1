module.exports= (arr)=> {
    let smthObject = {
        name: 'Nikita',
        age: 23,
        rating:'',
        academicProblems:null,
        course:1
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
};