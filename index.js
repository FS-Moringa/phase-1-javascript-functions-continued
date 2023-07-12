// code your solution here
// // code your solution here

function saturdayFun(activity = "roller-skate") {
    return`This Saturday, I want to ${activity}!`;
}

const mondayWork = function (work = "go to the office") {
    return`This Monday, I will ${work}.`;
}

function wrapAdjective(asteric = '*') {
    const newThing = function (adjective = "Beautiful") {
        return `You are ${asteric}${adjective}${asteric}!`;
    };
    return newThing;
    
}
const result = wrapAdjective('||');


// const  printBook = function(book) {
//     console.log(book);
// }

// const printBookArrow = (bookArrow) => console.log(bookArrow)

// printBook("REasons why i love you");
// printBookArrow("You are my strength");