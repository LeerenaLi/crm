import {arr} from './data.js';
import elements from './getElements.js';

const {
    crmSum,
} = elements;

export const addCrmTotalSum = () => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].count * arr[i].price;
    }
    console.log(sum);

    crmSum.textContent = String(sum);
};
