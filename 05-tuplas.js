//References: https://medium.com/better-programming/tuples-in-javascript-57ede9b1c9d2


// The basic tuple in languages like Python and Elm looks like this:
//  color = (255, 0, 0)
// In JavaScript we could represent this same data as:
//  const color = [255, 0 , 0]
// Languages like Python also offer support for named tuples:
//  color = (red=255, green=0, blue=0)
// We can achieve the same result in JS with object literals.
//  const color = {red: 255, green: 0, blue: 0}



const tuple = {name: "JC Bombardelli ", email: "jc.bombardelli@live.com", linkedin: 'https://www.linkedin.com/in/jcbombardelli/'}

console.log(tuple['name'])
console.log(tuple['email'])


const tupleList = [tuple, tuple , tuple]
console.log(tupleList[0]['linkedin'])

