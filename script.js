const arr = [-2, 7, 11, -4, -10];

function each(array, callback) {
    for(let i = 0; i < array.length; i++) {
        if(callback(array[i])) {
            console.log(array[i]);
        }
    }
}

function isNegative(n) {
    return n < 0;
}

each(arr, isNegative);

/****************************/

const numbers = [1, 2, 6, 3, 7];

numbers.forEach(function(n) {
    if(n % 2 !== 0) {
        console.log(n);
    }
});

/****************************/

const dogData = [
    {name: 'Reks', age: 3},
    {name: 'Lucky', age: 2},
    {name: 'Perła', age: 5},
    {name: 'Rocky', age: 1},
];

/* map() */
const dogStrings = dogData.map(function(dog) {
    return 'Dog name: ' + dog.name + ', age: ' + dog.age;
});

console.log(dogStrings);

/* filter() */
const puppy = dogData.filter(function(dog) {
    return dog.age <= 1;
});

console.log(puppy);

/****************************/

const button = document.getElementById('button');

button.addEventListener('click', (function () {
    let count = 0;

    return function() {
        count +=1;
        
        if (count === 2) {
            alert('clicked twice!');

            count = 0;
        }
    }
})()
);