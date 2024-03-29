import elements from './const.js';
import { loadGoods } from './renderGoods.js';

const {
    URL_API,
    crmSum,
} = elements;

export const addCrmTotalSum = async () => {
    const data = await loadGoods(URL_API);
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i].count * data[i].price;
    }

    crmSum.textContent = String(sum);
};
