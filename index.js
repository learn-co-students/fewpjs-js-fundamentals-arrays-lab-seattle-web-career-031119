// Write your solution here!
'use strict'

let pets = ["Milo", "Otis", "Garfield"];



let append = pets.slice();
append.push('Odie');

let prepend = pets.slice();
prepend.unshift('Odie');

let removeLast = pets.slice();
removeLast.pop();

let removeFirst = pets.slice();
removeFirst.shift();
