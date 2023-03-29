// code your solution here
// code your solution here
//defines the saturday function
//passes a default argument 'roller skate'
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }


  //function 2
  //defines function mondayWork
  //default argument 'go to the office'
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }

  //function 3
  //defines the function wrapAdjective 
  //passes a default argument symbol
  //defines another argument that should be returned
  function wrapAdjective(symbol = "*") {
    return function(adjective) {
      return `You are ${symbol}${adjective}${symbol}!`;
    }
  }
    
  






