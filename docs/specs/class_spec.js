
let getX;

class C {
    #x
    constructor( x ) {
        this.#x = { data: x };
    }

    static {
        // getX has privileged access to #x
        getX = ( obj ) => obj.#x;
    }
}

function readXData( obj ) {
    return getX( obj ).data;
}


Screw.Unit(function () {
    describe('Classes', function () {
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

        instance = new C( stooge );
  
      });
      
      /* static blocks 
      */
      describe('static blocks', function () {
        it("access private state (instance.#x)", function () {
          var staticX_data = readXData( instance );
          expect( staticX_data ).to( equal, stooge );
        });
      });
    });
  });