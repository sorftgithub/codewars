// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending){
    return str.endsWith(ending)
}


    console.log(solution('abcde', 'cde'), true);
    console.log(solution('abcde', 'abc'), false);
    console.log(solution('empty ending', ''), true);
    console.log(solution('', 'empty string'), false);
    console.log(solution('', ''), true);