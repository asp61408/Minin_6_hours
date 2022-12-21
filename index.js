"use strict";


// alert('Hello!')

// prompt('fjfjff')

// let a = 10
// console.log(a++)
// console.log(++a)



/* Number */

// let num = '40'
// console.log(parseInt(num) + 2)
// console.log(Number(num) + 2)
// console.log(+num + 2)
// console.log(Number.parseInt(num) + 2)

// const stringInt = '42'
// const stringFloat = '42.42'

// console.log(parseInt(stringInt))
// console.log(parseFloat(stringFloat))

// console.log(parseFloat(stringInt))
// console.log(parseInt(stringFloat))

// console.log(0.4 + 0.2)
// console.log(.4 + .2)
// console.log(+(.4 + .2).toFixed(1))
// console.log(parseFloat(.4 + .2).toFixed(1))

// const a = parseFloat((.4 + .2).toFixed(1))
// console.log(typeof a)
// console.log(a)


/* Randomizer */

// function mathRandomBetween(max, min) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }

// console.log(mathRandomBetween(1, 33))




/* String */

// function logPerson(s, name, age) {
//     if (age < 0) {
//         age = 'Dont burn!'
//     }
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }

// const personName = 'Alex'
// const personName2 = 'Max'
// const personAge = 48
// const personAge2 = -20

// const output = logPerson`Имя: ${personName}, возраст: ${personAge}!`
// const output2 = logPerson`Имя: ${personName2}, возраст: ${personAge2}!`
// console.log(output)
// console.log(output2)



/* function */


/* timeOut -- interval */

// let counter = 0                       /* Начало отсчета */
// const interval = setInterval(() => {
//     if (counter === 5) {              /* Конец счета */
//         clearInterval(interval)       /* Очистка счета */
//     } else {
//         console.log(++counter)        /* Счет ++ */
//     }
// }, 1000)                              /* Интервал 1000мс */


// /* Не выходит из цикла, зависает */

// // let counter2 = 5                      /* Начало отсчета */
// // const interval2 = setTimeout(() => {  /* Включает timeout */
// //     setInterval(() => {
// //         if (counter2 <= 0) {          /* Конец счета */
// //             clearInterval(interval2)  /* Очистка счета */
// //         } else {
// //             console.log(--counter2)   /* Счет -- */
// //         }
// //     }, 1000)                          /* Интервал 1000мс */
// // }, 5100)                              /* Таймаут 5100мс */


// /* Работает, выходит из цикла самостоятельно */

// let counter2 = 5                      /* Начало отсчета */
// const interval2 = setInterval(() => { /* Включает отсчет */
//     setTimeout(() => {                /* Включает таймаут */
//         if (counter2 === 0) {          /* Конец счета */
//             clearInterval(interval2)  /* Очистка счета */
//         } else {
//             console.log(--counter2)   /* Счет -- */
//         }
//     }, 5100)                          /* Таймаут 5100мс */
// }, 1000)                              /* Интервал 1000мс */



/* Параметры по умолчанию */

// const sum = (a = 40, b = a * 2) => a + b

// console.log(sum(48, 4))                   /* => 52 */
// console.log(sum())                        /* => 120 */

// function sumAll(...all) {                 /* ... оператор */
//     let result = 0
//     for (let num of all) {
//         result += num
//     }
//     return result
// }

// const res = sumAll(1, 2, 4, 5, 8)
// console.log(res)                          /* => 20 */


/* Замыкания */

// function createMember(name) {
//     return function(lastName) {
//         console.log(name + ' ' + lastName)
//     }
// }

// const logWithLastName = createMember('Alex')
// console.log(logWithLastName('Ship'))
// console.log(logWithLastName('Ivanov'))



/* Array */

// const text = 'Привет, мы изучаем JavaScript'
// console.log(text)                   /* 'Привет, мы изучаем JavaScript' */
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)            /* tpircSavaJ меачузи ым ,тевирП */
// const reverseText2 = reverseText.split('').reverse().join('')
// console.log(reverseText2)           /* 'Привет, мы изучаем JavaScript' */

/* 
.split() превращает string to array,
.reverse() переворачивает array,
.join() превращает array to string
*/



// const people = [
//     {name: 'Alex', budget: 4200},
//     {name: 'Xenia', budget: 3500},
//     {name: 'Abu', budget: 1700}
// ]

// const index = people.findIndex(function(person) {
//     return person.budget === 3500
// })
// console.log(people[index])                      /* { name: 'Xenia', budget: 3500 } */


// const person = people.find(function(person) {
//     return person.budget === 3500
// })
// console.log(person)                             /* { name: 'Xenia', budget: 3500 } */


// const person = people.find(person => person.budget === 3500)
// console.log(person)                             /* { name: 'Xenia', budget: 3500 } */
// console.log(person.name)                        /* Xenia */


// let findedPerson

// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)                        /* { name: 'Xenia', budget: 3500 } */



// const cars = ['Mazda', 'Ford', 'Mercedes', 'Nissan']

// const upperCar = cars.map(cars => cars.toUpperCase())
// console.log(upperCar)                                  /* [ 'MAZDA', 'FORD', 'MERCEDES', 'NISSAN' ] */
// console.log(cars)                                      /* [ 'Mazda', 'Ford', 'Mercedes', 'Nissan' ] */


// const numFib = [1, 1, 2, 3, 5, 8, 13]

// const powFib/*  = numFib.map(num => num ** 2)              /* Коллбэк функция */
// console.log(/* powFib)                                     /* [ 1, 1, 4, 9, 25, 64, 169 ] */


// const pow = num => num ** 2                   /* Создаем стрелочную функцию */
// const powFib = numFib.map(pow)                /* Передаем ее в метод (!!! НЕ ВЫЗЫВАЕМ !!!) */
// console.log(powFib)                                     /* [ 1, 1, 4, 9, 25, 64, 169 ] */

// const filteredNumFib = powFib.filter(num => num > 20)       /* .filter фильтует массив */

// console.log(filteredNumFib)                         /* [ 25, 64, 169 ] */




// const people = [
//     {name: 'Alex', budget: 4200},
//     {name: 'Xenia', budget: 3500},
//     {name: 'Abu', budget: 1700}
// ]

// const allBudget = people
//     .filter(person => person.budget > 2000)           /* фильтруем больше 2000 */
//     .reduce((acc, person) => {                        /* складываем отфильтрованные в acc */
//         acc += person.budget
//         return acc
// }, 0)                                                 /* .reduce((acc, person) => person, 0)  */
// console.log(allBudget)                     /* 7700 */





/* Objects */


// const person = {
//     name: 'Alex',
//     age: 48,
//     isProgrammer: true,
//     language: ['ru', 'en'],
//     // 'complex key': 'comlex value',           /* ключ: с пробелом в названии */
//     // ['key_' + (3 + 1)]: 'computed key',      /* вычисляемый ключ */
//     greet() {
//         console.log('greet from person')
//     }
// }

// console.log(person.greet())          /* greet from person    undefined */
// person.greet()                       /* greet from person */
// console.log(person['key_4'])         /* computed key */
// person.language.push('by')           /* добавляем значение в массив с ключом language */
// delete person['key_4']               /* удаляем ключ(key_4): значение(computed key) */
// person.age++                         /* изменяем значение ключа: (можно переназначить с помощью = ) */
// console.log(person)

// const {name, age: personAge, language} = person      /* деструктуризация объекта */
// console.log(name, personAge, language)

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {                  /* Защита -- Проверка */
//         console.log(`${key}: ${person[key]}`)
//         console.log('key:', key)
//         console.log('value:', person[key])
//     }
// }


// Object.keys(person).forEach((key) => {
//     console.log('key:', key)
//     console.log('value:', person[key])
//     console.log(`${key}: ${person[key]}`)
// })


// const logger = {
//     keys() {
//         console.log('Object keys:', Object.keys(this))
//     },
//     keysAndValues() {
//         Object.keys(this).forEach(key => {
//             console.log(`'${key}': ${this[key]}`)
//         })
//     },
//     withParams(top = false, beetwen = false, bottom = false) {
//         if (top) {
//             console.log('---------Start----------')
//         }
//         Object.keys(this).forEach((key, index, array) => {
//             console.log(`'${key}': ${this[key]}`)
//             if (beetwen && index !== array.length - 1) {
//                 console.log('------------------------')
//             }
//         })
//         if (bottom) {
//             console.log('----------End-----------')
//         }
//     }
// }
// logger.withParams.call(person, true, true, true)
// logger.withParams.apply(person, [true, true, true])

// const bound = logger.keys.bind(person)
// bound()
// console.log(bound())
// logger.keysAndValues.call(person)
// logger.keysAndValues.call(logger)
// logger.keysAndValues.call({a: 1, b: {c: 2, g: {a:5}}})




/* Async, Await */



/* DOM */



// const heading = document.getElementById('hello')
// const greeting = document.getElementById('morning')
// const motivationText = document.getElementById('example')
// // const heading2 = document.getElementsByClassName('h2-class')[0]  /* html-'h2-class' !OLD METHOD! */
// // const heading2 = document.getElementsByName('h2')[0]  /* !!! OLD METHOD !!! */
// // const heading2 = document.querySelector('h2')
// // const heading3 = heading2.nextElementSibling()
// // console.log(heading3)

// setTimeout(() => {
//    addStylesToH1(heading)
//     setInterval(() => {
//             if (heading.style.color === 'red') {
//                     heading.style.color = 'black'
//                     heading.style.backgroundColor = 'red'
//                 } else {
//             heading.style.color = 'red'
//             heading.style.backgroundColor = 'black'
//         }
//         // heading.style.color = 'red' ? 'black' : 'red'
//         // heading.style.backgroundColor = 'black' ? 'red' : 'black'
//     }, 1000)
//     // setInterval(() => {
//         //     heading.style.color = 'black' ? 'red' : 'black'
//         //     heading.style.backgroundColor = 'red' ? 'black' : 'red'
//     // }, 1500)
// }, 500)


// // setTimeout(() => {
// //    addStylesToMon(greeting)
// //     setInterval(() => {
// //         if (greeting.style.color === 'green') {
// //             greeting.style.color = 'orange'
// //             greeting.style.backgroundColor = 'green'
// //         } else {
// //             greeting.style.color = 'green'
// //             greeting.style.backgroundColor = 'orange'
// //         }
// //         // greeting.style.color = 'green' ? 'orange':'green'
// //         // greeting.style.backgroundColor = 'orange' ? 'green' : 'orange'
// //     }, 500)
// //     // setInterval(() => {
// //     //     greeting.style.color = 'orange' ? 'green':'orange'
// //     //     greeting.style.backgroundColor = 'green' ? 'orange' : 'green'
// //     // }, 1500)
// // }, 1000)

// setTimeout(() => {
//         addStylesToPar(motivationText)
//     setInterval(() => {
//             if (motivationText.style.color === 'red') {
//                     motivationText.style.color = 'black'
//                     motivationText.style.backgroundColor = 'red'
//                 } else {
//             motivationText.style.color = 'red'
//             motivationText.style.backgroundColor = 'black'
//         }
//     }, 1000)
// }, 1500)



// function addStylesToH1(node) {
//     node.textContent = 'JavaScript'
//     node.style.color = 'red'
//     node.style.textAlign = 'center'
//     node.style.backgroundColor = 'black'
//     node.style.paddingTop = '2rem'
//     node.style.fontSize = '150px'
//     node.style.margin = '0 auto 10px'
//     node.style.height = '50vh'
// }

// // function addStylesToMon(node) {
//     //     node.textContent = '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'
//     //     node.style.color = 'green'
//     //     node.style.backgroundColor = 'orange'
//     //     node.style.margin = '0 auto'
//     //     node.style.padding = '2rem'
//     //     node.style.textAlign = 'center'
//     //     node.style.fontSize = '100px'
// //     node.style.height = '20vh'
// // }

// function addStylesToPar(node) {
//         node.textContent = 'Время для УЧЕБЫ, Бро!!!'
//         node.style.color = 'red'
//         node.style.backgroundColor = 'black'
//         node.style.textAlign = 'center'
//     node.style.padding = '2rem'
//     node.style.fontSize = '200px'
//     node.style.margin = '10px auto'
//     node.style.height = '50vh'
//     // node.style.height = '40vh'
// }



const heading = document.getElementById('hello')
const greeting = document.getElementById('morning')
const motivationText = document.getElementById('example')
const endCourse = 'Курс пройден'
// const heading2 = document.querySelector('h2')
// const heading3 = heading2.nextElementSibling()
// console.log(heading3)

setTimeout(()=> {
    addStylesTo(heading, 'HTML5', 'grey')
    setInterval(() => {
        if (heading.style.backgroundColor === 'black') {
            heading.style.backgroundColor = heading.style.color
            heading.style.color = 'black'
        } else {
            heading.style.color = 'grey'
            heading.style.backgroundColor = 'black'
        }
    }, 1500)
}, 1000)

setTimeout(()=> {
    addStylesTo(greeting, 'CSS3', 'orange')
    setInterval(() => {
        if (greeting.style.backgroundColor === 'black') {
            greeting.style.backgroundColor = greeting.style.color
            greeting.style.color = 'black'
        } else {
            greeting.style.backgroundColor = 'black'
            greeting.style.color = 'orange'
        }
    }, 1500)
}, 1500)

setTimeout(()=> {
    addStylesTo(motivationText, 'JavaScript')
    setInterval(() => {
        if (motivationText.style.color === 'red') {
            motivationText.style.color = 'black'
            motivationText.style.backgroundColor = 'red'
        } else {
            motivationText.style.color = 'red'
            motivationText.style.backgroundColor = 'black'
        }
    }, 1500)
}, 2000)


function addStylesTo(node, text, color = 'red', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = 'black'
    node.style.padding = '2rem'
    node.style.fontSize = '150px'
    node.style.margin = '10px auto'
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading.textContent === 'HTML5') {
        heading.textContent = endCourse
    } else {
        heading.textContent = 'HTML5'
    }
}

greeting.onclick = () => {
    if (greeting.textContent === 'CSS3') {
        greeting.textContent = endCourse
    } else {
        greeting.textContent = 'CSS3'
    }
}

motivationText.onclick = () => {
    if (motivationText.textContent === 'JavaScript') {
        motivationText.textContent = 'В процессе обучения'
    } else {
        motivationText.textContent = 'JavaScript'
    }
}

// heading.addEventListener('click', () => {           /* работает как heading.onclick */
//     if (heading.textContent === 'HTML5') {
//         heading.textContent = endCourse
//     } else {
//         heading.textContent = 'HTML5'
//     }
// })