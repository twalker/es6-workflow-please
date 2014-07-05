import { Character } from './character'
import rjsmod from './rjsmod'
import cjsmod from './cjsmod'
import bbv from './hello-backbone'

// es6
var sid = new Character('es6')
document.getElementById('es6').textContent = sid.speak()

// amd
document.getElementById('amd').textContent = rjsmod.speak()

// commonjs
document.getElementById('commonjs').textContent = cjsmod.speak('hello')

// backbone
document.getElementById('bb').textContent = bbv.speak()

