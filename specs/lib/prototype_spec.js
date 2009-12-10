Screw.Unit(function() {
  describe('Protoype', function() {
    before(function(){
      another_stooge = Object.beget(stooge);
    });
    it("should not change the prototype when the object is updated", function(){
      another_stooge["first-name"] = "Nicholas"
      expect(stooge["first-name"]).to(equal, "Jerome");
    });

    it("should make new properties added to the prototype available to it's objects", function(){      
      stooge["alias"] = "Jerome the Bone"
      expect(another_stooge["alias"]).to(equal, "Jerome the Bone");
    });
  });
});