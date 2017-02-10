import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
// exported as defualt can name whatever we want
// import theKey from './src/config';

// exported as named must use same name be sure to use {}
// can rename named imports using -as-
import {
	theNamedKey as key,
	url,
	sayHi,
	old,
	name
} from './src/config';

// to import a default and named from one file use , {xyz}
import User, { createUrl, gravatar } from './src/user';

// console.log(theKey);
console.log(key, url, old);
sayHi(name);

const ages = [1, 1, 4, 52, 12, 4];

console.log(uniq(ages));

const wes = new User('Wes Bos', 'wesbox@gmail.com', 'wesbos.com');
const profile = createUrl(wes.name);
console.log(profile);
const image = gravatar(wes.email);
console.log(image);

