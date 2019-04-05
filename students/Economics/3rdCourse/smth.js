module.exports= (arr)=> {
    let smthObject = {
        name: 'Slava',
        department:'Economics',
        age: 21,
        rating:'',
        academicProblems:null,
        course:3,
        leadingFor: null
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
    let smth2Object = {
        name: 'Alexey',
        department:'Economics',
        age: 19,
        rating:'',
        academicProblems:7,
        course:3,
        leadingFor: null
    };
    arr.push(smth2Object);
    smth2Object.rating= arr.findIndex(i => i.name === smth2Object.name)+1;
    arr.pop();
    arr.push(smth2Object);
};