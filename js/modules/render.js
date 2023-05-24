import {arr} from './data.js';
import elements from './getElements.js';
import {createRow} from './createRow.js';

const {
    tableBody,
} = elements;

export const URL = 'https://jumpy-global-capricorn.glitch.me/api/goods';

export const fetchRequest = async (url, {
    method = 'GET',
    callback,
    body,
    headers
}) => {
    try {
        const options = {
            method,
        };

        if (body) options.body = JSON.stringify(body);

        if (headers) options.headers = headers;

        const response = await fetch(url, options);
        console.log('response: ', response);

        if (response.ok) {
            const data = await response.json();
            if (callback) callback(null, data);
            return;
        }

        if (!response.ok) {
            if (response.status > 400) {
                throw new Error(`Ошибка: ${response.status}: ${response.statusText}`);
            } 
            throw new Error(`${response.status} Что-то пошло не так...`);
        }
        
    } catch (err) {
        callback(err);
    }
};


export const loadGoods = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
}


export const renderGoods = async () => {
    const data = await loadGoods(URL);

    if (data) {
        data.map(item => {
            tableBody.append(createRow(item));
        })
    }
}
