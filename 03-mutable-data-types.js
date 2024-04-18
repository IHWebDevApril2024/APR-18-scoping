// MUTABLE and UNMUTABLE DATA TYPES

// PRIMITIVE DATA TYPES ARE NOT MUTABLE
"This is a string"; // There is no way to change this

let myString = "This is another string inside a variable";

myString = "We are not mutating the string, just overwriting the value";

console.log(myString);

// same thing with numbers, boolenas and all primitive data types

// NON PRIMITIVE DATA TYPES ARE MUTABLE

const cities = [
  "Buenos Aires",
  "Cordoba",
  "Rosario",
  "Mendoza",
  "La Plata",
  "Mar del Plata",
  "San Miguel de Tucuman",
  "Salta",
  "Santa Fe",
  "San Juan",
];

cities.push("Barcelona");

cities[13] = "Sao Paulo"; // this is adding 2 empty items in the array
console.log(cities);

const student = {
  name: "Kilikolo",
  rating: 9001,
  description: "JavaScript prodigy",
};

student.rating = 1000; // we are also mutating the data

console.log(student);

const copyOfCities = cities.map((city) => city); // quick way of creating a copy of an array. So we are not modifying the original one

copyOfCities[0] = "Paris";
console.log(copyOfCities, cities);

const students = [
  {
    name: "John",
    rating: 800,
    description: "Hardworking student",
  },
  {
    name: "Jane",
    rating: 950,
    description: "Dedicated learner",
  },
  {
    name: "Alex",
    rating: 700,
    description: "Passionate coder",
  },
];

// Let's create a copy of this array

const copyOfStudents = students.map((student) => student); // this creates a copy of the array but now a deep copy (objects inside are references)

copyOfStudents[0].name = "Anacleto";

console.log(students);

const deepCopy = structuredClone(students); // simple way of creating a deep copy (that also includes objects inside the array)

deepCopy[0].name = "Andrew";


console.log(deepCopy);