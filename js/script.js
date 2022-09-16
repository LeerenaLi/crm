'use strict';

const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelector('.btn__submit_srm');
const btnCloseModal = document.querySelector('.modal__close');
const overlayModal = document.querySelector('.modal__overlay');
const modalTitle = document.querySelector('.modal__title');
const btnModalEditId = document.querySelector('.modal__edit');
const modalId = document.querySelector('.modal__descr_number');
const modalForm = document.querySelector('#modal-form');

const modalCheckbox = document.querySelector('.checkbox__input');
const modalCheckboxBefore = window.getComputedStyle(modalCheckbox, ':before');
const modalInputDiscount = document.querySelector('.form__input_sale');
const modalTotalSum = document.querySelector('.form__span_sum');

btnOpenModal.addEventListener('click', () => {
    modal.classList.add('active');
    overlayModal.classList.add('active');
});

btnCloseModal.addEventListener('click', () => {
    modal.classList.remove('active');
    overlayModal.classList.remove('active');
});

overlayModal.addEventListener('click', () => {
    modal.classList.remove('active');
    overlayModal.classList.remove('active');
});




