import elements from './getElements.js';
import { URL, loadGoods } from './render.js';

const {
    crmSum,
} = elements;

export const addCrmTotalSum = async () => {
    const data = await loadGoods(URL);
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].count * data[i].price;
    }
    // console.log('totalsum:', sum);

    crmSum.textContent = String(sum);
};
