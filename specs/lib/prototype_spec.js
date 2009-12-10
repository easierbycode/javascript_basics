Screw.Unit(function() {
  describe('Protoype', function() {
    before(function(){
      stooge = {
        "first-name": "Jerome",
        "last-name": "Howard"
      }
      another_stooge = Object.beget(stooge);
    });
    it("should not change the prototype when the object is updated", function(){
      another_stooge["first-name"] = "Nicholas"
      expect(stooge["first-name"]).to(equal, "Jerome");
    });
  });
});