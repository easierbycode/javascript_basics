// http://www.room51.co.uk/js/beget.html

if (typeof Object.beget !== 'function') {
  Object.beget = function(o) {
      var F = function() {};
        F.prototype = o;
        return new F();
    };
}