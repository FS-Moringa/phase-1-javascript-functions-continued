// code your solution here

function saturdayFun(msg='roller-skate'){
    return `This Saturday, I want to ${msg}!`
};
saturdayFun('bathe my dog');

function mondayWork(message='go to the office'){
    return `This Monday, I will ${message}.` 
};
mondayWork('work from home');

function  wrapAdjective(msg='*'){
    return function  (txt='special'){
        return `You are ${msg}${txt}${msg}!`
    }
}
