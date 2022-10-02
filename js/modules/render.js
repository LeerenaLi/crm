import {arr} from './data.js';
import elements from './getElements.js';
import {createRow} from './createRow.js';

const {
    tableBody,
} = elements;


export const renderGoods = (obj) => {
    for (let i = 0; i < arr.length; i++) {
        obj = arr[i];

        tableBody.append(createRow(obj));
    }
    console.log('arr: ', arr);
};
