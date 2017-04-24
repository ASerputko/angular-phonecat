'use strict';

describe('checkmark', function() {

  beforeEach(module('core'));

  it('should convert boolean values to unicode checkmark or cross (1)',
    inject(function(checkmark1Filter) {
      expect(checkmark1Filter(true)).toBe('\u2713');
      expect(checkmark1Filter(false)).toBe('\u2718');
    })
  );

  it('should convert boolean values to unicode checkmark or cross (2)',
    inject(function(checkmark2Filter) {
      expect(checkmark2Filter(true)).toBe('\u2713');
      expect(checkmark2Filter(false)).toBe('\u2718');
    })
  );

});
