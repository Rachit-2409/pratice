/* ------------------- Fundamental JS ------------------------ */

/*Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.*/

// function KeyComparison(obj1, obj2){

//    for(let key in obj2){
//         if(!(key in obj1) || obj1[key] !== obj2[key]) return false
//         }
//         return true
//    }

    


// console.log(KeyComparison({a:1,b:2}, {a:1,b:2, c:2}));

/*- -------------------------------------------------------------------------------------*/

/* Write a JavaScript program to copy a string to the clipboard.*/

// function CopytoCLipBoard(st){
//     navigator.clipboard.writeText(st)
// }

// CopytoCLipBoard("Hello")


/*----------------------------------------------------------------------------------------*/

/*Write a JavaScript program to convert a comma-separated value (CSV) string to a 2D array.*/

// function csv2Array(str) {
//     const arr = str.split(',').map(item => item.trim()); 
//     const rows = [];
    
//     for (let i = 0; i < arr.length; i += 3) { 
//         rows.push(arr.slice(i, i + 3));
//     }
    
//     return rows;
// }


// console.log(csv2Array("Age,location,area,1,2,3,4,5,6"));

/* ----------------------------------------------------------------------------------*/

/*Write a JavaScript program to filter out the specified values from a specified array. Return the original array without filtered values.*/

// function Filter(arr, ...elements){
// arr = arr.join(",").split(",")
//   let filteredarr = arr.filter((val) => !elements.includes(val)) 
//     console.log(filteredarr)
// }


// Filter(["a,b,c,d,e,f,d,a,e,f,g"], "a","c","e")

// /*Write a JavaScript program to convert a specified number into an array of digits.*/
// function arrayConvertor(numb){
//     numb = numb.toString().split("");
//     console.log(numb)
// }

// arrayConvertor(12345)


/* ---------------------------------------------------------------------------------*/
/*Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.*/
// function combinator(arr){
//     const input = arr.split('');
//     let x =[];
//     for(let i = 0; i<input.length; i++){
//         for(let j = i+1; j<=input.length; j++ ){
//             let val = input.slice(i,j);
//            x.push(val);
//         }
//     }
//     console.log(x)
// }

// combinator("Rachit")

/*Write a JavaScript program to extract values at specified indexes from a specified array.*/

// function valueExtractor(array, ...indexValue){
//     console.log(array)
//     let newarray = indexValue.map((val) => array[val>array.length ? 0 : val]);
//     console.log(newarray);
// }

// valueExtractor([12,25,25,6,5,658,36,25,660],1,5,60)


/*11. Generate Random Hexadecimal Color Code*/
// function colorGenerator(){
//     let colorValue = "ABCDEF0123456789";
//     let color = ""
//     for(let i = 0; i<6; i++ ){
//         let randomValue = Math.floor(Math.random()*colorValue.length);
//         color += colorValue[randomValue]
//         }

//         console.log("#"+ color)
// }

// colorGenerator()


/*/[^\x20-\x7E]/g*/
/*Write a JavaScript program to remove non-printable ASCII characters from a given string.*/
// function non_printableRemover(str){
//     str =  str.replace(/[^\x20-\x7E]/g, " ");
//     console.log(str)

// }

// non_printableRemover('äÄçÇéÉêw3resouröceÖÐþúÚ')


/*Write a JavaScript program to convert a given string's length to bytes. */

// function lengthtobytes(str){
//     let lengthSize = str.length * 2;
//     console.log(lengthSize + " bytes" );
//     console.log(str.size())
// }

// lengthtobytes("Rachit")

/*Write a JavaScript program to split the values of two given arrays into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
*/

// function Filter(val, compare){
//     let firstBox = [];
//     let secondBox = [];


//     if(val.length == compare.length){
//        for(let i = 0; i<compare.length; i++){
//         if(compare[i]){
//             firstBox.push(val[i])
//         }else{
//             secondBox.push(val[i])
//         }
//        }
//     }
//     else{
//         console.log("Enter Equal Values")
//     }
    

//     console.log(firstBox, secondBox)

// }

// Filter([1,2,3,4,5],[true,  false,true, false, true])

/*Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

*/

//predicate are the function which takes the argument and return result in form of true and false

// function predicateFinder(value){
//     let result = value();
//     console.log(result)
//     if(result == true || result == false){
//         console.log("its a predicate function")
//     }
//     else{
//         console.log("its a non predicate function")
//     }
// }


// predicateFinder(()=>{
//     return [1,2,3,5,58,4,5,].includes(2);
// })


/*Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.

*/

// function three_digit_to_six_digit(color){
//     let newColor = '';

//     color =  color.replace("#", "").split('').map((element)=> element = element + element).join('');
//     console.log(color)
// }


// three_digit_to_six_digit("#fhg");

/*Write a JavaScript program to get every nth element in a given array.*/

// function Factorial(arr,n){
//     let newArr = arr.filter((element)=>element%n==0)
//     newArr = newArr.sort((a,b)=>a-b)
//     console.log(newArr)
// }

// Factorial([1,25,34,59,2,85,26,6,15,2,416,206,46,25,26654,554,65,45],5);

// 22. Filter Non-Unique Values in Array

// function filterNonUnique(arr){
// let newArr = [];

//     newArr = arr.filter((val)=> arr.lastIndexOf(val) == arr.indexOf(val));
//     console.log(newArr)


// }


// filterNonUnique([12,2,56,4,6,56,4,5,1,5,1,5,2,5,2,3,])

/*Write a JavaScript program to dcapitalize the first letter of a string.*/

// function decapitalize(str){
//     let newArr = [];
//     str = str.split(" ");
// for(let x of str){
//         x = x.charAt(0).toLowerCase() + x.slice(1, x.length);
//         newArr.push(x);
// }
// newArr = newArr.join(" ");
// console.log(newArr)
// }

// decapitalize("Hello World")


/*Write a JavaScript program to create an array out of the arrays by creating each possible pair from the arrays. */

// function pairGenerator(arr, arr2){
//     let pair = [];
//     for(let i = 0; i<arr.length; i++ ){
//         for(let j = 0 ; j<arr2.length; j++){
//             pair.push([arr[i], arr2[j]]);
//         }
//     }

//     console.log(pair)
// }

// pairGenerator([1,3,4,5,6,7,5,7], ["a","b","c","d","e","f"]);

/*Write a JavaScript program to measure the time a function to execute.*/

// function executeCounter(){
//     let start = performance.now()
//     for(let i = 0; i<=10000; i++  ){
//         console.log(i)
//     }
//     let end = performance.now()

//     console.log((end - start)/1000 + "ms")
// }

// executeCounter()

/*Write a JavaScript program to filter out the element(s) of a given array that have one of the specified values.*/

// function commonfinder(arr, ...val){
//     let newArr =[];
//    newArr =  arr.filter((element)=> !val.includes(element))
//     console.log(newArr)
// }

// commonfinder([1,2,3,4,5,6,1,2,3,4,5,6],1,2,3)

/*Write a JavaScript program to find all elements in a given array except the first one. Return the whole array if its length is 1.*/
 
// function arrayGenerator(arr){
//     let newArr = arr.length > 1 ? arr.slice(1, arr.length) : arr;
//     return newArr
// }

// console.log(arrayGenerator([1,2,3,5,6,4,6,4,]))

/*Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.*/
// function sumGenerator(arr){
// let result = arr.reduce((acc,em)=> acc + em, 0);
// console.log(result)
// }

// sumGenerator([1,23,5,45])

// function sayHello(data){
// console.log(data)
// }

// function calling(value){
//     sayHello(value)
// }

// calling("Hello World")

/*Write a JavaScript program to generate a random number in the specified range.*/

// function randomNumberGenerator(max, min, n){
//     let num = Array.from({length : n}, ()=> Math.floor( Math.random()*(max-min)+min))
//     console.log(num)
// }

// randomNumberGenerator(23,63,6)


/*Write a JavaScript program to pad a string on both sides with the specified character, if it's shorter than the specified length.*/
// function padding_character(str, character, size){
//     if(str.length > size){
//         str = str.slice(0, size)
//     }else if(str.length === size){
//         console.log("string is perfect")
//     }else{
//        while(str.length < size){
//             str = str + character
//         }
//     }

//     console.log(size -str.length, str)
// }

// padding_character("Rachit",",", 9);


/*Write a JavaScript program to create an array of key-value pair arrays from a given object.*/

// function key_value(obj1){
//     let newVal = [];
//     for(let x in obj1){
//        newVal.push([x, obj1[x]])
//     }
//     console.log(newVal)
// }

// key_value({a:1,b:2})

/*Write a JavaScript program to remove false values from a given array.*/
// function falsy_remover(arr){
//     let result = [];
//    for(let x of arr){
//     if(x){
//         result.push(x)
//     }
    
//    }

//    console.log(result)
// }

// falsy_remover(['afc',15,'kfc', null])

/*Write a JavaScript program to split values into two groups. If an element in the filter is true, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
*/

// function groupBox(data){
//     let arr1 = [];
//     let arr2 = [];
//     for(let x of data){
//         if(x){
//             arr1.push(x)
//         }else{
//             arr2.push(x)
//         }
//     }
//     console.log(arr1, arr2)
// }


// groupBox([1,25,25,542,undefined,465,145,"jgfj","",null])

// function groupBox(data, data1){
//     let positive = [];
//     let negative = [];
//     if(data.length != data1.length)
//         { return null}
//     else{
//         for(let x =0; x<data.length; x++){
//             if(data1[x]){
//                 positive.push(data[x])
//             }
//             else{
//                 negative.push(data[x])
//             }
//         }
//     }

//     console.log(positive,negative)
   
   
// }       

// groupBox([1,25,3,5,4,5,45],[true,true,true,false,false,false,true])

/*Write a JavaScript program to convert an integer to a suffixed string, adding am or pm based on its value.*/
// function addition_AM_PM(value){
//     let time;
//     if(value > 24){
//         console.log("ENTER VALID TIME")
//         return null
//     }
//     else{
//         if(value > 12){
//             time = (value - 12) + "pm";
//         }
//         else{
//             time = val + "am"
//         }
//     }
    
//     console.log(time)
// }

// addition_AM_PM(26)


/*Write a JavaScript program to initialize a two-dimensional array of given size and value.*/
// function  array_generator(size,numberElement, Element){
//         let newArray = Array.from({length : size}, ()=>{ return Array.from({length : numberElement}, ()=>(Element))});
//         console.log(newArray)
// }

// array_generator(3,3,"A")



/*Write a JavaScript program to check whether all elements in a given array are equal or not.*/

// function Element_checker(...arr){
//     let val = arr[0];
//     for(let x = 0; x < arr.length; x++ ){
//        if(val == arr[x]){
//             val = arr[x]
//        }
//        else{
//         console.log("not mathcing");
//         return 0
//        }
//     }
//     console.log(arr)
// }

// Element_checker(1,1,1);

/*Write a JavaScript program to compute the average of an array, after mapping each element to a value using the provided function.*/
function average_finder(...obj){       
    
   for(let x of obj){
    for(let y of x){
        console.log(y)
    }
   }
}

average_finder({a:1},{b:2},{c:6},{d:7});