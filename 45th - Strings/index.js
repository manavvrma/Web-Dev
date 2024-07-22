console.log("this is strings file");

let a = "Manav";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

console.log(a.length);

let name1 = "Manav";
let friend = "Rohan";

console.log("His name is " + name1 + " and friend is " + friend);

// template literals
console.log(`His name is ${name1} and friend is ${friend}`);

let b = "shivam";
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);
console.log(b.slice(0, 4));
console.log(b.slice(2));

console.log(b.replace("sh", "69"));

console.log(b.concat(" hello", " Manav"));

let c = "    Manav    ";

console.log(c.trim().concat(" hello", " Manav"));

// string is immutable, cant be changed
