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

const user = {
  name: "manav",
  address: {
    city: "Delhi",
    pin: 110012,
    location: {
      lat: 25.6,
      lng: 34.7,
    },
  },
};

console.log(user.address.location.lat);

let { lat, lng } = user.address.location;

console.log(lat);

//loops

for (let key in obj) {
  console.log(key);
}

for (let key in obj) {
  console.log(key, obj[key]); // here square brackets will be used
}

console.log(Object.keys(obj)); //Object.keys - arrayL of keys
console.log(Object.entries(obj)); // makes array of arrays

//spread
let obj2 = { ...obj };
console.log(obj2);

console.log(Object.entries(obj));

// deep clone - if obj have nested keys then cloning doesnt truley copy the newsted array

// how to fix

let obj3 = JSON.parse(JSON.stringify(obj));
console.log(obj3);

//if found error in dev tools on browser the fault is always in the key before "."

console.log(user?.address?.location?.let); //optional chaining

const user2 = {
  "first-name": "Manav",
};

let { "first-name": firstname } = user2;

console.log(firstname);

const course = {
  title: "JavaScript",
  duration: "4 weeks",
};

for (let key in course) {
  console.log(key);
}

// dynamic variable assign
const key = "role";
let obj6 = {
  name: "manav",
  [key]: "admin",
};

console.log(obj6);
