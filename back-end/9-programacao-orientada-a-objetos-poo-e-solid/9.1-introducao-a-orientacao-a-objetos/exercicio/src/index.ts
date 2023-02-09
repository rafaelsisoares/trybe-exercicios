import Subject from "./classes/Subject";

const subject = new Subject(1000, 'John', [7, 9, 4, 6], [10, 8]);

console.log(subject.sumGrades());
console.log(subject.media());
