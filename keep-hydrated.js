/* Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down. */

function litres(time){
    return Math.floor(time * 0.5);
}


    console.log(litres(0), 0, 'litres(0) should return 0');
    console.log(litres(1), 0, 'litres(1) should return 0');
    console.log(litres(2), 1, 'litres(2) should return 1');
    console.log(litres(3), 1, 'litres(3) should return 1');
    console.log(litres(4), 2, 'litres(4) should return 2');