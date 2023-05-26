import elements from './const.js';
import { addCrmTotalSum } from './totalSum.js';
import { createRow } from './createRow.js';
import { fetchRequest } from './renderData.js';
import { loadGoods } from './renderGoods.js';

const {
    URL,
    tableBody,
    modal,
    btnOpenModal,
    btnCloseModal,
    overlayModal,
    modalCheckbox,
    modalInputDiscount,
    modalSum,
    formError,
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

// const closeModal = () => {
//     modal.remove();
// }

// export const modalControll = async (modal) => {
//     await loadStyle('css/blocks/modal.css');
//     await loadStyle('css/blocks/form.css');


//     return new Promise(resolve => {
//         // btnOpenModal.addEventListener('click', () => {
//         //     document.body.append(createModal());
//         //     // modal.classList.add('active');
//         // });
//         // btnCloseModal.addEventListener('click', () => {
//         //     modal.classList.remove('active');
//         // });
//         // modal.addEventListener('click', ({target}) => {
//         //     if (target.classList.contains('modal')) {
//         //         modal.classList.remove('active');
//         //     }
//         // });
//     })
// };


// export const formControl = async (modal, form, tableBody) => {
//     console.log('form: ', form);
//     const {title, category, spec, units, count, price} = form;
//     console.log('form: ', form);

//     form.addEventListener('change', () => {
//         const countValue = form.count.value;
//         const priceValue = form.price.value;

//         modalSum.textContent = countValue * priceValue;
//     });

//     modalCheckbox.addEventListener('change', e => {
//         e.target.checked ? modalInputDiscount.disabled = false :
//         modalInputDiscount.disabled = true;
//         if (modalInputDiscount.disabled) {
//             modalInputDiscount.value = '';
//         }
//     });

//     modal.addEventListener('submit', e => {
//         e.preventDefault();

//         fetchRequest(URL, {
//             method: 'POST',
//             body: {
//                 title: title.value,
//                 description: spec.value,
//                 category: category.value,
//                 units: units.value,
//                 count: count.value,
//                 price: price.value,
//             },
//             callback(err, data) {
//                 if (err) {
//                     console.warn(err);
//                     formError.style.display = 'block';
//                     formError.textContent = err;
//                     return;
//                 }
                
//                 formError.style.display = 'block';
//                 formError.textContent = `Товар добавлен, номер товара: ${data.id}`;
//                 setTimeout(modal.classList.remove('active'), 3000);
//                 form.reset();

//                 const newRow = {
//                     id: data.id,
//                     title: data.title,
//                     category: data.category,
//                     units: data.units,
//                     count: data.count,
//                     price: data.price,
//                 };

//                 addNewRowPage(newRow, tableBody);
//                 addCrmTotalSum();
//             },
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//     });
// };

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
