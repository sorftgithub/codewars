// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them

function abbrevName(name){
    // const newArr = name.split(' ')
    // const firstLetter = newArr[0][0].toUpperCase()
    // const secondLetter = newArr[1][0].toUpperCase()
    // return `${firstLetter}.${secondLetter}`

    return name.split(' ').map((word)=> word[0].toUpperCase()).join('.')
}



    console.log(abbrevName("Sam Harris"), "S.H");
    console.log(abbrevName("Patrick Feenan"), "P.F");
    console.log(abbrevName("Evan Cole"), "E.C");
    console.log(abbrevName("P Favuzzi"), "P.F");
    console.log(abbrevName("David Mendieta"), "D.M");