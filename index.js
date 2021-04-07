function scuberGreetingForFeet(ride){  
  if (ride <= 400) {
    return ("This one is on me!");
  } else if (ride > 2000 && ride < 2500) {
     return ("I will gladly take your thirty bucks.");
  } else if (ride > 2500) {
     return ("No can do.");
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  let message;
    switch (tip) {
      case 'generous':
        message = 'Thank you so much.';
        break;
      case 'not as generous':
        message = 'Thank you.';
        break;
      case 'thanks for everything':
        message = 'Bye.';
        break;
    }
    return message;
}
