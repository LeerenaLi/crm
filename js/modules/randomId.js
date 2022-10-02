import elements from './getElements.js';

const {
    spanId,
} = elements;

export const createId = () => {
    const random = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min;
    const randomId = random(100000000, 999999999);

    spanId.textContent = randomId;
    return spanId.textContent;
};

