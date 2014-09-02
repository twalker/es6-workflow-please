"format es6";
import mocha from 'mocha'
//import chai from 'chai'
//console.log('hello chai', chai)


//var assert = chai.assert;
mocha.setup('bdd');

describe('array', function(){
  it('should work', function(){
    var els = Array.from(document.body.querySelectorAll('h1'))
    var tagNames = els.map(el => el.tagName)
    console.log(tagNames)
  });
});


mocha.run()