module.exports= (arr)=> {
    let smthObject = {
        name: 'Ivan',
        department:'CS',
        age: 18,
        rating:'',
        academicProblems:null,
        course:2,
        leadingFor: null
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
    let smth2Object = {
        name: 'Peter',
        department:'CS',
        age: 23,
        rating:'',
        academicProblems:null,
        course:2,
        leadingFor: null
    };
    arr.push(smth2Object);
    smth2Object.rating= arr.findIndex(i => i.name === smth2Object.name)+1;
    arr.pop();
    arr.push(smth2Object);
};