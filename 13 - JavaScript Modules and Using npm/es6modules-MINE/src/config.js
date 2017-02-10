// named export must use name that is is exported as
export const theNamedKey = 'abc12345';
export const url = 'http://tristanlobaugh.com';

// const apiKey = '123abc';
// default export lets you import with any name you like
// export default apiKey;

// to export a function

export function sayHi(name) {
	console.log(`Hi there ${name}`);
}

const age = 100;
const name = 'tristan';

// can change name of export using -as-
export { age as old, name };
