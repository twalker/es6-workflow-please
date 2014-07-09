import { Character } from './character'
import rjsmod from './rjsmod'
import cjsmod from './cjsmod'
import bbv from './hello-backbone'
import Mustache from 'mustache'
// direct import doesn't work with bundling
//import txt from './template.text!text'

// es6
var sid = new Character('es6')
document.getElementById('es6').textContent = sid.speak()

// amd
document.getElementById('amd').textContent = rjsmod.speak()

// commonjs
document.getElementById('commonjs').textContent = cjsmod.speak('hello')

// backbone
document.getElementById('bb').textContent = bbv.speak()

// mustache
//async import works, but not bundled inline
System.import('./app/template.text!text').then(function(txt){
  document.getElementById('mustache').innerHTML = Mustache.render(txt, {name: 'Mustache'})
});
//document.getElementById('mustache').innerHTML = Mustache.render(txt, {name: 'Mustache'})
