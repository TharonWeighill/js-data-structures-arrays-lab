// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield'];


function destructivelyAppendDriver(name) {
    drivers.push(name)
 }

 
function destructivelyPrependDriver(name) {
    drivers.unshift(name)
 }

 function destructivelyRemoveFirstDriver() {
    drivers.shift()
 }

 function destructivelyRemoveLastDriver() {
    drivers.pop()
 }

 function appendDriver(name) {
    return drivers.concat(name)
 }

 function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1)
 }

 function removeFirstDriver() {
    return drivers.slice(1, drivers.length)
 }

 
 function prependDriver(name) {
   return [name, ...drivers]
 }