Screw.Unit(function() {
  describe('Object Literals', function() {
    before(function(){
      stooge = {
        "first-name": "Jerome",
        "last-name": "Howard"
      }      

      flight = {
        airline: "Oceanic",
        number: 815,
        departure: {
          IATA: "SYD",
          time: "2004-09-22 14:55",
          city: "Sydney"
        },
        arrival: {
          IATA: "LAX",
          time: "2004-09-23 10:42",
          city: "Los Angeles"
        }
      }

    });
    it("defined by curly braces", function(){
      my_object = {};
      expect(typeof my_object).to(equal, 'object');
    });
    
    it("has zero or more name/value pairs")

    it("has property names as a string", function() {
      expect(stooge["first-name"]).to(equal, "Jerome");
    });
    
    it("can be nested", function() {
      expect(flight.departure.IATA).to(equal, "SYD")
    });
    
    describe('retrieval', function() {
      it("can retrieve values using the [] suffix", function() {
        expect(stooge["first-name"]).to(equal, "Jerome");
      });
      
      it("can retrieve values using the dot notation", function(){
        expect(flight.departure.IATA).to(equal, "SYD");
      });
      
      it("can use the || operator to fill in default values", function() {
        expect(stooge["middle-name"] || "(none)").to(equal, "(none)");
        expect(flight.status || "unknown").to(equal, "unknown");
      });
      
      it("can throw a TypeError exception when retrieving values from undefined", function() {
        expect(flight.equipment).to(equal, undefined);
        // flight.equipment.model throw "TypeError" -- how do I do this?
      });

      it("can guard against TypeError exception with the && operator", function(){
        expect(flight.equipment && flight.equipment.model).to(equal, undefined);        
      });
      
    });
    
    describe('updating', function(){
      it("can update by assignment", function(){
        expect(stooge['first-name']).to(equal, "Jerome");
        stooge['first-name'] = "Joe";
        expect(stooge['first-name']).to(equal, "Joe");
      });
      
      it("can augment the object if the object does not have the propery name", function(){
        stooge['middle-name'] = 'Lester';
        expect(stooge['middle-name']).to(equal, "Lester");
        
        stooge.nickname = "Curly";
        expect(stooge.nickname).to(equal, "Curly");
        
        flight.equipment = {
          model: "Boeing 777"
        }
        expect(flight.equipment.model).to(equal, "Boeing 777");
        
        flight.status = 'overdue';
        expect(flight.status).to(equal, 'overdue');
      }); 
      
    });
    
  });
});