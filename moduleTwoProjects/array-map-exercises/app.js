// Make an array of numbers that are doubles of the first array
// function doubleNumbers(num){
//     const result = num.map(function(num){
//         return num * 2
//     })
//     return result
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// Take an array of numbers and make them strings
//   function stringItUp(num){
//     const result = num.map(function(num){
//         return num.toString()
        
//     })
//     return result
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// Capitalize each of an array of names

// function capitalizeNames(names){
//    const result = names.map(function(name){
//     let lowerCase = name.toLowerCase().split("")
//     lowerCase[0] = lowerCase[0].toUpperCase()
//     return lowerCase.join("")
       
//    })
//    return result
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  

// Make an array of strings of the names

// function namesOnly(arr){
//     const result = arr.map(function(arr){
//         return arr.name
//     })
//     return result
//   }
  
//   console.log(namesOnly([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  

// Make an array of strings of the names saying whether or not they can go to The Matrix

// function makeStrings(arr){
//     const result = arr.map(function(arr){
//         if(arr.age <= 17){
//             return `${arr.name} can't go see the Matrix!`
//         } else if(arr.age >= 18) {
//             return `${arr.name} can go see the Matrix!`
//         }
//     })
//     return result
//   }
  
//   console.log(makeStrings([
//       {
//           name: "Angelina Jolie",
//           age: 80
//       },
//       {
//           name: "Eric Jones",
//           age: 2
//       },
//       {
//           name: "Paris Hilton",
//           age: 5
//       },
//       {
//           name: "Kayne West",
//           age: 16
//       },
//       {
//           name: "Bob Ziroll",
//           age: 100
//       }
//   ])); 
//   // ["Angelina Jolie can go to The Matrix", 
//   // "Eric Jones is under age!!", 
//   // "Paris Hilton is under age!!", 
//   // "Kayne West is under age!!", 
//   // "Bob Ziroll can go to The Matrix"]

// Make an array of the names in h1s, and the ages in h2s

function readyToPutInTheDOM(arr){
    const result = arr.map(function(arr){
        return "<h1>" + arr.name + "<h1>" + "<h2>" + arr.age + "<h2>";
    })
    return result;
  };

  console.log(readyToPutInTheDOM([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["<h1>Angelina Jolie</h1><h2>80</h2>", 
  // "<h1>Eric Jones</h1><h2>2</h2>", 
  // "<h1>Paris Hilton</h1><h2>5</h2>", 
  // "<h1>Kayne West</h1><h2>16</h2>", 
  // "<h1>Bob Ziroll</h1><h2>100</h2>"]