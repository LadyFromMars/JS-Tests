const assert = require('assert');
const rooster = require('../index');

// Tests announceDawn function

describe('rooster test',()=>{
 describe('.announceDawn', ()=>{
   it('returns a rooster call', ()=>{

     const result = 'moo!';

     const rooster = Rooster.announceDawn();

     assert.equal(rooster, result);

   });
 });
  });

  //Tests correct hour input

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
    //setup
      const result = '6';

    // exercise

      const time = Rooster.timeAtDawn(6);

    //verify

      assert.strictEqual(time, result);


    });
  });


  //Tests incorrect hour input

   describe('.timeAtDawn', () => {
    it('returns an error if  time >23', () => {

    //verify 24

     assert.throws(
  () => {
     Rooster.timeAtDawn(24);
  },
  RangeError
);
      });

     it('returns an error if  time <0', () => {


     assert.throws(
  () => {
     Rooster.timeAtDawn(-3);
  },
  RangeError
);


    });   
  });
