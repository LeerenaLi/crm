import elements from './const.js';
import { addCrmTotalSum } from './totalSum.js';
import { createRow } from './createRow.js';
import { fetchRequest } from './renderData.js';

const {
    URL_API,
    tableBody,
} = elements;

export const deleteRow = async () => {
    tableBody.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.corf')) {
            if (confirm('Хотите удалить товар?')) {
                const row = target.closest('.table__row');

                const rowID = row.querySelector('.table__cell_id').dataset.id;
    
                fetchRequest(`https://jumpy-global-capricorn.glitch.me/api/goods/${rowID}`, {
                    method: 'DELETE',
                    callback(err, data) {
                        if (err) {
                            console.warn(err, data);
                            row.textContent = err;
                        }
                        addCrmTotalSum();
                    },
                })
                row.remove();
            } else {
                return;
            }
            
        }
    });
};

export const addNewRowPage = (newRow, tableBody) => {
    tableBody.append(createRow(newRow));
};


const openImage = () => {
    tableBody.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.download-img')) {
            const row = target.closest('.table__row');
            const rowID = row.querySelector('.table__cell_id').dataset.id;
            fetchRequest(`${URL_API}/${rowID}`, {
                method: 'GET',
                // callback: showModal,
                callback(err, data) {
                    if (err) {
                        console.warn(err, data);
                        row.textContent = err;
                    }
                    if (data) {
                        console.log('data: ', data);
                        const imgUrl = `https://jumpy-global-capricorn.glitch.me/${data.image}`;
                        console.log('imgUrl: ', imgUrl);
                        const left = screen.width / 2 - 600 / 2;
                        const top = screen.height / 2 - 600 / 2;

                        const myWin = open(imgUrl, 'image-window',
                                'width=600,height=600,top=' + top + ',left=' + left + '');
                    }
                }
            })
        }
    });
};

export default {
    deleteRow,
    addNewRowPage,
    openImage,
}
