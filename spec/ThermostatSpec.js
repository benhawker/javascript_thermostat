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
  		thermostat.temperature = 22
  		thermostat.up()
  		expect(thermostat.temperature).toEqual(23)
  	});

  	it('will decrease temperature by 1', function() {
  		thermostat.temperature = 22
  		thermostat.down()
  		expect(thermostat.temperature).toEqual(21)
  	});
  });







});

