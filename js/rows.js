'use strict';

const arr = [
    {
        id: 253842678,
        title: 'Смартфон Xiaomi 11T 8/128GB',
        category: 'mobile-phone',
        units: 'шт',
        count: 3,
        price: 27000,
    },
    {
        id: 296378448,
        title: 'Радиоуправляемый автомобиль Cheetan',
        category: 'toys',
        units: 'шт',
        count: 1,
        price: 4000,
    },
    {
        id: 215796548,
        title: 'ТВ приставка MECOOL KI',
        category: 'tv-box',
        units: 'шт',
        count: 4,
        price: 12400,
    },
    {
        id: 246258248,
        title: 'Витая пара PROConnect 01-0043-3-25',
        category: 'cables',
        units: 'шт',
        count: 420,
        price: 22,
    },
];

const tableBody = document.querySelector('.table__body');

const renderGoods = () => {
    let obj = {};

    const createRow = () => {
        const createTR = (tag = 'tr', _class = 'table__row') => {
            const tr = document.createElement(tag);
            tr.className = _class;
            return tr;
        };

        const newTR = createTR();
        console.log('newTR: ', newTR);

        const createTD = (text, tag = 'td', _class = 'table__cell') => {
            const td = document.createElement(tag);
            td.className = _class;
            td.textContent = text;
            newTR.append(td);
        };

        const tdId = createTD(String(obj.id));
        const tdTitle = createTD(obj.title);
        const tdCategory = createTD(obj.category);
        const tdUnits =
        createTD(obj.units, 'td', 'table__cell table__cell_units');
        const tdCount =
        createTD(obj.count, 'td', 'table__cell table__cell_num');
        const tdPrice =
        createTD(String(obj.price), 'td', 'table__cell table__cell_price');
        const tdTotal = createTD(String(obj.count * obj.price),'td', 'table__cell table__cell_total');

        const tableBtns = document.querySelector('.table__cell_btns');
        console.log(tableBtns);

        const tdBtns = tableBtns.cloneNode(true);
        console.log('tdBtns: ', tdBtns);
        newTR.append(tdBtns);

        return newTR;
    };

    for (let i = 0; i < arr.length; i++) {
        obj = arr[i];
        console.log(obj);
        tableBody.append(createRow(obj));
    }
};
renderGoods(arr);
