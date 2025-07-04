export const createCardsArray = (lvl) => {
    const cardsArray = [
        'type1',
        'type2',
        'type3',
        'type4',
        'type5',
        'type6',
        'type7',
        'type8',
        'type9',
        'type10'

    ];
    switch (lvl) {
        case 'Лёгкий':
            return cardsArray.slice(0, 4);
            break;
        case 'Средний':
            return cardsArray.slice(0, 6);
            break;
        case 'Сложный':
            return cardsArray.slice(0, 8);
            break;
        default:
            break;

    }


}
export const dublicateArray = (Array) => {
    return Array.reduce((res, current) => res.concat([current, current]), []);
}

export const shuffle = (array) => {
    for (let i = 0; i < array.length; i++) {
        let randomIndex = Math.floor(Math.random() * array.length);
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}

