import elements from './const.js';
import {createRow} from './createRow.js';
import { showModal } from './modalControl.js';
import { fetchRequest } from './renderData.js';

const {
    URL_API,
    tableBody,
    btnOpenModal,
} = elements;


export const loadGoods = async () => {
    const response = await fetch(URL_API);
    const data = await response.json();

    return data;
}


export const renderGoods = async () => {
    const data = await loadGoods(URL_API);

    if (data) {
        data.map(item => {
            tableBody.append(createRow(item));
        })
    }

    btnOpenModal.addEventListener('click', showModal);

    tableBody.addEventListener('click', async ({target}) => {
        if (target.closest('.edit-table')) {
            const row = target.closest('.table__row');
            const rowID = row.querySelector('.table__cell_id').dataset.id;
            const modal = showModal();
            const editData = await fetchRequest(`${URL_API}/${rowID}`, {
                method: 'GET',
                // callback: showModal,
                callback(err, data) {
                    if (err) {
                        console.warn(err, data);
                        row.textContent = err;
                    }
                    if (data) {
                        console.log('data: ', data);
                        const productID = document.querySelector('.vendor-code__id');
                        productID.textContent = `${rowID}`;

                        const title = document.querySelector('#name');
                        const category = document.querySelector('#category');
                        const units = document.querySelector('#units');
                        const sale = document.querySelector('#sale-in');
                        const description = document.querySelector('#spec');
                        const count = document.querySelector('#count');
                        const price = document.querySelector('#price');
                        title.value = data.title;
                        category.value = data.category;
                        units.value = data.units;
                        description.value = data.description;
                        count.value = data.count;
                        price.value = data.price;
    
                        if (data.discount > 0) {
                            sale.value = data.discount;
                        }
                    }
                },
            });
    
        }
    })
}



