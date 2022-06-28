// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let arr = [];
let i = 1;
while (i < 6) {
    arr.push(i);
    i++;
}
console.log(arr);

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let arr1 = [];
let j = 1;
do {
  arr1.push(j);
  j++;
} while (j < 6);
console.log(arr1);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let arr2 = [];
for (let k = 1; k < 6; k++) {
  arr2.push(k);
}
console.log(arr2);
// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let arr3 = [];
let l = 10;

while (l > 0) {
  arr3.push(l);
  l--;
}

do {
  arr3.push(l);
  l--;
} while (l > 0);

for (let l = 10; l > 0; l--) {
  arr3.push(l);
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let arr4 = [];
let m = 7;

while (m < 28) {
  arr4.push(m);
  m++;
}

do {
  arr4.push(m);
  m++;
} while (m < 28);

for (let m = 7; m < 28; m++) {
  arr4.push(m);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

let arr5 = [];
let n = 10;

while (n < 101) {
  arr5.push(n);
  n+=10;
}

do {
  arr5.push(n);
  n+=10
} while (n < 101);

for (let n = 10; n < 101; n+=10) {
  arr5.push(n);
}

// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
// This is an infinite loop because the while statement is true, so the loop is going to keep iterating forever.

let counterFour = 1;
while (counterFour > -100) {
  //console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let myArray = [];
let faveVariable = 26;

while (faveVariable > -1) {
  myArray.unshift(faveVariable);
  faveVariable--;
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

for (let i = 0; i <= 100; i++) {
  if (i === 26) {
    console.log(i + ' my favorite number!');
  } else {
    console.log(i + ' not my favorite number');
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:

// This is a question I've asked myself before. When I first learned about loops and how to execute a loop, I had a hard time grasping the concept. I tend to gravitate towards using for loops. But I think as I learn more I'll use while and do..while loops for their intended use cases

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter--) {
    console.log("inside", insideCounter);
  }
  console.log("***********************************");
}
// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
// This exercise was challenging. I don't have a lot of practice with while and do...while loops so I used freeCodeCamp and MDN web docs to get some refreshers. I did enjoy this exercise, though, because of how difficult it was for me. 

// Email your file to us or commit your file to GitHub and email us a link.
