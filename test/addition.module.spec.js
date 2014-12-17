/* globals kahnYouAddUp: true */
var should = chai.should();

describe('Tests for our kahnYouAddUp addition module', function () {
  describe('kahnYouAddUp', function () {

    describe('addADollar', function () {
      it('Add a dollar to the price of an item given in cents', function () {

        var ballPrice = 10;

        kahnYouAddUp.addADollar(ballPrice).should.equal(110);

      });
    });
  });
});