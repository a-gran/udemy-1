// Циклы while, do while, for, for of, for in

console.log('---- while 1 ----')
let i = 0
while (i < 3) {
  console.log(i)
  i++
}

console.log('---- while 2 ----')

let j = 0
while (j++ < 3) {
  console.log(j)
}

console.log('---- while 3 ----')

let k = 7
while (k-- > 3) {
  console.log(k)
}

console.log('---- while 4 ----')

let n = 7
while (n--) {
  console.log(n)
}

console.log('---- do while 1 ----')

let x = 10
do {
  console.log(x)
  x--
} while (x > 4)

console.log('---- for 1 ----')

for (let a = 0; a < 10; a++) {
  if (a == 5) {
    continue
  }
  if (a == 8) {
    break
  }
  console.log(a)
}

console.log('---- for 2 ----')

for (let b = 0; b < 5; ) {
  console.log(b)
  b++
}

console.log('---- for 3 ----')

let c = 9
for (; c > 5; c--) {
  console.log(c)
}

console.log('---- for 4 ----')

let arr1 = 'JavaScript'
for (let d = 0; d < arr1.length; d++) {
  console.log(arr1[d])
}

console.log('---- for 5 ----')

let arr2 = ['JavaScript', 'React', 'HTML', 'CSS']
for (let f = 0; f < arr2.length; f++) {
  console.log(arr2[f].toUpperCase())
}

console.log('---- for 6 ----')

const users = [
  {
    name: 'Alex',
    age: 26,
    work: 'developer',
  },
  {
    name: 'Ivan',
    age: 20,
    work: 'developer',
  },
  {
    name: 'Elena',
    age: 31,
    work: 'designer',
  },
  {
    name: 'Timur',
    age: 41,
    work: 'CEO',
  },
]

const usersObj = {}

for (let g = 0; g < users.length; g++) {
  usersObj[users[g].name] = users[g]
}

console.log(usersObj['Timur'])
