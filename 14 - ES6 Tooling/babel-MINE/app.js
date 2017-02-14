
const age = 100;
const people = ['Wes', 'Kait'];

const fullName = people.map(name => `${name} Bos`);

console.log(age, fullName);

for(const person of people) {
	console.log(person);
}

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
