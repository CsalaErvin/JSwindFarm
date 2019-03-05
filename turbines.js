var allTurbines = 25;
var turbineCounter = 0;
var turbinePower = 0;
var sumPower = 0;

for (var i = 0; i < allTurbines; i++) {
  if (i < 10) {
    turbineCounter++;
    turbinePower = 2000;
    sumPower += turbinePower;
    console.log('Wind turbine No.' + turbineCounter +' operates at full speed, generating ' +   turbinePower + ' MWh of current. The total output of the farm is currently ' + sumPower + ' MWh.');
  } else if (i < 20) {
    turbineCounter++;
    turbinePower = 1000;
    sumPower += turbinePower;
    console.log('Wind turbine No.' + turbineCounter +'. operates at half speed, generating ' + turbinePower + ' MWh of current. The total output of the farm is currently ' + sumPower + ' MWh.');
  } else if (i < 25){
    turbineCounter++;
    turbinePower = 0;
    sumPower += turbinePower;
    console.log('Wind turbine No.' + turbineCounter +'. is out of order, generating ' + turbinePower + ' MWh of current. The total output of the farm is currently ' + sumPower + ' MWh.');
  } else {
    console.log('Something unexpected happened. Waiting for data processing ...');
  }
}