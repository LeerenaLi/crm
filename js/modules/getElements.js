const tableBody = document.querySelector('.table__body');
const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.btn__submit_srm');
const btnCloseModal = document.querySelector('.modal__close');
const overlayModal = document.querySelector('.modal__overlay');

const form = document.querySelector('#modal-form');

const modalCheckbox = document.querySelector('.checkbox__input');
const modalInputDiscount = document.querySelector('.form__input_sale');
const crmSum = document.querySelector('.srm__span_sum');
const spanId = document.querySelector('.vendor-code__id');
const modalSum = document.querySelector('.form__span_sum');
const formError = document.querySelector('.form__warning');

export default {
    tableBody,
    modal,
    btnOpenModal,
    btnCloseModal,
    overlayModal,
    form,
    modalCheckbox,
    modalInputDiscount,
    crmSum,
    spanId,
    modalSum,
    formError,
};
