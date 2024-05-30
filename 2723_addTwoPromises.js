/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    let promise = new Promise((resolve,reject) => {
        promise1
            .then(result1 => {
                promise2.then(result2 => {
                    resolve(result1+result2);
                }). catch(error => {
                    reject(error);
                })
            })
            .catch(error => {
                reject(error); // This runs if the promise is rejected
            });
    });
    return promise;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */