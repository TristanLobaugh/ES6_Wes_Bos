import { sum, kebabCase } from 'npm:lodash';
import { addTax } from './checkout';

console.log(kebabCase('Can you believe it works!'));

console.log(addTax(100, 0.15));
