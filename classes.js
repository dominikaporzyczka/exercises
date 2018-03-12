function SoftwareDeveloper() {
    this.favoriteLanguage = 'JavaScript';
}

const developer = new SoftwareDeveloper();

console.log(developer);

/****************************/

const bunny = {
    name: 'Tosia',
    age: 2,
    growOneYear: function() {
        this.age += 1;
    }
}

function sayHello(message) {
    console.log(message + this.name + '!');
}
/* call() */
sayHello.call(bunny, "Hi there, ");

/* apply() */
sayHello.apply(bunny, ["Hi, "]);

/* bind() - set value of this */
function invokeTwice(cb) {
    cb();
    cb();
}

const yearGrow = bunny.growOneYear.bind(bunny);

invokeTwice(yearGrow);

console.log(bunny.age);