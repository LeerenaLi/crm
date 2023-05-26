import elements from './const.js';
import { createForm, createModal } from './createModal.js';
import {createRow} from './createRow.js';
import { fetchRequest } from './renderData.js';

const {
    URL,
    tableBody,
    btnOpenModal,
} = elements;


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

    btnOpenModal.addEventListener('click', () => {
        const modal = createModal();
        console.log('modal: ', modal);
    })

    tableBody.addEventListener('click', async ({target}) => {
        if (target.closest('.edit-table')) {
            const row = target.closest('.table__row');
            const rowID = row.querySelector('.table__cell_id').dataset.id;
            const editData = await fetchRequest(`${URL}/${rowID}`, {
                method: 'GET',
                callback(err, data) {
                    if (err) {
                        console.warn(err, data);
                        row.textContent = err;
                    }
                    if (data) {
                        const modal = createModal();
                        console.log('modal: ', modal);
                        const modalId = document.querySelector('.vendor-code__id');
                        console.log('modalId: ', modalId);
                    }
                },
            });
        }
    })
}



