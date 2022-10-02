export const createBtnsTd = () => {
    const btnsTd = document.createElement('td');
    btnsTd.classList.add('table__cell', 'table__cell_btns');

    const noImgBtn = document.createElement('button');
    noImgBtn.classList.add('no-img');
    noImgBtn.insertAdjacentHTML('beforeend', `
        <svg width="20" height="20" viewbox="0 0 20 20" fill="#6E6893" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 2.13375L17.8663 1.25L1.25 17.8663L2.13375
            18.75L3.38375 17.5H16.25C16.5814 17.4995 16.899 17.3676 17.1333
            17.1333C17.3676 16.899 17.4995 16.5814 17.5 16.25V3.38375L18.75
            2.13375ZM16.25 16.25H4.63375L9.50437 11.3794L10.9913 12.8663C11.2257
            13.1006 11.5435 13.2322 11.875 13.2322C12.2065 13.2322 12.5243
            13.1006 12.7587 12.8663L13.75 11.875L16.25 14.3731V16.25ZM16.25
            12.605L14.6337 10.9888C14.3993 10.7544 14.0815 10.6228 13.75
            10.6228C13.4185 10.6228 13.1007 10.7544 12.8663 10.9888L11.875
            11.98L10.3894 10.4944L16.25 4.63375V12.605Z" />
            <path d="M3.75 13.75V11.875L6.875 8.75187L7.73313 9.61062L8.61812
            8.72563L7.75875 7.86625C7.52434 7.63191 7.20646 7.50027 6.875
            7.50027C6.54354 7.50027 6.22566 7.63191 5.99125 7.86625L3.75
            10.1075V3.75H13.75V2.5H3.75C3.41858 2.50033 3.10083 2.63213
            2.86648 2.86648C2.63213 3.10083 2.50033 3.41858 2.5
            3.75V13.75H3.75Z" />
        </svg>
    `);

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit', 'edit-table');
    editBtn.insertAdjacentHTML('beforeend', `
        <svg width="18" height="19" viewbox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5629 3.86078L15.6394 5.93629L13.5629 3.86078ZM14.8982
            2.03233L9.28343 7.64709C8.99332 7.9368 8.79546 8.3059 8.7148
            8.70789L8.19617 11.304L10.7923 10.7844C11.1942 10.704 11.5629
            10.5069 11.8531 10.2167L17.4678 4.60196C17.6366 4.43324 17.7704
            4.23293 17.8617 4.01248C17.953 3.79203 18 3.55576 18 3.31714C18
            3.07853 17.953 2.84225 17.8617 2.6218C17.7704 2.40136 17.6366
            2.20105 17.4678 2.03233C17.2991 1.8636 17.0988 1.72976 16.8784
            1.63845C16.6579 1.54714 16.4216 1.50014 16.183 1.50014C15.9444
            1.50014 15.7081 1.54714 15.4877 1.63845C15.2672 1.72976 15.0669
            1.8636 14.8982 2.03233V2.03233Z" stroke="#6E6893" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0394 13.2648V16.206C16.0394 16.726 15.8328 17.2248
            15.4651 17.5925C15.0973 17.9602 14.5986 18.1668 14.0786
            18.1668H3.29415C2.77411 18.1668 2.27537 17.9602 1.90765
            17.5925C1.53993 17.2248 1.33334 16.726 1.33334
            16.206V5.42157C1.33334 4.90154 1.53993 4.4028 1.90765
            4.03508C2.27537 3.66735 2.77411 3.46077 3.29415
            3.46077H6.23535" stroke="#6E6893" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    `);

    const corfBtn = document.createElement('button');
    corfBtn.classList.add('corf');
    corfBtn.insertAdjacentHTML('beforeend', `
        <svg width="16" height="16" viewbox="0 0 16 16" fill="#6E6893" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.03125 1.59375H4.875C4.96094 1.59375 5.03125
            1.52344 5.03125 1.4375V1.59375H10.9688V1.4375C10.9688 1.52344
            11.0391 1.59375 11.125 1.59375H10.9688V3H12.375V1.4375C12.375
            0.748047 11.8145 0.1875 11.125 0.1875H4.875C4.18555 0.1875 3.625
            0.748047 3.625 1.4375V3H5.03125V1.59375ZM14.875 3H1.125C0.779297
            3 0.5 3.2793 0.5 3.625V4.25C0.5 4.33594 0.570312 4.40625 0.65625
            4.40625H1.83594L2.31836 14.6211C2.34961 15.2871 2.90039 15.8125
            3.56641 15.8125H12.4336C13.1016 15.8125 13.6504 15.2891 13.6816
            14.6211L14.1641 4.40625H15.3438C15.4297 4.40625 15.5 4.33594
            15.5 4.25V3.625C15.5 3.2793 15.2207 3 14.875 3ZM12.2832
            14.4062H3.7168L3.24414 4.40625H12.7559L12.2832 14.4062Z" />
        </svg>
    `);

    btnsTd.append(noImgBtn, editBtn, corfBtn);
    return btnsTd;
};

export const createRow = ({id, title, category, units, count, price}) => {
    const newTR = document.createElement('tr');
    newTR.classList.add('table__row');

    const tdId = document.createElement('td');
    tdId.classList.add('table__cell');
    tdId.textContent = String(id);

    const tdTitle = document.createElement('td');
    tdTitle.classList.add('table__cell');
    tdTitle.textContent = title;

    const tdCategory = document.createElement('td');
    tdCategory.classList.add('table__cell');
    tdCategory.textContent = category;

    const tdUnits = document.createElement('td');
    tdUnits.classList.add('table__cell', 'table__cell_units');
    tdUnits.textContent = units;

    const tdCount = document.createElement('td');
    tdCount.classList.add('table__cell', 'table__cell_num');
    tdCount.textContent = count;

    const tdPrice = document.createElement('td');
    tdPrice.classList.add('table__cell', 'table__cell_price');
    tdPrice.textContent = String(price);

    const tdTotal = document.createElement('td');
    tdTotal.classList.add('table__cell', 'table__cell_total');
    tdTotal.textContent = String(count * price);

    const btnsTd = createBtnsTd();

    newTR.append(tdId,
            tdTitle, tdCategory, tdUnits, tdCount, tdPrice, tdTotal, btnsTd);

    return newTR;
};


