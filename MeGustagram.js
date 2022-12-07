const interval = () => {
  for (let i = 0; i < numberRepetitions; i++) {
    iimDisplay("MeGustagram by Drey\n-----------------------------\nRepetition Nº  |  " + (i + 1) + " / " + numberRepetitions);
    iimPlay("./macros/code.iim");
  };
  timer();
  interval();
}

const timer = () => {
  iimDisplay("MeGustagram by Drey\n-----------------------------\nYou must wait 30 minutes...");
  iimPlay("./macros/clock.iim");
}

let numberRepetitions = 100;
interval();
