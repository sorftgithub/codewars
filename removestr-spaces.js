// Write a function that removes the spaces from the string, then return the resultant string.

    function noSpace(x){
    return x.split(' ').join('');
}

// const noSpace = (x) => x.replaceAll(' ', '');


console.log(noSpace('I am coming today'), 'Iamcomingtoday');
console.log(noSpace('Welcome home'), 'Welcomehome');
console.log(noSpace('I love you'), 'Iloveyou');
console.log (noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
