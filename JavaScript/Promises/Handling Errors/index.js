const promise = new Promise((resolve, reject) => {
    let message = 'Something went wrong';
    setTimeout(() => reject(message), 2000);
});
promise
    .then((res) => console.log(res))
    .catch((err) => console.log(err));