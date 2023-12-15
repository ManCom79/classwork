let styleChangerButton = document.getElementById("styleChangerButton");
let paragraphChangeStyle = document.getElementById("paragraphChangeStyle");

styleChangerButton.addEventListener("click", function () {
  paragraphChangeStyle.style.backgroundColor = "blue";
  paragraphChangeStyle.style.fontSize = "60px";
  paragraphChangeStyle.style.color = "white";
});
