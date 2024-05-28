/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredResults = [];
    arr.forEach((item,index) => {
        if (fn(item,index)) {
            filteredResults.push(item);
        }
    });
    return filteredResults;
};