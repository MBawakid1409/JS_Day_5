console.log('#####################################################');
console.log('Week 2 - Day 1')
console.log('Tuwaiq Academy   JS')
console.log('#####################################################');




//The Homework & Activities
const comapreNums = (num1, num2) => {
    if (num1 === num2) {
        return 'the numbers are equal'
    } else {
        return 'not equal'
    }
}
console.log(comapreNums(5,5));
console.log(comapreNums(5,7));

console.log("###################################################")

const stringFunc = stringOne => {
    if (stringOne === 'JavaScript') {
        return 'Welcome'
    } else {
        return 'Salam'
    }
}
console.log(stringFunc('JavaScript'))
console.log(stringFunc('Swift'))

console.log("###################################################")

const greatestNum = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else if (num1 === num2) {
        return 'the numbers are equal'
    }
}
console.log(greatestNum(40, 40))

console.log("###################################################")

const hombaGomba = stringBing => {
    if (stringBing === 'JavaScript') {
        return 'Web Developer'
    } else if (stringBing === 'Swift') {
        return 'IOS Developer'
    } else if (stringBing === 'Kotlin') {
        return 'Android Developer'
    } else {
        return 'Other Developer'
    }
}
console.log(hombaGomba('Kotlin'))

console.log("###################################################")

const spFunc = myAge => {
    if (myAge >= 18) {
        return 'Welcome Mohammad'
    } else if (myAge) {
        return myAge;
    } else {
        return 'enter your age'
    }
}
console.log(spFunc(33))

console.log("###################################################")

const score = yourGrade => {
    if (yourGrade >= 70) {
        return 'Great'
    } else if (yourGrade < 70 && yourGrade > 50) {
        return 'Good'
    } else if (yourGrade <= 50) {
        return 'failed'
    } else {
        return 'Go away'
    }
}
console.log(score(60))
console.log(score(80))
console.log(score(40))

console.log("###################################################")

const calculator = (num1, num2, operator) => {
    if (operator === "-") {
        return num1 - num2;
    } else if (operator === "+") {
        return num1 + num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else {
        return 'not operator'
    }
}
console.log(calculator(10, 8, "+"))
console.log(calculator(10, 8, "-"))
console.log(calculator(10, 8, "*"))
console.log(calculator(10, 8, "/"))