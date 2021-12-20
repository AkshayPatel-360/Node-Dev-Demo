const fs = require('fs')

// const book ={
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.author)


const readBuffer = fs.readFileSync('1-json.json')
const personJSON = readBuffer.toString()
const personData = JSON.parse(personJSON)

personData.name = 'Akki'
personData.age = 23

const newPersonJSON = JSON.stringify(personData)
fs.writeFileSync('1-json.json',newPersonJSON)






