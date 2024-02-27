// Write your code in this file!

// define a currentUser variable using let or const
// define and assign or reassign
// I don't anticipate changing the value of the variable so I will use const instead of let

const currentUser = 'Ryan'

// concatenation
// const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!'

// template literal with interpolation
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`

const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`

const shortGreeting = `Welcome, ${currentUser[0]}!`

console.log(currentUser.slice(0, 1))