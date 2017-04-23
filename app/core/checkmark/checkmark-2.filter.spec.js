'use strict';

describe('checkmark2', function() {

  beforeEach(module('core'));

  it('should convert boolean values to unicode checkmark or cross',
    inject(function(checkmark2Filter) {
      expect(checkmark2Filter(true)).toBe('\u2713');
      expect(checkmark2Filter(false)).toBe('\u2718');
    })
  );

});
