/**
 * Получает индексы чисел в массиве, сумма которых равна 0, возвращает [-1, -1] в если таких чисел нет O(n^2)
 * @param arr - массив чисел
 * @returns {[number, number]} - индексы
 */
const getIndexesWithSumEqualsZero = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [i, j];
            }
        }
    }
    return [-1, -1];
};

/**
 * Получает индексы чисел в массиве, сумма которых равна 0, возвращает [-1, -1] в если таких чисел нет O(n)
 * @param arr - массив чисел
 * @returns {[number, number]} - индексы
 */
const getIndexesWithSumEqualsZeroV2 = (arr) => {
    const usedNumbers = {};
    for(let idx = 0; idx < arr.length; idx++) {
        const currentNumber = arr[idx];
        const requiredNumber = 0 - currentNumber;
        if (usedNumbers[requiredNumber]) {
            return [usedNumbers[requiredNumber], idx];
        } else {
            usedNumbers[currentNumber] = idx;
        }
    }
    return [-1, -1];
};

/**
 * Сорирует массив объектов по указанному свойству. значение свойств лежит в диапазоне [1; maxValue)
 * @param {Object[]} objectsArr - массив объектов
 * @param {string} property - свойство по которому производится сортировка
 * @param {number} maxValue - максимальное значение
 * @returns {Object[]} - массив отсортированый по возрастанию значения свойства property
 */
const sortObjectsByProp = (objectsArr, property, maxValue) => {
    let pointer = 0;
    for (let value = 1; value <= maxValue; i++) {
        for (let j = pointer; j <= objectsArr.length; j++) {
            if (objectsArr[j][property] === value) {
                const tmp = objectsArr[pointer];
                objectsArr[pointer] = objectsArr[j];
                objectsArr[j] = tmp;
                pointer++;
            }
        }
    }
    return objectsArr;
};
