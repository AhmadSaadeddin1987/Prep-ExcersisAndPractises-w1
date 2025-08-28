const studentResult = {
name: 'Mahmood',
subject: 'React',
grade: 9,
};
const showResult = (name, subject, grade) => {
console.log(`Hi ${name}, you have ${grade >= 6 ? 'passed' : 'failed'} ${subject}`);
};
showResult(studentResult.name, studentResult.subject, studentResult.grade);