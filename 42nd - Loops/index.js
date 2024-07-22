console.log("Loops in javascript");

let a = 1;

// for loop

// for (let i = 0; i < 11; i++) {
//   console.log(a + i);
// }

let obj = {
  name: "Manav Verma",
  job: "Google",
  role: "SWE",
};

for (const key in obj) {
  const element = obj[key];
  console.log(key, ": ", element);
}

for (const m of "Manav Verma") {
  console.log(m);
}

// while loop

let i = 0;
while (i < 6) {
  console.log(i);
  i++;
}

// do while loop

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 6);
