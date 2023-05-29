import { addCrmTotalSum } from './modules/totalSum.js';
import elements from './modules/const.js';
import modalFormControl from './modules/rowsControl.js';
import { renderGoods } from './modules/renderGoods.js';

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
        // modalControll();
        deleteRow();
        // formControl(modal, form, tableBody);
        addCrmTotalSum();
        openImage();
    };

    window.tableInit = init;
}


