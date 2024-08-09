let button = document.getElementById("btn");

button.addEventListener("click", () => {
  //   alert("clicked");
  document.querySelectorAll(".box")[0].innerHTML = "clicked";
});

button.addEventListener("contextmenu", () => {
  document.querySelectorAll(".box")[0].innerHTML = "right clicked";
});

button.addEventListener("keydown", (e) => {
  console.log(e);
});
