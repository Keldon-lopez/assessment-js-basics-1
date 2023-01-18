///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
const galaAcres = [5, 2, 4, 3, 6, 2, 4];
const pinkAcres = [1, 5, 4, 2, 1, 5, 4];

const fujiPrice = 0.89;
const galaPrice = 0.64;
const pinkPrice = 0.55;

// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
// I am first going to define my variables for all the totals
let totalAcres = 0;
let fujiTotals = 0;
let galaTotals = 0;
let pinkTotals = 0;

//I will first get the total for fujiAcres
for (let index = 0; index < fujiAcres.length; index++) {
  fujiTotals += fujiAcres[index];
  //   console.log(fujiTotals);
}

// I am now getting the total for picked for galaAcres
for (let index = 0; index < galaAcres.length; index++) {
  galaTotals += galaAcres[index];
  // console.log(galaTotals);
}

//   lastly getting the total for picked for pinkAcres
for (let index = 0; index < pinkAcres.length; index++) {
  pinkTotals += pinkAcres[index];
  // console.log(pinkTotals);
}

// Now I add them all to totalAcres and log totalAcres
totalAcres += fujiTotals;
totalAcres += galaTotals;
totalAcres += pinkTotals;
console.log("Total number of acres picked", totalAcres, "acres.");

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
// I just need to take the total acres and divide it by the total number of days which is 7 days

let averageDailyAcres = totalAcres / 7;
console.log(
  "Average daily acres picked over 7 days is",
  averageDailyAcres,
  "acres."
);

// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174;
let days = 0;

// CODE HERE
// I created a while loop that first adds 1 to days and then subtracts 7 from acresLeft;

while (acresLeft > 0) {
  days += 1;
  acresLeft -= 7;
}
console.log(
  "It should take",
  days,
  "days on average to finish the remaining acres."
);

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

// I am first gonna comment the acres on the above lines so I don't need to scroll
// const fujiAcres = [2, 3, 3, 2, 2, 2, 1];
// const galaAcres = [5, 2, 4, 3, 6, 2, 4];
// const pinkAcres = [1, 5, 4, 2, 1, 5, 4];
// I uncommented the provided empty arrays and used a for loop to push the amount of acres picked times 6.5 tons to get the amount of tons picked per day.
// I also put console logs so I could test that each loop was working as intended.

let fujiTons = [];
let galaTons = [];
let pinkTons = [];

for (let index = 0; index < fujiAcres.length; index++) {
  fujiTons.push(fujiAcres[index] * 6.5);
  //   console.log(fujiTons);
}
console.log("Daily total in tons of Fuji Apples picked ", fujiTons);

for (let index = 0; index < fujiAcres.length; index++) {
  galaTons.push(galaAcres[index] * 6.5);
  //   console.log(galaTons);
}
console.log("Daily total in tons of Gala Apples picked ", galaTons);

for (let index = 0; index < fujiAcres.length; index++) {
  pinkTons.push(pinkAcres[index] * 6.5);
  //   console.log(pinkTons);
}
console.log("Daily total in tons of Pink Apples picked ", pinkTons);

// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE

let fujiTotalTons = 0;
let galaTotalTons = 0;
let pinkTotalTons = 0;

// let fujiPounds = 0;
// let galaPounds = 0;
// let pinkPounds = 0;

//I will first get the total tons the same way I got the total acres then take the total tons times 2000 to get the total pounds for each for loop

for (let index = 0; index < fujiTons.length; index++) {
  fujiTotalTons += fujiTons[index];
  // console.log("Total Fuji tons",fujiTotalTons);
}
let fujiPounds = fujiTotalTons * 2000;
console.log("There are", fujiPounds, "pounds of Fuji Apples.");

for (let index = 0; index < galaTons.length; index++) {
  galaTotalTons += galaTons[index];
  //   console.log("Total Gala tons",galaTotalTons);
}
let galaPounds = galaTotalTons * 2000;
console.log("There are", galaPounds, "pounds of Gala Apples.");

for (let index = 0; index < pinkTons.length; index++) {
  pinkTotalTons += pinkTons[index];
  //   console.log("Total Pink tons",pinkTotalTons);
}
let pinkPounds = pinkTotalTons * 2000;
console.log("There are", pinkPounds, "pounds of Pink Apples.");

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

// I first commented the prices here to make it easier to see the variable then times the pounds by the price to get the profit for each and logged them

// const fujiPrice = 0.89;
// const galaPrice = 0.64;
// const pinkPrice = 0.55;

let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

console.log("Total Fuji Apple Profit $",fujiProfit);
console.log("Total Gala Apple Profit $",galaProfit);
console.log("Total Pink Apple Profit $",pinkProfit);

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
// to get the total profit I just need to add all of them together
let totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log("Total Profit of all Apples is $",totalProfit);