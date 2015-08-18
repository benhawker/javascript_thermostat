var Thermostat = function() {
  this.temperature = DEFAULT_TEMP;
  this.powerSaving = "On";
  this.energyColor = "yellow";
  this.powerSaveOnMaximumTemp = 25;
  this.powerSaveOffMaximumTemp = 32;
  this.minimumTemperature = 10;
  this.greenTemperature = 18;
  this.yellowTemperature = 25;
};

const DEFAULT_TEMP = 20


Thermostat.prototype.switchOffPowerSave = function() {
	return this.powerSaving = "Off";
};

Thermostat.prototype.switchOnPowerSave = function() {
	return this.powerSaving = "On";
};

Thermostat.prototype.togglePowerSave = function() {
  if (this.powerSaving === "On") {
    return this.powerSaving = "Off";
  }
  else if (this.powerSaving === "Off") {
    return this.powerSaving = "On";
  }; 
};

Thermostat.prototype.up = function() {
  if (this._powerSaveIsOn()) {
  	throw new Error ("Power Saving is On. Temperature can't go above 25")
  }
  else if (this._powerSaveIsOff()) {
  	throw new Error ("Power Saving is Off. Temperature can't go above 32")
  }
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this._belowMinimumTemperature()) {
    throw new Error ("Temperature can't go below 10")
  }
  return this.temperature -= 1;
};

Thermostat.prototype.resetThermostat = function() {
	return this.temperature = DEFAULT_TEMP;
};

Thermostat.prototype.changeEnergyColor = function() {
	if (this._isGreenTemperature()) {
		return this.energyColor = "green";
	}
	else if (this._isYellowTemperature()) {
		return this.energyColor = "yellow";
	}
	else {
		return this.energyColor = "red";
	}
};


Thermostat.prototype._powerSaveIsOn = function() {
  return (this.powerSaving === "On" && this.temperature === this.powerSaveOnMaximumTemp)
};

Thermostat.prototype._powerSaveIsOff = function() {
  return (this.powerSaving === "Off" && this.temperature === this.powerSaveOffMaximumTemp)
};

Thermostat.prototype._belowMinimumTemperature = function() {
  return (this.temperature <= this.minimumTemperature)
};

Thermostat.prototype._isGreenTemperature = function() {
  return (this.temperature < this.greenTemperature)
};

Thermostat.prototype._isYellowTemperature = function() {
  return (this.temperature >= this.greenTemperature && this.temperature < this.yellowTemperature)
};


