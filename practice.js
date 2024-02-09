// const btn = document.querySelector("button");
// const inputTag = document.querySelector("input");
// // const ulTag = document.querySelector("ul")

// // btn.addEventListener("click", (e) => {
// //   const liElement = document.createElement("li");
// //   liElement.textContent = inputTag.value;
// //   ulTag.appendChild(liElement)
// // });
// // const textElement = document.querySelector('li');
// // const textElementContent = textElement.innerHTML;
// // console.log(textElementContent);
// // textElement.innerHTML = "Life is good";
// // textElement.innerHTML = `<p>${textElementContent}</p> <p>Work Hard</p>`;
// // const btnElement = document.querySelector('button')

// // btnElement.addEventListener('click', function(evt) {
  
// //   console.log(evt)
// // })
// // const divBox = document.getElementById('box');
// // divBox.addEventListener('click', (e) => {
// //     console.log(this);
// // });
// // const divBox = document.getElementById('box');
// // divBox.addEventListener('click', (e) => {
// //     alert('Hello!');
// // });
// // // const ytLink = document.getElementById('ytLink');
// // // const cb = document.getElementById('cb');
// // // ytLink.addEventListener('click', function(e) {
// // //     if (!cb.checked) {
// // //         e.preventDefault();
// // //     }
// // // }); 
// // // const parent = document.getElementById('parent');
// // // const child = document.getElementById('child');
// // // parent.addEventListener('click', function() {
// // //     console.log('Im parent');
// // // }, true);
// // // child.addEventListener('click', function() {
// // //     console.log('Im child');
// // });
// // const myForm = document.getElementById('myForm');
// // myForm.addEventListener('submit', (e) => {
// //     e.preventDefault();
// //     console.log('Form has been submitted!')
// // });
// const form = document.getElementById('form');
// const handleSubmit = function(e) {
//     console.log('submitted')
// }
// form.addEventListener('submit', handleSubmit)
// const username = document.querySelector('#username')
// const handleInput = e => {
//     console.log('The input: ' + e.data)
//     console.log('The current value of #username: ' + e.target.value)
// }
// username.addEventListener('input', handleInput)

// const handleChange = function(e) {
//     console.log(`${event.target.name} has been changed!`) 
// }
// document.querySelectorAll('#form input').forEach(input => input.addEventListener('change', handleChange))

// conts handleSubmit = function(e) {
//     event.preventDefault()
//     let elements = event.target.elements
//     for(let i = 0; i < elements.length; i++) {
//         console.log(`${elements[i].name}: ${elements[i].value}`)
//     }
// }
// const password = 'CoolChris'

// const handleSubmit = function(e) {
//     event.preventDefault()
//     let elements = event.target.elements
//     if (elements.password.value === password) {
//         console.log('Come on in!')
//     } else {
//         console.log('Sorry, wrong password!')
//     }
// }
// const url = 'https://swapi.dev/api/people'
// console.log(1);
// fetch(url)
// .then(res => {
//     if (res.ok) {
//         console.log(`ok`, 2);
//         console.log(res);
//     }
// })
// .catch(err => console.log('oops something went wrong', err));
// console.log(3);
// const markWeight = 78;
// const markHeight = 1.69;


// const johnWeight = 92;
// const johnHeight = 1.95;

// const bodyMassIndexMark = markWeight / markHeight ** 2;
// const bodyMassIndexJohn = johnWeight / johnHeight ** 2;

// const bmi = bodyMassIndexJohn > bodyMassIndexMark;
// console.log(bodyMassIndexMark, bodyMassIndexJohn, bmi);
// const firstName = 'Shatlyk';
// const job = 'teacher';
// const birthYear = 1978;
// const year = 2024;
// const person = `Im ${firstName}, ${job}, ${year - birthYear} years old`;
// console.log(person);
// const age = 14;

// if (age >= 18) {
//     console.log('You can get driver license')
// // } else{const yearsLeft = 18 - age
// //         console.log(`Wait another ${yearsLeft} years`);
//     };
// if (age < 18) {
//     const yearsLeft = 18 - age;
//     console.log(`Wait another ${yearsLeft} years!`);
// };
// const birthYear = 1978;
// // const century;

// if (birthYear <= 2000) {

// century = 20;}

// else {century = 21;}

// console.log(century);
// const = helloWorld(Hello World) {
//     const str = 'Hello World'
    
//   }
//   console.log(str);
//   var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
// function Dad(){
// const dad = (`${d1}, ${a2}, ${d1}`)
//   return dad;}
// const markWeight = 78;
// const markHeight = 1.69;


// const johnWeight = 92;
// const johnHeight = 1.95;

// const bodyMassIndexMark = markWeight / markHeight ** 2;
// const bodyMassIndexJohn = johnWeight / johnHeight ** 2;
// console.log(bodyMassIndexJohn, bodyMassIndexMark)
// if (bodyMassIndexJohn < 24.19) {
//     console.log(`Johny BMI ${bodyMassIndexJohn} is higher`)
// } else {
//     console.log(`Mark BMI ${bodyMassIndexMark} higher`);
    
// }
// const favourite = prompt('your age');
//     console.log(favourite)
// const dolphinsScore = (96 + 108 +89)/2;
// const koalasScore = (88 + 91 + 110)/2;

// console.log(dolphinsScore, koalasScore); 
// const dolphinsScore = (97 + 112 +101)/2;
// const koalasScore = (109 + 95 + 123)/2;
// const points = 100;

// if (dolphinsScore >= 100 && points >= 100) {
//     console.log('Winner Dolphy')
// }
// else if (koalasScore >= 100 && points >= 100) {
//     console.log('Wninner Koala')
// }
// const dolphinsScore = (97 + 112 +101)/3;
// const koalasScore = (109 + 95 + 106)/3;


// if (dolphinsScore >= koalasScore && dolphinsScore >= 100) {
//     console.log('Winner Dolphy')
// }
// else if (koalasScore >= dolphinsScore && koalasScore >= 100) {
//     console.log('Wninner Koala')
// } else if (dolphinsScore === koalasScore && koalasScore >= 100 && dolphinsScore >= 100) {
//     console.log('Draw');
// } else {console.log('No trophy') };
 


// let a = "1";
// let b = 2;
// let c = b + a;
// console.log(c);
// console.log(typeof c);

// const day = 'sunday';

// switch (day) {
//     case 'monday':
//     case 'tuesday':
//     case 'wednesday':
//     case 'thursday':
//     case 'friday':
//     console.log("Go to coding classes!")
//     break;
//     case 'saturday':
//     case 'sunday':
//     console.log('Enjoy your weekend!')
//     break;
//     default: 
//     console.log('Not a valid day')
// }
// if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
//     console.log('Go to coding classes!')
// } else if (day === 'suturday' || day === 'sunday') {
//     console.log('Enjoy your weekend!')
// } else (console.log('Not a valid day'))
// const me = 'Shatlyk'
// console.log(`I'm ${me}, ${2024-1978} years old!`)
// let age = 19;
// age >= 18 ? console.log('I like dring wine') : console.log('I like drink coke')
// const drink = age >= 18 ? 'drink wine' : 'drink water'
// console.log(drink)

// let drink2;
//  if (age >= 18) {
//     drink2 = "drink wine"

// } else {drink2 = 'drink water'}
// console.log(drink2)
// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
// let billValue = 275
//  let tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
//  console.log(`The bill value was ${billValue}, the tip was ${tip}, the total value ${billValue + tip}`);
// function foodProcessor(apple, orange) {
//     const juice = `Apple juice with ${apple} and ${orange} orange`
//     return juice;
// }
// const appleJuice = foodProcessor (5, 7)
// console.log(appleJuice); 
// function calcAge1(birthYear) {
//     return 2024 - birthYear }
//     const age1 = calcAge1(1978)

// console.log(age1);

// const calcAge2 = function(birthYear) {
//     return 2024 - birthYear }
//     const age2 = calcAge2(1976)

// console.log(age2);
// const yearUntilRetire = function(birthYear, name) {
//     const age = 2024 - birthYear;
//     const retireAge = 65 - age;
//     return `${name} retires after ${retireAge}`;
// }
// console.log(yearUntilRetire(1978, 'Shatlyk'));
const colors = ['red', 'green', 'blue'];
    
colors.forEach(function(color, idx) {
  console.log(`${idx + 1} - ${color}`);
});