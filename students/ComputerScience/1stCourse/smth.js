module.exports= (arr)=> {
    let smthObject = {
        name: 'Alex',
        department:'CS',
        age: 21,
        rating:'',
        academicProblems:null,
        course:1,
        leadingFor: null
    };
arr.push(smthObject);
smthObject.rating= arr.findIndex(i => i.name === smthObject.name)+1;
arr.pop();
arr.push(smthObject);
    let smth2Object = {
        name: 'Dean',
        department:'CS',
        age: 20,
        rating:'',
        academicProblems:null,
        course:1,
        leadingFor: null
    };
    arr.push(smth2Object);
    smth2Object.rating= arr.findIndex(i => i.name === smth2Object.name)+1;
    arr.pop();
    arr.push(smth2Object);
};