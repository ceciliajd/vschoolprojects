var people = ["Jon", "Jacob", "Jingle", "Heimer"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){
    var newArr = []
    for(var i = 0; i < people.length; i++ ){
        newArr.push(people[i])
        for( var j = 0; j < alphabet.length; j++){
            newArr.push(alphabet[j])
            // console.log(newArr)
            
        }
    }
    return newArr
}
// forception(people, alphabet)

console.log(forception(people, alphabet))