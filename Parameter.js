/* const greeting = (name, greeting = 'Hello') => {
console.log(`${greeting} ${name}, welcome aboard!`);
};

greeting('Burak');
greeting('Veronika', 'Привет');
*/

// Example with object destructuring
const studentResult = {
	name: 'Mahmood',
	subject: 'React',
	grade: 9,
};
const showResult = (name, subject, grade) => {
	console.log(`Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} ${subject}`);
};

// ES5 style
const nameES5 = studentResult.name;
const subjectES5 = studentResult.subject;
const gradeES5 = studentResult.grade;
showResult(nameES5, subjectES5, gradeES5);

// ES6 object destructuring
const { name, subject, grade } = studentResult;
showResult(name, subject, grade);

// ES6 object destructuring with renaming
const { name: nameES6, subject: subjectES6, grade: gradeES6 } = studentResult;
showResult(nameES6, subjectES6, gradeES6);

// Example with array destructuring and default values
const studentResultArr = ['Mahmood', 'React'];
const [nameArr = 'Ahmad', subjectArr = 'JavaScript', gradeArr = 5] = studentResultArr;
showResult(nameArr, subjectArr, gradeArr); // gradeArr will use default 5

// Example with missing values (all defaults)
const emptyArr = [];
const [defName = 'Ahmad', defSubject = 'JavaScript', defGrade = 8] = emptyArr;
showResult(defName, defSubject, defGrade); // All defaults used