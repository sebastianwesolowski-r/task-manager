export const add0ToNumber = number => {
    if(number < 10) {
        return `0${number}`;
    }
    return number;
};