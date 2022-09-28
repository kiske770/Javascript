//Dates
const now = new Date()
console.log(now)

const bornDate = new Date(1984,11,22)
console.log(now > bornDate)

const day = bornDate.getDate()
const month = bornDate.getMonth() + 1
const year = bornDate.getFullYear()

console.log(day)
console.log(month)
console.log(year)


