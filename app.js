const cs1st = require ('./students/ComputerScience/1stCourse/smth.js');
const cs2nd = require ('./students/ComputerScience/2ndCourse/smth.js');
const cs3rd = require ('./students/ComputerScience/3rdCourse/smth.js');

const economics1st = require ('./students/Economics/1stCourse/smth.js');
const economics2nd = require ('./students/Economics/2ndCourse/smth.js');
const economics3rd = require ('./students/Economics/3rdCourse/smth.js');

const physics1st = require ('./students/Physics/1stCourse/smth.js');
const physics2nd = require ('./students/Physics/2ndCourse/smth.js');
const physics3rd = require ('./students/Physics/3rdCourse/smth.js');

const queries = require ('./queries');

let studentsArr = [];

cs1st(studentsArr);
cs2nd(studentsArr);
cs3rd(studentsArr);

economics1st(studentsArr);
economics2nd(studentsArr);
economics3rd(studentsArr);

physics1st(studentsArr);
physics2nd(studentsArr);
physics3rd(studentsArr);

//console.log(studentsArr);

queries(studentsArr);



