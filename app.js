/*
Q1. Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223 
*/

// function reverse(num){
//     num = num.toString().split("").reverse().join("");
//     console.log(num)
// }

// reverse(32243);

/*Q2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.*/

// function palindrome(word){
//    word =  word.toLowerCase();
//     let newWOrd = word.split("").reverse().join("").toLowerCase();
//     console.log(newWOrd, word)
//     console.log(word == newWOrd);
// }

// palindrome("Rachit");

/*Q3.       
Example string : 'dog'
Expected Output : d,do,dog,o,og,g*/
// function combinations(word){
//     let wordBank = [];
//     for(let i =0; i<word.length; i++){
//         for(let j = i+1; j<=word.length; j++){
//             wordBank.push(word.slice(i,j));
//         }
//     }
//     console.log(wordBank);
// }

// combinations("Rachit");

/*Q4. Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.*/

// function arranger(word){
//     word = word.toLowerCase().split("").sort().join("");
//     return word;
// }

// console.log(arranger("QMZX"));

/* Q5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox '*/

// function capatilization(str){
//     str =  str.split(" ");
//     let result = [];
//     for(let x of str){
//        let y  = x[0].toUpperCase() + x.slice(1, x.length);
//         result.push(y);
//     }
//     result = result.join(" ");

//     console.log(result)

// }

// capatilization("my name is khilawan singh")

/*Q6. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/

// function longestWordFinder(str) {
//   str = str.split(" ");
//   let longestWord = "";
//   let maxlength = 0
//   for(let x of str){
//     if(x.length > maxlength){
//       maxlength = x.length;
//       longestWord = x;
//     }
    
//   }

//   console.log(longestWord)
//   console.log(maxlength)
// }

// longestWordFinder("Rachit GUptaaaaa SINN");


/*Q7 Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
Example string : 'The quick brown fox'
Expected Output : 5*/

// function vowelCounter(text){
// let vowelnumber = 0;
// text = text.toLowerCase().split(" ");
// for(let x of text){
//   for(let i =0; i<x.length; i++){
//     if(x[i] === "a" || x[i]=== "e" || x[i]=== "i" || x[i]=== "o" || x[i]==="u"){
//       vowelnumber++;
//     }
//   }
// }  
// console.log(vowelnumber)
// }

// vowelCounter("Hello Mr ABC")


/*Q8 Write a JavaScript function which returns the n rows by n columns identity matrix.*/

// function matrixGenerator(num){
//     for(let i=0; i<num; i++){
//       for(let j=0; j<num; j++){
//         if(i === j){
//           console.log("0")
//         }
//         else{
//           console.log("1" )
//         }
//       }
//     }
// }

// matrixGenerator(6)

/*Q9 Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4*/


function secondlargest(num_array){
          let maxvalue = 0;
          for(let x of num_array){
            if(x > maxvalue){
              maxvalue = x;
            }
          }
         
}

secondlargest([2,65,68,89,552,65])