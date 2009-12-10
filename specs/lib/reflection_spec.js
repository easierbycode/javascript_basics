Screw.Unit(function() {
  describe('Reflection', function() {
    it("should determine the type of the property", function(){
      expect(typeof flight.number).to(equal, "number");
      expect(typeof flight.status).to(equal, "string");
      expect(typeof flight.arrival).to(equal, "object");
      expect(typeof flight.manifest).to(equal, "undefined");
    });

    it("should produce a value for any property", function(){
      expect(typeof flight.toString).to(equal, "function");
      expect(typeof flight.constructor).to(equal, "function");
    });    
    
    it("should reject functions with hasOwnProperty ", function(){
      expect(flight.hasOwnProperty('number')).to(equal, true);
      expect(flight.hasOwnProperty('constructor')).to(equal, false);
    });
    
    it("should not look up the prototype chain with hasOwnProperty", function(){
      another_flight = Object.beget(flight);
      expect(another_flight.hasOwnProperty('number')).to(equal, false);
    });        
  });
});