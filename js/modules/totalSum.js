import elements from './const.js';
import { loadGoods } from './renderGoods.js';

const {
    URL,
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
