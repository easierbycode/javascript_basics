Screw.Unit(function () {
  describe('Objects', function () {
    before(function () {
      stooge = {
        "first-name": "Jerome",
        "last-name": "Howard"
      };      

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
      };

    });
    
    /* Literals 
    */
    describe('Literals', function () {
      it("defined by curly braces", function () {
        my_object = {};
        expect(typeof my_object).to(equal, 'object');
      });
    
      it("has zero or more name/value pairs");

      it("has property names as a string", function () {
        expect(stooge["first-name"]).to(equal, "Jerome");
      });
    
      it("can be nested", function () {
        expect(flight.departure.IATA).to(equal, "SYD");
      });
    });

    /* Retrieval
    */    
    describe('Retrieval', function () {
      it("can retrieve values using the [] suffix", function () {
        expect(stooge["first-name"]).to(equal, "Jerome");
      });
      
      it("can retrieve values using the dot notation", function () {
        expect(flight.departure.IATA).to(equal, "SYD");
      });
      
      it("can use the || operator to fill in default values", function () {
        expect(stooge["middle-name"] || "(none)").to(equal, "(none)");
        expect(flight.status || "unknown").to(equal, "unknown");
      });
      
      it("can throw a TypeError exception when retrieving values from undefined", function () {
        expect(flight.equipment).to(equal, undefined);
        // flight.equipment.model throw "TypeError" -- how do I do this?
      });

      it("can guard against TypeError exception with the && operator", function () {
        expect(flight.equipment && flight.equipment.model).to(equal, undefined);        
      });
      
    });

    /* Update
    */    
    describe('Update', function () {
      it("can update by assignment", function () {
        expect(stooge['first-name']).to(equal, "Jerome");
        stooge['first-name'] = "Joe";
        expect(stooge['first-name']).to(equal, "Joe");
      });
      
      it("can augment the object if the object does not have the propery name", function () {
        stooge['middle-name'] = 'Lester';
        expect(stooge['middle-name']).to(equal, "Lester");
        
        stooge.nickname = "Curly";
        expect(stooge.nickname).to(equal, "Curly");
        
        flight.equipment = {
          model: "Boeing 777"
        };
        expect(flight.equipment.model).to(equal, "Boeing 777");
        
        flight.status = 'overdue';
        expect(flight.status).to(equal, 'overdue');
      }); 
      
    });
    
    /* Reference 
    */
    describe('Reference', function () {
      it("should pass by reference", function () {
        var x = stooge;
        expect(x["first-name"]).to(equal, "Jerome");
      });
    });

    /* Prototype
    */
    describe('Protoype', function () {
      before(function () {
        another_stooge = Object.beget(stooge);
      });
      it("should not change the prototype when the object is updated", function () {
        another_stooge["first-name"] = "Nicholas";
        expect(stooge["first-name"]).to(equal, "Jerome");
      });

      it("should make new properties added to the prototype available to it's objects", function () {      
        stooge.alias = "Jerome the Bone";
        expect(another_stooge.alias).to(equal, "Jerome the Bone");
      });
    });

    /* Reflection
    */
    describe('Reflection', function () {
      it("should determine the type of the property", function () {
        expect(typeof flight.number).to(equal, "number");
        expect(typeof flight.airline).to(equal, "string");
        expect(typeof flight.arrival).to(equal, "object");
        expect(typeof flight.manifest).to(equal, "undefined");
      });

      it("should produce a value for any property", function () {
        expect(typeof flight.toString).to(equal, "function");
        expect(typeof flight.constructor).to(equal, "function");
      });    

      it("should reject functions with hasOwnProperty ", function () {
        expect(flight.hasOwnProperty('number')).to(equal, true);
        expect(flight.hasOwnProperty('constructor')).to(equal, false);
      });

      it("should not look up the prototype chain with hasOwnProperty", function () {
        another_flight = Object.beget(flight);
        expect(another_flight.hasOwnProperty('number')).to(equal, false);
      });        
    });

    /* Enumeration
    */
    describe('Enumeration', function () {
      it("can loop over property names in an object", function () {
        properties = [];
        for (name in stooge) {
          if (typeof another_stooge[name] !== 'function') {
            properties.push(name);
          }
        }
        expect(properties).to(equal, ["first-name", "last-name"]);
      }); 
    });              

    /* Delete
    */
    describe('Delete', function () {
      before(function () {
        stooge.nickname = "Curly";
        another_stooge = Object.beget(stooge);
        another_stooge.nickname = "Moe";
      });       

      it("should remove a property from an object", function () {
        expect(another_stooge.nickname).to(equal, "Moe");
        delete another_stooge.nickname;
        expect(another_stooge.nickname).to(equal, "Curly");
      });
    });
  });
});