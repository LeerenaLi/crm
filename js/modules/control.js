import {arr} from './data.js';
import elements from './getElements.js';
import {addCrmTotalSum} from './totalSum.js';
import {createId} from './randomId.js';
import {createRow} from './createRow.js';


const {
    tableBody,
    modal,
    btnOpenModal,
    btnCloseModal,
    overlayModal,
    modalCheckbox,
    modalInputDiscount,
    modalSum,
} = elements;

const addNewRow = (row) => {
    arr.push(row);
    console.log('arr: ', arr);
};

const deleteRow = () => {
    tableBody.addEventListener('click', e => {
        const target = e.target;
        if (target.closest('.corf')) {
            const index = arr.findIndex(obj => obj.id = target);
            arr.splice(index, 1);

            target.closest('.table__row').remove();

            console.log(arr);
            addCrmTotalSum();
        }
    });
};

const modalControll = () => {
    const openModal = () => {
        modal.classList.add('active');
        overlayModal.classList.add('active');
        createId();
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

const formControl = (modal, form, tableBody, closeModal) => {
    const {title, category, units, count, price} = form;

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

        const newRow = {
            id: createId(),
            title: title.value,
            category: category.value,
            units: units.value,
            count: count.value,
            price: price.value,
        };
        console.log('newRow: ', newRow);

        addNewRowPage(newRow, tableBody);
        addNewRow(newRow);
        addCrmTotalSum();
        form.reset();
        closeModal();
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
    addNewRow,
    deleteRow,
    modalControll,
    addNewRowPage,
    formControl,
    openImage,
};
