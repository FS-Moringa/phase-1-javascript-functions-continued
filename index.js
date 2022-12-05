function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`
}
saturdayFun('bath my dog');
const mondayWork = function(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(visual = '*'){
return function(adj = "special"){
    return `You are ${visual}${adj}${visual}!`
} 
}