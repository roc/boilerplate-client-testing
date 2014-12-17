/*
 * Todd Motto writes a succinct and
 * enthusiastic primer on the
 * revealing module pattern here:
 * http://toddmotto.com/mastering-the-module-pattern/
 */

var kahnYouAddUp = (function () {

  var addADollar = function ( amount ) {
    return amount + (amount + 100);
  };

  return {
    addADollar: addADollar
  };

})();
