function flatten(mixedArray) {
    if (!Array.isArray(mixedArray)) {
        return mixedArray;
    } else {
        let result = [];
        for (let elem of mixedArray) {
            result = result.concat(flatten(elem));
        }
        return result;
    }
}
