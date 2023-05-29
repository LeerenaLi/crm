import elements from './const.js';
import { addCrmTotalSum } from './totalSum.js';
import { createRow } from './createRow.js';
import { fetchRequest } from './renderData.js';
import { loadGoods } from './renderGoods.js';

const {
    URL,
    tableBody,
} = elements;



export const deleteRow = async () => {
    const data = await loadGoods(URL);

    tableBody.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.corf')) {
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
            const dataImg = target.closest('tr').getAttribute('data-pic');

            const left = screen.width / 2 - 600 / 2;
            const top = screen.height / 2 - 600 / 2;

            const myWin = open(dataImg, 'test',
                    'width=600,height=600,top=' + top + ',left=' + left + '');
            console.log('myWin: ', myWin);
        }
    });
};

export default {
    deleteRow,
    addNewRowPage,
    openImage,
}
