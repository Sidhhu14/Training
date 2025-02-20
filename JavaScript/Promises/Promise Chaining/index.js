const promise = new Promise((resolve, reject) => {
    let number = 2;
    setTimeout(() => {
        number *= 2;
        resolve(number);
    }, 1000);
});

promise
    .then((res) => {
        console.log('After doubling for the first time ', res);
        return res * 2;
    })
    .then((res) => {
        console.log('After doubling for the second time ', res);
        return res * 2;
    })
    .then((res) => {
        console.log('After doubling for the third time ', res);
        return res;
    });