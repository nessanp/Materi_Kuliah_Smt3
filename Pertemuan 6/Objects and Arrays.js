// Example of creating an object 
let person =  {
    firstName: ' Nessa',
    lastName: 'Nirmala',
    age: 19,
    edderess: {
        city: 'Cirebon',
        country: 'Indonesia'
    }
}
console.log(person.firtsName) // Nahrul
console.log(person['address']['city']) // Cirebon

// modifying object and adding properties
person.age = 19 // modifying existing property
person.job = 'Enginner'; // Adding a new property

// deleting properties

delete person.age

// arrays 
let fruits = ['apple', 'orange', 'banana', 'avocado']
console.log(fruits[0]) //apple

// modifying array
fruits[1] = 'peer' // Modifying an existing element
fruits.shift() // removes the firts element
fruits.splice(1,2) // removes elements starting from index 1 to 2 (exclusive)

// iterating throught arrays
// for loop
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

// forEacth()
fruits.forEach(function (fruit){
        console.log(fruit)
})

// map()
let uppercasedFruits = fruits.map(function(fruit){
    return fruit.toUpperCase
})
