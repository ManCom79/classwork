let button = document.getElementById("button");

button.addEventListener("click", function storyTeller() {
  let who = document.getElementById("who").value;
  let what = document.getElementById("what").value;
  let when = document.getElementById("when").value;
  console.log(`${who} was a really strong ${what} in the ${when}.`);
});
