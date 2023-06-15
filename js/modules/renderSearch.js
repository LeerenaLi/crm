import elements from './const.js';
import { createRow } from "./createRow.js";
import { fetchRequest } from "./renderData.js";
import { renderGoods } from "./renderGoods.js";

const {
    URL_API,
    tableBody,
} = elements;

export const searchControll = () => {
    const searchInput = document.querySelector('#search');
    const inputWrapper = document.querySelector('.srm__search');
    const errP = document.createElement('p');
    errP.classList.add('error_p');
    inputWrapper.append(errP);

    const updateValue = () => {
        setTimeout(getRequest, 3000);
    }

    const getRequest = () => {
        let value = searchInput.value;

        if (value !== '') {
            fetchRequest(`${URL_API}?search=${value}`, {
                method: 'GET',
                callback(err, data) {
                    if (err) {
                        console.warn(err, data);
                        errP.textContent = 'Что-то пошло не так, попробуйте позже...';
                        return;
                    }
                    if (data) {
                        if (data.length > 0) {
                            tableBody.textContent = '';
                            data.map(item => {
                                tableBody.append(createRow(item));
                            })
                            searchInput.value = '';
                        } else {
                            const clearError = () => {
                                searchInput.value = '';
                                errP.textContent = '';
                            }
                            errP.textContent = 'По вашему запросу ничего не найдено';
                            setTimeout(clearError, 2000);
                            tableBody.textContent = '';
                            renderGoods();
                        }
                        return;
                    }
                },
            })
        }
    }

    searchInput.addEventListener('input', updateValue);
}


