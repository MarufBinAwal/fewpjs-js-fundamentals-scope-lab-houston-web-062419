let animal = ""
let two = 2

function myAnimal(animal) {
  const dog = 'dog'
  animal = dog
  return animal
}

function yourAnimal(animal) {
  const cat = 'cat'
  animal = cat
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}

function add2(n) {
  return n + two

  // Feel free to move things around!
  
}