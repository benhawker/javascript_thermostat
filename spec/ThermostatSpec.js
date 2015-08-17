describe('Thermostat', function(){

	var t;

	beforeEach(function() {
		t = new Thermostat();
	});
	
	describe('Starting State', function(){

		it('has a starting default temperature of 20 degrees', function(){
			expect(t.start).toEqual(20);
		});
	});
});