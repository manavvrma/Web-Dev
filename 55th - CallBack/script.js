console.log("manav is a hacker");
console.log("manav is not hacker");

setTimeout(() => {
  console.log("i am inside set timeout");
}, 0);

console.log("i am outside set timeout");

const callback = (arg) => {
  console.log(arg);
};

const loadScript = (src, callback) => {
  let sc = document.createElement("script");
  sc.src = src;
  sc.onload = () => callback("Manav");
  document.head.append(sc);
};

loadScript(
  "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",
  callback
);
