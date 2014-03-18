(function() {
  namespace('Form.Validator');

  Form.Validator.MinLength = (function() {
    function MinLength() {}

    MinLength.prototype.isValid = function(value, minChars) {
      if (value.length >= minChars || value === '') {
        return true;
      } else {
        return false;
      }
    };

    return MinLength;

  })();

}).call(this);