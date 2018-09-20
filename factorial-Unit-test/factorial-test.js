var assert = require("assert");
var Calculate =  require('../index.js')



describe('Calculate', () => {

//Test correct value

  describe('.factorial', () => {
	it('return correct value of 5!', () => {

    const expected = 120;

    const result = Calculate.factorial(5);

    assert.equal(result, expected);
  });


    it('return correct value of 3!', () => {

    const expected = 6;

    const result = Calculate.factorial(3);

    assert.equal(result, expected);
  });


    it('return correct value of 0! = 1', () => {

      const expected = 1;

      const result = Calculate.factorial(0);

      assert.equal(result, expected);

    });

  });

//Tests incorrect values (for example: string)
  describe('incorrect input', ()=> {

      it('raises an error if the parameter passed in is a string', () => {

  const str = '14';
  // Exercise
  const result = () => { Calculate.factorial(str) };
  // Verification
  assert.throws(result, /enter a number/);

});


  });
});
