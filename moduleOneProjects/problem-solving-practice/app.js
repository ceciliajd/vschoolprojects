// //Write a function that takes an array of numbers and returns the largest (without using Math.max())

// var largestNum = 0;

// function largest(arr){
//     for (let index = 0;index <= arr.length - 1;index ++){
//        // console.log(largestNum)
//         //console.log(arr[index])
//         if ( arr[index] > largestNum ){
//             largestNum = arr[index]
//         }
        
//     }
//     console.log(largestNum)
//     ////return i
// };

// // largest([1,	56,	67,	34,	79,	34,	78,	67,	45,	49]);
// largest([3, 5, 2, 8, 1]) // => 8


//Write a function that takes an array of words and a character and returns each word that has that character present.


// function lettersWithStrings(arr,str){
//     //console.log(str)
//     let emptyArr = []
//     for (let index = 0; index < arr.length; index ++){
//         if(arr[index].includes(str)){
//             emptyArr.push(arr[index])
//         }
//     }
//     console.log(emptyArr)
//     return emptyArr
// }

// lettersWithStrings(["#3", "$$$", "C%4!", "Hey!", "Yo!", "Cool"], "!") // => ["C%4!", "Hey!"]


//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(num1, num2){
    if (num1 % num2 === 0 ){
        return('true')
    } else {
        return('false')
    }
    
}

 console.log(isDivisible(4, 2)) // => true
 isDivisible(9, 3) // => true
 isDivisible(15, 4) // => false


