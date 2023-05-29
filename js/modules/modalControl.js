import elements from './const.js';
import { createModal } from "./createModal.js";
import { loadStyle } from "./loadStyle.js";
import { addNewRowPage } from "./rowsControl.js";
import { fetchRequest } from "./renderData.js";
import { addCrmTotalSum } from "./totalSum.js";

const {
    URL,
    tableBody,
} = elements;

export const showModal = async () => {
    await loadStyle('css/blocks/modal.css');
    await loadStyle('css/blocks/form.css');

    
    const openPromise =  new Promise(resolve => {
        const modal = createModal();
        resolve(modal);
    })

    openPromise.then(value => {
        const modal = value.modal;
        const form = value.form;
        formControl(modal, form, tableBody);
    })

    return new Promise(resolve => {
        openPromise.then(value => {
            const modal = value.modal;
            const btnClose = value.btnCloseModal;
            modal.addEventListener('click', ({target}) => {
                if (target.classList.contains('modal')) {
                    modal.remove();
                }
            });
            btnClose.addEventListener('click', () => {
                modal.remove();
            })
        })
    })
}


export const formControl = async (modal, form, tableBody) => {
    const {title, category, spec, units, count, price, sale, discount} = form;
    const formError = document.querySelector('.form__warning');
    const modalSum = document.querySelector('.form__span_sum');

    form.addEventListener('change', () => {
        const countValue = form.count.value;
        const priceValue = form.price.value;

        modalSum.textContent = countValue * priceValue;
    });
    
    sale.addEventListener('change', e => {
        e.target.checked ? discount.disabled = false :
        discount.disabled = true;
        if (discount.disabled) {
            discount.value = '';
        }
    });

    const closeModal = () => {
        modal.remove();
    }

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
