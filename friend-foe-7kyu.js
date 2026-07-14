/* Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []
 */


// PREP
// p: array
// R: array
// E: 
function friend(friends){
// Filter out any length less than 4
// friends.filter((char) => char.length === 4)

let realFriend = []
for(let i = 0; i < friends.length; i++){
    let count = friends[i]
    if(count.length === 4){
        realFriend.push(count)
    }
}
return realFriend
}


console.log(friend(['Wale','Sumisola','Sunbo','Rachel','Toun']))