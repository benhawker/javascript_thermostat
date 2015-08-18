var Thermostat = function() {
  this.temperature = DEFAULT_TEMP;
  this.powerSaving = "on";
  this.energyColor = "yellow"
};

var DEFAULT_TEMP = 20;


Thermostat.prototype.switchOffPowerSave = function() {
	return this.powerSaving = "off";
};

Thermostat.prototype.switchOnPowerSave = function() {
	return this.powerSaving = "on";
};

Thermostat.prototype.up = function() {
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  return this.temperature -= 1;
};

Thermostat.prototype.resetThermostat = function() {
	return this.temperature = DEFAULT_TEMP;
};

Thermostat.prototype.changeEnergyColor = function() {
	if (this.temperature < 18) {
		return this.energyColor = "green";
	}
	else if (this.temperature >= 18 && this.temperature < 25) {
		return this.energyColor = "yellow";
	}
	else {
		return this.energyColor = "red";
	}

};

