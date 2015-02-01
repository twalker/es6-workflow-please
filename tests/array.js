"format es6";
import chai from 'chai'
var assert = chai.assert;
//console.log('hello chai', chai)



describe('array', function(){
  it('should work', function(){
    var els = Array.from(document.body.querySelectorAll('h1'))
    var tagNames = els.map(el => el.tagName)
    assert(tagNames)
  });
});
