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

fetchResource(
  "https://jsonplaceholder.typicode.com/users",
  (users) => {
    console.log("Users found: ", users);
    fetchResource(
      "https://jsonplaceholder.typicode.com/todos",
      (todos) => {
        console.log("Todos found ", todos);
        fetchResource(
          "https://jsonplaceholder.typicode.com/posts",
          (posts) => {
            console.log("Posts found ", posts);
          },
          failureCallback
        );
      },
      failureCallback
    );
  },
  failureCallback
);
