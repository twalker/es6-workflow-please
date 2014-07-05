"format register";

System.register("app/character", [], function($__0) {
  "use strict";
  var __moduleName = "app/character";
  var Character;
  return {
    exports: {
      get Character() {
        return Character;
      },
      set Character(value) {
        Character = value;
      }
    },
    execute: function() {
      Character = (function() {
        var Character = function Character(name) {
          this.name = name;
        };
        return ($traceurRuntime.createClass)(Character, {speak: function() {
            var msg = arguments[0] !== (void 0) ? arguments[0] : 'hello';
            return [this.name, ' says', msg].join(' ');
          }}, {});
      }());
    }
  };
});

System.register("app/main", ["./character", "./rjsmod", "./cjsmod"], function($__0) {
  "use strict";
  var __moduleName = "app/main";
  return {
    exports: {},
    execute: function() {
      ;
      ;
      ;
      document.addEventListener("DOMContentLoaded", function(e) {
        var sid = new $__0[0]["Character"]('es6');
        document.getElementById('es6').textContent = sid.speak();
        document.getElementById('amd').textContent = $__0[1]["default"].speak();
        document.getElementById('commonjs').textContent = $__0[2]["default"].speak('hello');
      });
    }
  };
});

define("app/rjsmod", [], function(){
  return {
    speak: function(msg){
      return msg + ' amd';
    }
  };
});


System.register("app/cjsmod", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "app/cjsmod.js";
    var __dirname = "app";
  var obj = {
    speak: function speak(msg){
      return 'CommonJS says' + msg;
    }
  };
  
  module.exports = obj;
  
  global.define = __define;
  return module.exports;
});
