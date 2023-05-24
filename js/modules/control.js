import elements from './getElements.js';
import {addCrmTotalSum} from './totalSum.js';
import {createId} from './randomId.js';
import {createRow} from './createRow.js';
import { URL, fetchRequest, loadGoods } from './render.js';


const {
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

const deleteRow = async () => {
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
        //     // const index = data.findIndex((item) => item.id === target);
        //     // arr.splice(index, 1);
        //     // target.closest('.table__row').remove();
    });
};

const modalControll = () => {
    const openModal = () => {
        modal.classList.add('active');
        overlayModal.classList.add('active');
        // createId();
    };

    btnOpenModal.addEventListener('click', openModal);

    const closeModal = () => {
        modal.classList.remove('active');
        overlayModal.classList.remove('active');
    };

    btnCloseModal.addEventListener('click', closeModal);

    overlayModal.addEventListener('click', closeModal);

    return {
        closeModal,
        createId,
    };
};

const addNewRowPage = (newRow, tableBody) => {
    tableBody.append(createRow(newRow));
};

const formControl = async (modal, form, tableBody, closeModal) => {
    const {title, category, spec, units, count, price} = form;

    form.addEventListener('change', () => {
        const countValue = form.count.value;
        const priceValue = form.price.value;

        modalSum.textContent = countValue * priceValue;
    });

    modalCheckbox.addEventListener('change', e => {
        e.target.checked ? modalInputDiscount.disabled = false :
        modalInputDiscount.disabled = true;
        if (modalInputDiscount.disabled) {
            modalInputDiscount.value = '';
        }
    });

    modal.addEventListener('submit', e => {
        e.preventDefault();

        fetchRequest(URL, {
            method: 'POST',
            body: {
                title: title.value,
                description: spec.value,
                category: category.value,
                units: units.value,
                count: count.value,
                price: price.value,
            },
            callback(err, data) {
                if (err) {
                    console.warn(err);
                    formError.style.display = 'block';
                    formError.textContent = err;
                    return;
                }
                
                formError.style.display = 'block';
                formError.textContent = `Товар добавлен, номер товара: ${data.id}`;
                setTimeout(closeModal, 3000);
                form.reset();

                const newRow = {
                    id: data.id,
                    title: data.title,
                    category: data.category,
                    units: data.units,
                    count: data.count,
                    price: data.price,
                };

                addNewRowPage(newRow, tableBody);
                addCrmTotalSum();
            },
            headers: {
                'Content-Type': 'application/json',
            },
        });
    });
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
    modalControll,
    addNewRowPage,
    formControl,
    openImage,
};
