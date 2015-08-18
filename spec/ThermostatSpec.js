describe("Thermostat", function() {
  var thermostat;

   beforeEach(function() {
    thermostat = new Thermostat();
   });

  describe("Starting state", function() {

    it("has default temperature of 20",function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("starts with power saving on", function() {
      expect(thermostat.powerSaving).toEqual("on");
    });

 });


  describe("power saving toggle on and off", function() {

    it("can be turned off, when it is on", function() {
      expect(thermostat.switchOffPowerSave()).toEqual("off")
    });

    it("can be turned on, whenit is off", function() {
      thermostat.switchOffPowerSave();
      expect(thermostat.switchOnPowerSave()).toEqual("on")
    });

  });

  describe('temperature changes', function() {
  	it('will increase temperature by 1', function() {
  		thermostat.temperature = 22;
  		thermostat.up();
  		expect(thermostat.temperature).toEqual(23)
  	});

  	it('will decrease temperature by 1', function() {
  		thermostat.temperature = 22;
  		thermostat.down();
  		expect(thermostat.temperature).toEqual(21)
  	});
  });


  describe("reset", function(){
    it("will reset the temp to 20", function(){
      thermostat.temperature = 22;
      thermostat.resetThermostat();
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe("energy usage colour scheme", function(){

    it("on start or reset the color is yellow", function() {
      expect(thermostat.energyColor).toEqual("yellow")
    });

    it("will be green when the temp is below 18", function() {
      thermostat.temperature = 17;
      thermostat.changeEnergyColor();
      expect(thermostat.energyColor).toEqual("green")
    });

    it("will be yellow when the temp is below >=18 and <25", function() {
      thermostat.temperature = 21;
      thermostat.changeEnergyColor();
      expect(thermostat.energyColor).toEqual("yellow")
    });

    it("will be red when the temp is above >25", function() {
      thermostat.temperature = 26;
      thermostat.changeEnergyColor();
      expect(thermostat.energyColor).toEqual("red")
    });
  });

  describe('minimum temperature', function() {
  	it('cannot go below 10 degrees celsius', function() {
  		thermostat.temperature = 10;
  		expect(function() {
  			thermostat.down();
  		}).toThrowError("Temperature can't go below 10")
  	});
  });







});

