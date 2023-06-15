import elements from './const.js';
import { createModal } from "./createModal.js";
import { loadStyle } from "./loadStyle.js";
import { addNewRowPage } from "./rowsControl.js";
import { fetchRequest } from "./renderData.js";
import { addCrmTotalSum } from "./totalSum.js";

const {
    URL_API,
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

const tobase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.addEventListener('loadend', () => {
        resolve(reader.result);
    });

    reader.addEventListener('error', err => {
        reject(err);
    });

    reader.readAsDataURL(file);
});



const renderNewRow = (data) => {
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
}


export const formControl = async (modal, form, tableBody) => {
    const {title, category, spec, units, count, price, sale, discount} = form;
    const file = document.querySelector('.image-input');
    const imageWrapper = document.querySelector('.form__images');
    const preview = document.querySelector('.preview');
    const imgDelete = document.querySelector('.form__basket');
    const formError = document.querySelector('.form__warning');
    const modalSum = document.querySelector('.form__span_sum');
    const btnReset = document.querySelector('.btn__reset');
    const inputCategory = document.querySelector('.form__input_category');
    const categoryWrapper = document.querySelector('.category-wrapper');
    const dataList = document.querySelector('.category-list');
    const categoryBtn = document.querySelector('.form__input_category-btn');
    const modalWrapper = document.querySelector('.modal__wrapper');

    const closeModal = () => {
        modal.remove();
    }

    form.addEventListener('input', () => {
        title.value = title.value.replace(/[^а-яё\s]/ig, '');
        category.value = category.value.replace(/[^а-яё\s]/ig, '');
        spec.value = spec.value.replace(/[^а-яё\s]/ig, '');
        units.value = units.value.replace(/[^а-яё]/ig, '');
        count.value = count.value.replace(/\D/g, '');
        price.value = price.value.replace(/\D/g, '');
        discount.value = discount.value.replace(/\D/g, '');
    })

    inputCategory.addEventListener('click', () => {
        categoryWrapper.classList.add('category-wrapper_active');

        fetchRequest(`https://jumpy-global-capricorn.glitch.me/api/category`, {
            method: 'GET',
            callback(err, data) {
                if (err) {
                    console.warn(err, data);
                    const clearInput = () => {
                        inputCategory.value = '';
                    }
                    inputCategory.value = 'Ошибка, попробуйте позже...';
                    setTimeout(clearInput, 3000);
                }
                if (data) {
                    dataList.textContent = '';
                    data.map(item => {
                        const option = document.createElement('option');
                        option.classList.add('category-list__option');
                        option.value = item;
                        option.textContent = item;
                        dataList.append(option);
                        
                    });

                    categoryBtn.addEventListener('click', () => {
                        categoryWrapper.classList.toggle('category-wrapper_active');
                    });

                    dataList.addEventListener('click', ({target}) => {
                        if (target.closest('.category-list__option')) {
                            const value = target.value;
                            inputCategory.value = value;
                            categoryWrapper.classList.remove('category-wrapper_active');
                        } 
                    });

                    modalWrapper.addEventListener('click', ({target}) => {
                        if (!target.closest('.category-list__option')) {
                            categoryWrapper.classList.remove('category-wrapper_active');
                        }
                        if (target.closest('.form__input_category')) {
                            categoryWrapper.classList.add('category-wrapper_active');
                        }
                    })
                }
            },
        });
    });

    file.addEventListener('change', () => {
        if (file.files.length > 0) {
            const src = URL.createObjectURL(file.files[0]);
    
            if (file.files[0].size < 1048576) {
                imageWrapper.style.display = 'block';
                preview.src = src;
            } else {
                formError.style.display = 'block';
            }

            imgDelete.addEventListener('click', () => {
                preview.src = '';
                imageWrapper.style.display = 'none';
            })
            
        }
    });

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

    btnReset.addEventListener('click', () => {
        form.reset();
    })

    const formEndShow = (data, variable) => {
        formError.style.display = 'block';
        formError.textContent = `Товар ${variable}, номер товара: ${data.id}`;
        setTimeout(closeModal, 3000);
        form.reset();
    }

    modal.addEventListener('submit', async e => {
        e.preventDefault();

        const productID = document.querySelector('.vendor-code__id').textContent;
        
        const formdata = new FormData(form);
        const dataNew = Object.fromEntries(formdata);
        dataNew.image = await tobase64(dataNew.image);


        if (productID === '') {
            fetchRequest(URL_API, {
                method: 'POST',
                body: {
                    title: title.value,
                    description: spec.value,
                    category: category.value,
                    units: units.value,
                    count: count.value,
                    price: price.value,
                    discount: discount.value,
                    image: dataNew.image,
                },
                callback(err, data) {
                    if (err) {
                        console.warn(err);
                        if (err === 'default') {
                            const elError = document.querySelector('.modal__error');
                            elError.style.display = 'block';
                        }
                        formError.style.display = 'block';
                        formError.textContent = err;
                        return;
                    }
                
                    formEndShow(data, 'добавлен');
                    renderNewRow(data);
                },
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            
        } else {
            fetchRequest(`${URL_API}/${productID}`, {
                method: 'PATCH',
                body: {
                    title: title.value,
                    description: spec.value,
                    category: category.value,
                    units: units.value,
                    count: count.value,
                    price: price.value,
                    discount: discount.value,
                    image: dataNew.image,
                },
                callback(err, data) {
                    if (err) {
                        console.warn(err);
                        if (err === 'default') {
                            const elError = document.querySelector('.modal__error');
                            elError.style.display = 'block';
                        }
                        formError.style.display = 'block';
                        formError.textContent = err;
                        return;
                    }

                    const row = document.querySelector(`[data-id="${productID}"]`).closest('.table__row');
                    row.remove();
                    formEndShow(data, 'изменен');
                    renderNewRow(data);
                },
                headers: {
                    'Content-Type': 'application/json',
                }, 
            })
        }
    });    
};
