const promise = new Promise((resolve, reject) => {
  const user = { name: "ram", age: 21 };
  setTimeout(() => resolve(user), 1000);
});
promise
  .then((res) => console.log("Name of the user is", res.name))