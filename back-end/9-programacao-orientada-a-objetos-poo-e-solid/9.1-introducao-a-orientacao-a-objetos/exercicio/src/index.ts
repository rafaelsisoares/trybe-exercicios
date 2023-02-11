import Subject from "./classes/Subject";
import { Client, Item, Order } from "./classes/Restaurant";
import Data from "./classes/Date";

const subject = new Subject('John');
subject.exams = [10, 5, 9, 3.5];
subject.works = [9, 10];

console.log(subject.sumGrades());
console.log(subject.average());

const client = new Client('John');
const item1 = new Item('Hamburger', 5);
const item2 = new Item('Donuts', 3.5);
const item3 = new Item('Soda', 1.5);

const order = new Order(client, [item1, item2, item3], 'PIX', 0.2);

console.log(order.total());
console.log(order.totalWithDiscount());

const data = new Data(2023, 2, 10);
console.log(data);