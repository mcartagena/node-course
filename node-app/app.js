const fs = require('fs')

fs.writeFileSync('notes.txt','This file was created by Node.js!')

// Challenge: Append a message to notes.txt

// 1.- Use appendFileSync to append to the file
// 2.- Run the script
// 3.- Check your work by opening the file and version the append text

try {
  fs.appendFileSync('notes.txt','data to append')
  console.log('The data to append was appended to file')
} catch (error) {
  console.log('There was an error: ', error)
}