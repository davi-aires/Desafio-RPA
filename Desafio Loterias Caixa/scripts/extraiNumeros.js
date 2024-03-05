function(element, input)
{
var listNumbers = document.getElementById('ulDezenas').children;
var returnNumbers = [];

for (var i = 0; i < listNumbers.length; i++){
  returnNumbers.push(listNumbers[i].innerText);
}

return returnNumbers;
}