var Thermostat = function() {
  this.temperature = DEFAULT_TEMP;
  this.powerSaving = "on";
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

