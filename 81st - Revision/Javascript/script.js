// objects

let obj = {
  name: "manav",
  age: 20,
  hobby: "art",
};

console.log(obj.name);
console.log(obj["name"]);

let aa = "name";
console.log(obj.aa); // this wont happen will give undefined

// this is how to do

console.log(obj[aa]);
