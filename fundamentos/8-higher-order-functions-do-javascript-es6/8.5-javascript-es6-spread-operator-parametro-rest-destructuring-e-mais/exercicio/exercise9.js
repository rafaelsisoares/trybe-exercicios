const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
};

const yearMonths = ({ spring, summer, autumn, winter }) => [...winter, ...spring, ...summer, ...autumn];

console.log(yearMonths(yearSeasons));