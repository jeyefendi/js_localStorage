// const myNumber = 42
// localStorage.setItem('number', myNumber)
// console.log(localStorage.getItem('number'))

const object = {
    name: "Jeyhun",
    age: 20
}

localStorage.setItem('person', JSON.stringify(object))
const raw = localStorage.getItem('person');
const person = JSON.parse(raw)
person.name = "Anastasiia"
// console.log(person);