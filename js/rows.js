import { addCrmTotalSum } from './modules/totalSum.js';
import elements from './modules/const.js';
import modalFormControl from './modules/modalFormControl.js';
import { renderGoods } from './modules/renderGoods.js';
import { createModal } from './modules/createModal.js';

const {
    deleteRow,
    modalControll,
    formControl,
    openImage,
} = modalFormControl;

const {
    tableBody,
    modal,
    form,
} = elements;

{
    const init = () => {
        renderGoods();
        // createModal();
        // modalControll();
        deleteRow();
        // formControl(modal, form, tableBody);
        addCrmTotalSum();
        openImage();
    };

    window.tableInit = init;
}


