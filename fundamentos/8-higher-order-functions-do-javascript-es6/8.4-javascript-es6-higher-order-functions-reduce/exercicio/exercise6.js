const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(first, second) {
    const reportStudents = first.map((item, index) => {
        const reportCard = {};
        reportCard.name = item;
        reportCard.average = second[index].reduce((total, nota) => parseFloat((total + nota / second[index].length).toFixed(2)), 0);
        return reportCard;
    });
    return reportStudents;
}

console.log(studentAverage(students, grades));

/* const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
]; */