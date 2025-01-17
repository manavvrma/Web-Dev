const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// terms
// AJAX - asynchronous javascript and xml
// JSON - javascript object notation

// using async/await
const getFacts = async () => {
  console.log("Getting data...");
  let response = await fetch(URL);
  console.log(response);
  let data = await response.json();
  factPara.innerText = data[3].text;
};

// using promises
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       factPara.innerText = data[2].text;
//     });
// }

btn.addEventListener("click", getFacts);
