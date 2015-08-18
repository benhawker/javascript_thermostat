var thermostat = new Thermostat();

var temperature = document.getElementById("temperature");
temperature.innerHTML = thermostat.temperature;
temperature.style.color = thermostat.energyColor;


var temp_up = document.getElementById('up');
	temp_up.onclick = function() {
		thermostat.up();
		thermostat.changeEnergyColor();
		temperature.innerHTML = thermostat.temperature;
		temperature.style.color = thermostat.energyColor;
	};


var temp_down = document.getElementById('down');
	temp_down.onclick = function() {
		thermostat.down();
		thermostat.changeEnergyColor();
		temperature.innerHTML = thermostat.temperature;
		temperature.style.color = thermostat.energyColor;
	};


var temp_reset = document.getElementById('reset');
	temp_reset.onclick = function() {
		thermostat.resetThermostat();
		thermostat.changeEnergyColor();
		temperature.innerHTML = thermostat.temperature;
		temperature.style.color = thermostat.energyColor;
	};

var power_save_status = document.getElementById('power_save_status');
var power_save = document.getElementById('power');
var right = document.getElementById('right');

power_save.onclick = function() {
    thermostat.togglePowerSave();
    power_save_status.innerHTML = thermostat.powerSaving;
    right.style.backgroundImage = 'url(bg2.jpg)' 
	};










