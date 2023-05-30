

export const createForm = () => {
    const form = document.createElement('form');
    form.id = 'modal-form';

    form.innerHTML = `
        <fieldset class="fieldset">
            <fieldset class="form__fieldset">
                <fieldset class="form__wrapper form__wrapper_name">
                    <label for="name" class="form__label form__label_name">Наименование</label>
                    <input type="text" id="name" class="form__input" name="title" required>
                </fieldset>
                <fieldset class="form__wrapper form__wrapper_category">
                    <label for="category" class="form__label">Категория</label>
                    <input type="text" class="form__input" id="category" name="category" required>
                </fieldset>
                <fieldset class="form__wrapper form__wrapper_units">
                    <label for="units" class="form__label">Единицы измерения</label>
                    <input type="text" class="form__input" id="units" name="units" required>
                </fieldset>
                <fieldset class="form__wrapper form__wrapper_sale">
                    <label for="sale" class="form__label checkbox">Дисконт</label>
                    <input type="checkbox" class="checkbox__input" id="sale" name="sale">
                    <input type="number" class="form__input form__input_sale" id="sale-in" name="discount" min="1" max="15">
                </fieldset>
                <fieldset class="form__wrapper form__wrapper_spec">
                    <label for="spec" class="form__label">Описание</label>
                    <textarea class="form__input form__input_spec" id="spec" name="spec"></textarea>
                </fieldset>
                <fieldset class="form__wrapper form__wrapper_number">
                    <label for="number" class="form__label">количество</label>
                    <input type="number" class="form__input" min="1" max="100" id="count" name="count" required>
                </fieldset>
                <fieldset class="form__wrapper form__wrapper_price">
                    <label for="price" class="form__label">Цена</label>
                    <input type="number" class="form__input form__input_price" id="price" name="price" required>
                </fieldset>

                <p class="form__warning">Изображение не должно превышать размер 1 Мб</p>
                <label for="image" class="btn label-btn">
                    <input type="file" class="image-input" id="image" name="image" accept="image/*">
                    <span class="image-span">Добавить изображение</span>
                </label>  
            </fieldset>
            <div class="form__images">
                <div class="form__product">
                    <button class="form__basket">
                        <svg width="24" height="30" viewbox="0 0 24 30" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.5334 12.45L12 15.9833L8.45004 12.45L6.10004 14.8L9.65004 18.3333L6.11671 21.8667L8.46671 24.2167L12 20.6833L15.5334 24.2167L17.8834 21.8667L14.35 18.3333L17.8834 14.8L15.5334 12.45ZM17.8334 1.66667L16.1667 0H7.83337L6.16671 1.66667H0.333374V5H23.6667V1.66667H17.8334ZM2.00004 26.6667C2.00004 28.5 3.50004 30 5.33337 30H18.6667C20.5 30 22 28.5 22 26.6667V6.66667H2.00004V26.6667ZM5.33337 10H18.6667V26.6667H5.33337V10Z" />
                        </svg>
                    </button>
                
                    <div class="form__overlay"></div>
                    <img src="img/coffee_machine.png" alt="coffee machine" class="form__image preview">
                </div>
            </div>
        </fieldset>
        
        <div class="form__submit">
            <div class="form__total">
                <p class="form__descr">Итоговая стоимость: </p>
                <span class="form__span form__span_currency">p. </span>
                <span class="form__span form__span_sum"></span>
            </div>
            <button type="submit" class="btn btn__submit">Добавить товар</button>
            <button type="reset" class="btn btn__reset">Отмена</button>
        </div>
    `;

    return form;
}


export const createModal = async (data) => {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalWrapper = document.createElement('div');
    modalWrapper.classList.add('modal__wrapper');

    const btnCloseModal = document.createElement('button');
    btnCloseModal.classList.add('modal__close');
    btnCloseModal.innerHTML = `
        <svg width="24" height="24" viewbox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L22 22" stroke="#6E6893" stroke-width="3" stroke-linecap="round"/>
            <path d="M2 22L22 2" stroke="#6E6893" stroke-width="3" stroke-linecap="round"/>
        </svg>
    `;

    const modalHead = document.createElement('div');
    modalHead.classList.add('modal__head');
    const modalTitle = document.createElement('h2');
    modalTitle.classList.add('modal__title');
    modalTitle.textContent = 'Добавить ТОВАР';

    const modalID = document.createElement('div');
    modalID.classList.add('modal__id');
    const modalNum = document.createElement('div');
    modalNum.classList.add('modal__num');
    modalNum.innerHTML = `
        <p class="modal__descr">id: </p>
    `;
    const vendorCodeID = document.createElement('span');
    vendorCodeID.classList.add('modal__descr', 'modal__descr_number', 'vendor-code__id');
    vendorCodeID.name = 'id';
    modalNum.append(vendorCodeID);

    const btnEditGood = document.createElement('button');
    btnEditGood.classList.add('modal__edit', 'edit');
    btnEditGood.innerHTML = `
        <svg width="14" height="15" viewbox="0 0 14 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6721 3.6456L12.2295 5.20223L10.6721 3.6456ZM11.6736 2.27426L7.46254 6.48534C7.24496 6.70262 7.09657 6.97945 7.03607 7.28093L6.64709 9.22801L8.59417 8.8383C8.89565 8.77801 9.17212 8.63021 9.38977 8.41256L13.6008 4.20149C13.7274 4.07495 13.8278 3.92472 13.8962 3.75938C13.9647 3.59404 14 3.41684 14 3.23788C14 3.05892 13.9647 2.88171 13.8962 2.71637C13.8278 2.55104 13.7274 2.40081 13.6008 2.27426C13.4743 2.14772 13.3241 2.04734 13.1587 1.97886C12.9934 1.91037 12.8162 1.87512 12.6372 1.87512C12.4583 1.87512 12.2811 1.91037 12.1157 1.97886C11.9504 2.04734 11.8002 2.14772 11.6736 2.27426V2.27426Z" stroke="#6E6893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5295 10.6986V12.9045C12.5295 13.2945 12.3746 13.6686 12.0988 13.9444C11.823 14.2202 11.449 14.3751 11.0589 14.3751H2.9706C2.58058 14.3751 2.20652 14.2202 1.93073 13.9444C1.65494 13.6686 1.5 13.2945 1.5 12.9045V4.81618C1.5 4.42616 1.65494 4.0521 1.93073 3.77631C2.20652 3.50052 2.58058 3.34558 2.9706 3.34558H5.17651" stroke="#6E6893" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `;
    modalID.append(modalNum, btnEditGood);
    modalHead.append(modalTitle, modalID);

    const midalLine = document.createElement('span');
    midalLine.classList.add('modal__line');

    const modalError = document.createElement('div');
    modalError.classList.add('modal__error');
    modalError.innerHTML = `
        <button class="modal__close modal__close_error">
            <svg width="24" height="24" viewbox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L22 22" stroke="#6E6893" stroke-width="3" stroke-linecap="round"/>
                <path d="M2 22L22 2" stroke="#6E6893" stroke-width="3" stroke-linecap="round"/>
            </svg>
        </button>
        <img src="icons/close_red.svg" alt="close red" class="modal__img">
        <h3 class="modal__subtitle">Что-то пошло не так</h3>
    `;
    
    const form = createForm();
    

    modalWrapper.append(btnCloseModal, modalHead, midalLine, modalError, form);
    modal.append(modalWrapper);
    document.body.append(modal);

    return {modal, btnCloseModal, vendorCodeID, form};
}


