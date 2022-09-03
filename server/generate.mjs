// var faker = require('faker');

// var database = { courses: []};

// for (var i = 1; i<= 300; i++) {
//   database.courses.push({
//     id: i,
//     name: faker.commerce.productName(),
//     description: faker.lorem.sentences()
//   });
// }

// console.log(JSON.stringify(database));

import { faker } from '@faker-js/faker';
// import { faker } from '@faker-js/faker/locale/de';

export const COURSES = [];

export function createRandomCourse() {
  return {
    id: faker.datatype.uuid(),
    name: faker.internet.userName(),
    description: faker.internet.email(),
  };
}

Array.from({ length: 10 }).forEach(() => {
  COURSES.push(createRandomCourse());
});

console.log(JSON.stringify({ courses: COURSES}));
