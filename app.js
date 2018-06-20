
const button = document.querySelector('button#button');

const letters = document.getElementById('letters');
const input = letters.querySelector('.input');
const num = letters.querySelector('.num');

button.addEventListener('click', (e) => {
  e.preventDefault();
  console.log("hey");

  const char = input.value;
  const numbers = num.value;

  function caesar(char, numbers) {
  numbers = numbers % 26;
  var lowercase = char.toLowerCase();
  var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newStr = '';

  for(var i = 0; i < lowercase.length; i++) {
    var currentLetter = lowercase[i];
    if (currentLetter === ' ') {
      newStr += currentLetter;
      continue;
    }
    var currentIndex = alpha.indexOf(currentLetter);
    var newIndex = currentIndex + numbers;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (char[i] === char[i].toUpperCase()) {
      newStr += alpha[newIndex].toUpperCase();
    } else {
      newStr += alpha[newIndex];
    }
  }
  return newStr;
 }

 var hey = caesar(char, numbers);
 const output = document.getElementById('output');
 console.log(hey);

 output.textContent = hey;

 });

 
