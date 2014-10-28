import { Greeter } from './hello-es6'
import amd from './hello-amd'
import cjs from './hello-cjs'
import bb from './hello-backbone'
import Mustache from 'mustache'


// direct import now works with bundling!
import txt from './template.text!text'

var showMsg = (id, msg) =>  document.getElementById(id).textContent = msg

// es6
var greeter = new Greeter()
showMsg('es6', greeter.say('hell yeah!'))

// amd
showMsg('amd', amd.say('async is great!'))

// commonjs
showMsg('commonjs', cjs.say('npm modules rule!'))

// backbone
showMsg('bb', bb.say('MV*!'))

// mustache
showMsg('mustache', Mustache.render(txt, {msg: 'interpolate!'}))
