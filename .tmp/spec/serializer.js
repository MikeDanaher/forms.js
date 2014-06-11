(function() {
  describe('FormsJs.Serializer', function() {
    it('converts a text element to an object', function() {
      var data;
      setFixtures("<form action='#'> <input type='text' name='text1' value='some value' /> </form>");
      data = {
        type: 'text',
        name: 'text1'
      };
      return expect(FormsJs.Serializer.serialize(data)).toEqual({
        text1: "some value"
      });
    });
    it('uses the dataKey attribute if available when converting a text element to an object', function() {
      var data;
      setFixtures("<form action='#'> <input type='text' name='text1' value='some value' /> </form>");
      data = {
        type: 'text',
        name: 'text1',
        dataKey: 'textData'
      };
      return expect(FormsJs.Serializer.serialize(data)).toEqual({
        textData: "some value"
      });
    });
    it('converts the checked value of a radio group to a JSON object', function() {
      var data;
      setFixtures("<form action='#'> <input type='radio' name='radioName' value='Radio 1' > <input type='radio' name='radioName' value='Radio 2' checked > <input type='radio' name='radioName' value='Radio 3' > </form>");
      data = {
        type: 'radio',
        name: 'radioName'
      };
      return expect(FormsJs.Serializer.serialize(data)).toEqual({
        radioName: "Radio 2"
      });
    });
    it('converts the selected value of a select list to a JSON object', function() {
      var data;
      setFixtures("<form action='#'> <select name='selectName'> <option>Option 1</option> <option>Option 2</option> <option selected>Option 3</option> </select> </form>");
      data = {
        type: 'select',
        name: 'selectName'
      };
      return expect(FormsJs.Serializer.serialize(data)).toEqual({
        selectName: "Option 3"
      });
    });
    return it('converts the values of checked checkboxes to an array inside a JSON object', function() {
      var data;
      setFixtures("<form action='#'> <input type='checkbox' name='checkName' value='Checkbox 1' checked> <input type='checkbox' name='checkName' value='Checkbox 2' checked> <input type='checkbox' name='checkName' value='Checkbox 3'> </form>");
      data = {
        type: 'checkbox',
        name: 'checkName'
      };
      return expect(FormsJs.Serializer.serialize(data)).toEqual({
        checkName: ["Checkbox 1", "Checkbox 2"]
      });
    });
  });

}).call(this);
