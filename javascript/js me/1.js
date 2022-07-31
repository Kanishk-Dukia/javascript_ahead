// console.log("this is the one");
// let total =1+3;
// console.log("goodbye");


// console.log("before condition");
// let random = Math.random();

// if (random >= 0.5) {
//     console.log("random is grater than or equal to 0.5");
//     console.log(random);
// }
// if (random < 0.5) {
//     console.log("random is less than 0.5");
//     console.log(random);
// }


// const dayofweek = prompt('enter a day');

// if(dayofweek === 'monday'){
//     console.log("ughh i hate mondays");
// }
// else if(dayofweek === 'saturday'){
//     console.log("i love saturday");
// }
// else if(dayofweek === 'sunday'){
//     console.log("sunday is nice");
// }

// console.log("after condition");

// const password = prompt("please enter your password");
// if(password.length >= 6){
//     console.log("loong enough password")
// }

// -----------------------------------------------------------------------

// let days = [ 'monday', 'tuesday', 'wednesday'];
// days[1][0];  to give t from tuesday
// in string you cant change but in array you can change by calling thier position
// movieline.push('oliver')
// movieline.pop()
// movieline.shift()

// shift work at start of line it removes from start, push work at end of line it adds
// array1.concat(array2);  this adds the 2 arrays, array1 being the First
// let movieline = ['tom','nancy'];
// movieline.includes('tom');   this checks if tom is icludes in array
// movieline.indexOf('nancy'); this tell us index of elemnet in array
// movieline.reverse(); revers whole array
// movieline.slice(1,2);   cuts before 1 and 2 cuts after 2 including 2
// movieline.splice(1,0,"lam");  insets lam at position 1 deleting zero things
// movieline.splice(1,1);  delets 1 element at positin 1
// const gameboard = [['x','0','x'], ['0',null,'x'], ['0','0','x']];
// arrat of 3X3;
// gameboard[1][1] to accees null

// ---------------------------------------------------------------------------

// there can a array of objects or objects of objects
// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// };


// const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`

// ------------------------------------------------------------------------------

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }


// parseInt-->checks if input contain any type of int

// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number!"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//     } else {
//         guess = prompt("Too low! Enter a new guess:");
//     }
// }

// if (guess === 'q') {
//     console.log("OK, YOU QUIT!")
// } else {
//     console.log("CONGRATS YOU WIN!")
//     console.log(`You got it! It took you ${attempts} guesses`)
// }


// const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }

// const seatingChart = [
//     ['Kristen', 'Erik', 'Namita'],
//     ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
//     ['Yuma', 'Sakura', 'Jack', 'Erika']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);

//  -------------------------------------------------------------------

// DEFINE YOUR FUNCTION:

// function rant(message){
//     console.log(message).toUpperCase()

// -------------------------------------------------------------------------------

// const hen  = {
//     name: "Helen",
//     eggCount: 0,
//     layAnEgg(){
//         this.eggCount++;
//         return "EGG";
//     }
// };

// ----------------------------------------------------

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99
//     },
//     {
//         title: 'Stand By Me',
//         score: 85
//     },
//     {
//         title: 'Parasite',
//         score: 95
//     },
//     {
//         title: 'Alien',
//         score: 90
//     }
// ]

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score}/100`)
// })


// const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];



// const firstNames = fullNames.map(function(names){
//            return names.first;
// });

// const add = (a, b) => a + b;


// const square = num => {
//     return num * num;
// }

// const add = function(x,y) {
//     return x + y;
// }

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )      implicit arrow
// const rollDie = () => Math.floor(Math.random() * 6) + 1
      
// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))

// setTimeout(() => {
//     console.log("...are you still there?")
// }, 3000)

// const id = setInterval(() => {
//     console.log(Math.random())
// }, 2000);
// clearInterval(id);


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// numbers.filter(n => {
//     return n < 10
// })

// const movies = [
//     {
//         title: 'Amadeus',
//         score: 99,
//         year: 1984
//     },
//     {
//         title: 'Sharknado',
//         score: 35,
//         year: 2013
//     },
//     {
//         title: '13 Going On 30',
//         score: 70,
//         year: 2004
//     },
//     {
//         title: 'Stand By Me',
//         score: 85,
//         year: 1986
//     },
//     {
//         title: 'Waterworld',
//         score: 62,
//         year: 1995
//     },
//     {
//         title: 'Jingle All The Way',
//         score: 71,
//         year: 1996
//     },
//     {
//         title: 'Parasite',
//         score: 95,
//         year: 2019
//     },
//     {
//         title: 'Notting Hill',
//         score: 77,
//         year: 1999
//     },
//     {
//         title: 'Alien',
//         score: 90,
//         year: 1979
//     }
// ]

// const badMovies = movies.filter(m => m.score < 70)

// const recentMovies = movies.filter(m => m.year > 2000)

// // const goodMovies = movies.filter(m => m.score > 80)
// // const goodTitles = goodMovies.map(m => m.title)

// movies.filter(m => m.score > 80).map(m => m.title);
 
// const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

// exams.every(score => score >= 75)

// some and every use same syntax as of filter,
//  but they return boolean values if evry elemnt
//   satsifes condition every return true same way 
//   if some are true then some return true

// const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

// const total = prices.reduce((total, price) => {
//     return total + price
// })
// const total = prices.reduce((total, price) => total + price)

// const minPrice = prices.reduce((min, price) => {
//     if (price < min) {
//         return price;
//     }
//     return min;
// })

// -------------------------------------------------------------------------------------

// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1
// }

// function greet(person, msg = "Hey there", punc = '!') {
//     console.log(`${msg}, ${person}${punc}`)
// }

// const nums = [13, 4, 5, 21, 3, 3, 1, 2, 7, 6, 4, 2, 53456];
// // SPREAD IN FUNCTIONS
// Math.max(nums) //NaN
// Math.max(...nums) //53456

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

// function raceResults(gold, silver, ...everyoneElse) {
//     console.log(`GOLD MEDAL GOES TO: ${gold}`)
//     console.log(`SILVER MEDAL GOES TO: ${silver}`)
//     console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}`)
// }

// const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// const highScore = scores[0];
// const secondHighScore = scores[1];

// const [gold, silver, bronze, ...everyoneElse] = scores;

// const user = {
//     email: 'harvey@gmail.com',
//     password: 'sCoTt1948sMiTh',
//     firstName: 'Harvey',
//     lastName: 'Milk',
//     born: 1930,
//     died: 1978,
//     bio: 'Harvey Bernard Milk was an American politician and the first openly gay elected official in the history of California, where he was elected to the San Francisco Board of Supervisors',
//     city: 'San Francisco',
//     state: 'California'
// }

// const user2 = {
//     email: 'Stacy@gmail.com',
//     firstName: 'Stacy',
//     lastName: 'Gonzalez',
//     born: 1987,
//     city: 'Tulsa',
//     state: 'Oklahoma'
// }

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;
// const { email, firstName, lastName, city, bio } = user;

// const { born: birthYear, died: deathYear = 'N/A' } = user;

// const { city, state, died = 'N/A' } = user2;

// function fullName(user) {
//     const { firstName, lastName } = user;
//     return `${firstName} ${lastName}`
// }

// function fullName({ firstName, lastName }) {
//     return `${firstName} ${lastName}`
// }

// movies.map(movie => {
//     return `${movie.title} (${movie.year}) is rated ${movie.score}`
// })

// movies.map(({ title, score, year }) => {
//     return `${title} (${year}) is rated ${score}`
// })
