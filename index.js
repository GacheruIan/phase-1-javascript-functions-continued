// code your solution here

function saturdayFun(toDo = 'roller-skate') {
    return `This Saturday, I want to ${toDo}!`;
  }
  saturdayFun();
const mondayWork = function(toDo = "go to the office"){
    return `This Monday, I will ${toDo}.`;
}
mondayWork()
let wrapAdjective = function(token="*") 
{
    return function(adjective="special") 
    {
        return `You are ${token}${adjective}${token}!`;

    }
    
  }