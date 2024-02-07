function successCallback(result) {
  console.log("Resource Found!", result);
}

function failureCallback(error) {
  console.log("Resource Not Found", error);
}

function fetchResource(url, successCallback, failureCallback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => successCallback(data))
    .catch((error) => failureCallback(error));
}
// COMMENTED FOR CLEAR CONSOLE FOR PROMISES
// fetchResource(
//   "https://jsonplaceholder.typicode.com/users",
//   (users) => {
//     console.log("Users found: ", users);
//     fetchResource(
//       "https://jsonplaceholder.typicode.com/todos",
//       (todos) => {
//         console.log("Todos found ", todos);
//         fetchResource(
//           "https://jsonplaceholder.typicode.com/posts",
//           (posts) => {
//             console.log("Posts found ", posts);
//           },
//           failureCallback
//         );
//       },
//       failureCallback
//     );
//   },
//   failureCallback
// );

//PROMISES

let randomNumberPromise = new Promise((resolve, reject) => {
  const num = Math.random();
  if (num >= 0.5) {
    resolve("Promise is fullfiled!");
  } else {
    reject("Promise failed!");
  }
});

function handleResolve(value) {
  console.log(value);
}

function handleReject(reason) {
  console.error(reason);
}

randomNumberPromise.then(handleResolve, handleReject);
