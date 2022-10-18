let body = document.querySelector
body.addEventListener('click', giveAlert());

function giveAlert() {
    alert('this is an alert');
}

body.addEventListener('click', onclick(event))
document.body.style.backgroundColor = 'salmon';


let postersSold = false;
let moneyMade;

if (postersSold === true) {
    moneyMade = 10000000000000;
  } else {
    moneyMade = -2500;
  }

  function lNames(names) {
    return names.startsWith('M');
  }
  
  const names = ['Macy', 'Amy', 'Mona', 'Vera', 'Mcgregor', 'Jeremy'];
  
  const filtered = names.filter(lNames);
  
  console.log(filtered);