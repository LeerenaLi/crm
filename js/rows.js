import { addCrmTotalSum } from './modules/totalSum.js';
import modalFormControl from './modules/rowsControl.js';
import { renderGoods } from './modules/renderGoods.js';
import { searchControll } from './modules/renderSearch.js';

const {
    deleteRow,
    openImage,
} = modalFormControl;

{
    const init = () => {
        renderGoods();
        searchControll();
        deleteRow();
        addCrmTotalSum();
        openImage();
    };

    window.tableInit = init;
}


