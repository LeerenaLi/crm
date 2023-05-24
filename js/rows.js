import {arr} from './modules/data.js';
import {renderGoods} from './modules/render.js';
import control from './modules/control.js';
import {addCrmTotalSum} from './modules/totalSum.js';
import elements from './modules/getElements.js';

const {
    deleteRow,
    modalControll,
    formControl,
    openImage,
} = control;

const {
    tableBody,
    modal,
    form,
} = elements;

{
    const init = () => {
        renderGoods();
        const {closeModal} = modalControll();
        deleteRow();
        formControl(modal, form, tableBody, closeModal);
        addCrmTotalSum(arr);
        openImage();
    };

    window.tableInit = init;
}


