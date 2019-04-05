module.exports= (arr)=> {
    let smthObject = {
        name: 'Sergey',
        department:'Economics',
        age: 22,
        rating:'',
        academicProblems:1,
        course:2,
        leadingFor: null
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
    let smth2Object = {
        name: 'Andrew',
        department:'Economics',
        age: 20,
        rating:'',
        academicProblems:3,
        course:2,
        leadingFor: null
    };
    arr.push(smth2Object);
    smth2Object.rating= arr.findIndex(i => i.name === smth2Object.name)+1;
    arr.pop();
    arr.push(smth2Object);
};