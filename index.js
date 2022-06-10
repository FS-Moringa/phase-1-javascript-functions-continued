// Code your solution in this file!
let array=['don','jose','mike','tommy']

const returnFirstTwoDrivers=(array)=>array.slice(0,2)



const returnLastTwoDrivers=(array)=>array.slice(-2)

returnLastTwoDrivers(array)

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(int){
    return(function fareMultiplier(fare){
        return fare *int;
    })
}
const fareDoubler=function(fare){
    return (fare *2);
}

const fareTripler =function(fare){
    return (fare*3)
}

function selectDifferentDrivers(array,command){
    if (command===returnFirstTwoDrivers){
        return(returnFirstTwoDrivers(array));
    }
    else if(command===returnLastTwoDrivers){
        return (returnLastTwoDrivers(array));
    }
}