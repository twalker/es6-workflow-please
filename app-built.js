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

System.register("app/backbone-extended", ["jquery", "backbone"], function($__0) {
  "use strict";
  var __moduleName = "app/backbone-extended";
  var $__default;
  return {
    exports: {
      get default() {
        return $__default;
      },
      set default(value) {
        $__default = value;
      }
    },
    execute: function() {
      ;
      ;
      $__0[1]["default"].$ = $__0[0]["default"];
      $__default = $__0[1]["default"];
    }
  };
});

System.register("app/hello-backbone", ["./backbone-extended"], function($__0) {
  "use strict";
  var __moduleName = "app/hello-backbone";
  var c,
      V,
      $__default;
  return {
    exports: {
      get default() {
        return $__default;
      },
      set default(value) {
        $__default = value;
      }
    },
    execute: function() {
      ;
      c = new $__0[0]["default"].Collection([{
        id: 1,
        s: 'Back'
      }, {
        id: 2,
        s: 'bone'
      }]);
      V = $__0[0]["default"].View.extend({speak: function() {
          return this.collection.pluck('s').join('');
        }});
      $__default = new V({collection: c});
    }
  };
});

System.register("app/main", ["./character", "./rjsmod", "./cjsmod", "./hello-backbone", "mustache"], function($__0) {
  "use strict";
  var __moduleName = "app/main";
  var sid;
  return {
    exports: {},
    execute: function() {
      ;
      ;
      ;
      ;
      ;
      sid = new $__0[0]["Character"]('es6');
      document.getElementById('es6').textContent = sid.speak();
      document.getElementById('amd').textContent = $__0[1]["default"].speak();
      document.getElementById('commonjs').textContent = $__0[2]["default"].speak('hello');
      document.getElementById('bb').textContent = $__0[3]["default"].speak();
      System.import('./app/template.txt!text').then(function(txt) {
        document.getElementById('mustache').innerHTML = $__0[4]["default"].render(txt, {name: 'Mustache'});
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

/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("github:components/jquery@2.1.1/jquery.min", [],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

System.register("npm:lodash-node@2.4.1/modern/arrays/compact", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/compact.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function compact(e){for(var r=-1,t=e?e.length:0,a=[];++r<t;){var s=e[r];s&&a.push(s)}return a}module.exports=compact;
  //# sourceMappingURL=compact.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseIndexOf", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseIndexOf.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseIndexOf(e,r,t){for(var a=(t||0)-1,n=e?e.length:0;++a<n;)if(e[a]===r)return a;return-1}module.exports=baseIndexOf;
  //# sourceMappingURL=baseIndexOf.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/keyPrefix", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/keyPrefix.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var keyPrefix=+new Date+"";module.exports=keyPrefix;
  //# sourceMappingURL=keyPrefix.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/cachePush", ["./keyPrefix"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/cachePush.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function cachePush(e){var r=this.cache,t=typeof e;if("boolean"==t||null==e)r[e]=!0;else{"number"!=t&&"string"!=t&&(t="object");var a="number"==t?e:keyPrefix+e,n=r[t]||(r[t]={});"object"==t?(n[a]||(n[a]=[])).push(e):n[a]=!0}}var keyPrefix=require("./keyPrefix");module.exports=cachePush;
  //# sourceMappingURL=cachePush.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/objectPool", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/objectPool.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var objectPool=[];module.exports=objectPool;
  //# sourceMappingURL=objectPool.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/maxPoolSize", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/maxPoolSize.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var maxPoolSize=40;module.exports=maxPoolSize;
  //# sourceMappingURL=maxPoolSize.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/largeArraySize", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/largeArraySize.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var largeArraySize=75;module.exports=largeArraySize;
  //# sourceMappingURL=largeArraySize.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isArguments", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isArguments.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isArguments(e){return e&&"object"==typeof e&&"number"==typeof e.length&&toString.call(e)==argsClass||!1}var argsClass="[object Arguments]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isArguments;
  //# sourceMappingURL=isArguments.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/isNative", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/isNative.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function isNative(e){return"function"==typeof e&&reNative.test(e)}var objectProto=Object.prototype,toString=objectProto.toString,reNative=RegExp("^"+String(toString).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");module.exports=isNative;
  //# sourceMappingURL=isNative.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/objectTypes", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/objectTypes.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var objectTypes={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1};module.exports=objectTypes;
  //# sourceMappingURL=objectTypes.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/noop", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/noop.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function noop(){}module.exports=noop;
  //# sourceMappingURL=noop.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/setBindData", ["./isNative","../utilities/noop"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/setBindData.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var isNative=require("./isNative"),noop=require("../utilities/noop"),descriptor={configurable:!1,enumerable:!1,value:null,writable:!1},defineProperty=function(){try{var e={},r=isNative(r=Object.defineProperty)&&r,t=r(e,e,e)&&r}catch(a){}return t}(),setBindData=defineProperty?function(e,r){descriptor.value=r,defineProperty(e,"__bindData__",descriptor)}:noop;module.exports=setBindData;
  //# sourceMappingURL=setBindData.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/slice", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/slice.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function slice(e,r,t){r||(r=0),"undefined"==typeof t&&(t=e?e.length:0);for(var a=-1,n=t-r||0,o=Array(0>n?0:n);++a<n;)o[a]=e[r+a];return o}module.exports=slice;
  //# sourceMappingURL=slice.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseCreateWrapper", ["./baseCreate","../objects/isObject","./setBindData","./slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseCreateWrapper.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseCreateWrapper(e){function r(){var e=l?s:this;if(n){var b=slice(n);push.apply(b,arguments)}if((o||u)&&(b||(b=slice(arguments)),o&&push.apply(b,o),u&&b.length<i))return a|=16,baseCreateWrapper([t,f?a:-4&a,b,null,s,i]);if(b||(b=arguments),c&&(t=e[p]),this instanceof r){e=baseCreate(t.prototype);var d=t.apply(e,b);return isObject(d)?d:e}return t.apply(e,b)}var t=e[0],a=e[1],n=e[2],o=e[3],s=e[4],i=e[5],l=1&a,c=2&a,u=4&a,f=8&a,p=t;return setBindData(r,e),r}var baseCreate=require("./baseCreate"),isObject=require("../objects/isObject"),setBindData=require("./setBindData"),slice=require("./slice"),arrayRef=[],push=arrayRef.push;module.exports=baseCreateWrapper;
  //# sourceMappingURL=baseCreateWrapper.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isFunction", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isFunction.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isFunction(e){return"function"==typeof e}module.exports=isFunction;
  //# sourceMappingURL=isFunction.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/identity", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/identity.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function identity(e){return e}module.exports=identity;
  //# sourceMappingURL=identity.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/support", ["./internals/isNative"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/support.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  "format cjs";var isNative=require("./internals/isNative"),reThis=/\bthis\b/,support={};support.funcDecomp=!isNative(global.WinRTError)&&reThis.test(function(){return this}),support.funcNames="string"==typeof Function.name,module.exports=support;
  //# sourceMappingURL=support.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/forIn", ["../internals/baseCreateCallback","../internals/objectTypes"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/forIn.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";var baseCreateCallback=require("../internals/baseCreateCallback"),objectTypes=require("../internals/objectTypes"),forIn=function(e,r,t){var a,n=e,o=n;if(!n)return o;if(!objectTypes[typeof n])return o;r=r&&"undefined"==typeof t?r:baseCreateCallback(r,t,3);for(a in n)if(r(n[a],a,e)===!1)return o;return o};module.exports=forIn;
  //# sourceMappingURL=forIn.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/arrayPool", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/arrayPool.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var arrayPool=[];module.exports=arrayPool;
  //# sourceMappingURL=arrayPool.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/releaseArray", ["./arrayPool","./maxPoolSize"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/releaseArray.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function releaseArray(e){e.length=0,arrayPool.length<maxPoolSize&&arrayPool.push(e)}var arrayPool=require("./arrayPool"),maxPoolSize=require("./maxPoolSize");module.exports=releaseArray;
  //# sourceMappingURL=releaseArray.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/shimKeys", ["./objectTypes"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/shimKeys.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var objectTypes=require("./objectTypes"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,shimKeys=function(e){var r,t=e,a=[];if(!t)return a;if(!objectTypes[typeof e])return a;for(r in t)hasOwnProperty.call(t,r)&&a.push(r);return a};module.exports=shimKeys;
  //# sourceMappingURL=shimKeys.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/property", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/property.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function property(e){return function(r){return r[e]}}module.exports=property;
  //# sourceMappingURL=property.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/findIndex", ["../functions/createCallback"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/findIndex.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function findIndex(e,r,t){var a=-1,s=e?e.length:0;for(r=createCallback(r,t,3);++a<s;)if(r(e[a],a,e))return a;return-1}var createCallback=require("../functions/createCallback");module.exports=findIndex;
  //# sourceMappingURL=findIndex.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/findLastIndex", ["../functions/createCallback"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/findLastIndex.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function findLastIndex(e,r,t){var a=e?e.length:0;for(r=createCallback(r,t,3);a--;)if(r(e[a],a,e))return a;return-1}var createCallback=require("../functions/createCallback");module.exports=findLastIndex;
  //# sourceMappingURL=findLastIndex.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/first", ["../functions/createCallback","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/first.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function first(e,r,t){var a=0,n=e?e.length:0;if("number"!=typeof r&&null!=r){var s=-1;for(r=createCallback(r,t,3);++s<n&&r(e[s],s,e);)a++}else if(a=r,null==a||t)return e?e[0]:void 0;return slice(e,0,nativeMin(nativeMax(0,a),n))}var createCallback=require("../functions/createCallback"),slice=require("../internals/slice"),nativeMax=Math.max,nativeMin=Math.min;module.exports=first;
  //# sourceMappingURL=first.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/forOwn", ["../internals/baseCreateCallback","./keys","../internals/objectTypes"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/forOwn.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";var baseCreateCallback=require("../internals/baseCreateCallback"),keys=require("./keys"),objectTypes=require("../internals/objectTypes"),forOwn=function(e,r,t){var a,n=e,o=n;if(!n)return o;if(!objectTypes[typeof n])return o;r=r&&"undefined"==typeof t?r:baseCreateCallback(r,t,3);for(var s=-1,i=objectTypes[typeof n]&&keys(n),c=i?i.length:0;++s<c;)if(a=i[s],r(n[a],a,e)===!1)return o;return o};module.exports=forOwn;
  //# sourceMappingURL=forOwn.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/sortedIndex", ["../functions/createCallback","../utilities/identity"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/sortedIndex.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function sortedIndex(e,r,t,a){var n=0,s=e?e.length:n;for(t=t?createCallback(t,a,1):identity,r=t(r);s>n;){var o=n+s>>>1;t(e[o])<r?n=o+1:s=o}return n}var createCallback=require("../functions/createCallback"),identity=require("../utilities/identity");module.exports=sortedIndex;
  //# sourceMappingURL=sortedIndex.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/initial", ["../functions/createCallback","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/initial.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function initial(e,r,t){var a=0,n=e?e.length:0;if("number"!=typeof r&&null!=r){var s=n;for(r=createCallback(r,t,3);s--&&r(e[s],s,e);)a++}else a=null==r||t?1:r||a;return slice(e,0,nativeMin(nativeMax(0,n-a),n))}var createCallback=require("../functions/createCallback"),slice=require("../internals/slice"),nativeMax=Math.max,nativeMin=Math.min;module.exports=initial;
  //# sourceMappingURL=initial.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/intersection", ["../internals/baseIndexOf","../internals/cacheIndexOf","../internals/createCache","../internals/getArray","../objects/isArguments","../objects/isArray","../internals/largeArraySize","../internals/releaseArray","../internals/releaseObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/intersection.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function intersection(){for(var e=[],r=-1,t=arguments.length,a=getArray(),n=baseIndexOf,s=n===baseIndexOf,o=getArray();++r<t;){var i=arguments[r];(isArray(i)||isArguments(i))&&(e.push(i),a.push(s&&i.length>=largeArraySize&&createCache(r?e[r]:o)))}var l=e[0],c=-1,u=l?l.length:0,p=[];e:for(;++c<u;){var f=a[0];if(i=l[c],(f?cacheIndexOf(f,i):n(o,i))<0){for(r=t,(f||o).push(i);--r;)if(f=a[r],(f?cacheIndexOf(f,i):n(e[r],i))<0)continue e;p.push(i)}}for(;t--;)f=a[t],f&&releaseObject(f);return releaseArray(a),releaseArray(o),p}var baseIndexOf=require("../internals/baseIndexOf"),cacheIndexOf=require("../internals/cacheIndexOf"),createCache=require("../internals/createCache"),getArray=require("../internals/getArray"),isArguments=require("../objects/isArguments"),isArray=require("../objects/isArray"),largeArraySize=require("../internals/largeArraySize"),releaseArray=require("../internals/releaseArray"),releaseObject=require("../internals/releaseObject");module.exports=intersection;
  //# sourceMappingURL=intersection.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/last", ["../functions/createCallback","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/last.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function last(e,r,t){var a=0,n=e?e.length:0;if("number"!=typeof r&&null!=r){var s=n;for(r=createCallback(r,t,3);s--&&r(e[s],s,e);)a++}else if(a=r,null==a||t)return e?e[n-1]:void 0;return slice(e,nativeMax(0,n-a))}var createCallback=require("../functions/createCallback"),slice=require("../internals/slice"),nativeMax=Math.max;module.exports=last;
  //# sourceMappingURL=last.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/lastIndexOf", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/lastIndexOf.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function lastIndexOf(e,r,t){var a=e?e.length:0;for("number"==typeof t&&(a=(0>t?nativeMax(0,a+t):nativeMin(t,a-1))+1);a--;)if(e[a]===r)return a;return-1}var nativeMax=Math.max,nativeMin=Math.min;module.exports=lastIndexOf;
  //# sourceMappingURL=lastIndexOf.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/zipObject", ["../objects/isArray"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/zipObject.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function zipObject(e,r){var t=-1,a=e?e.length:0,n={};for(r||!a||isArray(e[0])||(r=[]);++t<a;){var s=e[t];r?n[s]=r[t]:s&&(n[s[0]]=s[1])}return n}var isArray=require("../objects/isArray");module.exports=zipObject;
  //# sourceMappingURL=zipObject.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/pull", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/pull.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function pull(e){for(var r=arguments,t=0,a=r.length,n=e?e.length:0;++t<a;)for(var s=-1,o=r[t];++s<n;)e[s]===o&&(splice.call(e,s--,1),n--);return e}var arrayRef=[],splice=arrayRef.splice;module.exports=pull;
  //# sourceMappingURL=pull.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/range", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/range.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function range(e,r,t){e=+e||0,t="number"==typeof t?t:+t||1,null==r&&(r=e,e=0);for(var a=-1,n=nativeMax(0,ceil((r-e)/(t||1))),s=Array(n);++a<n;)s[a]=e,e+=t;return s}var ceil=Math.ceil,nativeMax=Math.max;module.exports=range;
  //# sourceMappingURL=range.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/remove", ["../functions/createCallback"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/remove.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function remove(e,r,t){var a=-1,n=e?e.length:0,s=[];for(r=createCallback(r,t,3);++a<n;){var o=e[a];r(o,a,e)&&(s.push(o),splice.call(e,a--,1),n--)}return s}var createCallback=require("../functions/createCallback"),arrayRef=[],splice=arrayRef.splice;module.exports=remove;
  //# sourceMappingURL=remove.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseUniq", ["./baseIndexOf","./cacheIndexOf","./createCache","./getArray","./largeArraySize","./releaseArray","./releaseObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseUniq.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseUniq(e,r,t){var a=-1,n=baseIndexOf,s=e?e.length:0,o=[],i=!r&&s>=largeArraySize,l=t||i?getArray():o;if(i){var c=createCache(l);n=cacheIndexOf,l=c}for(;++a<s;){var u=e[a],f=t?t(u,a,e):u;(r?!a||l[l.length-1]!==f:n(l,f)<0)&&((t||i)&&l.push(f),o.push(u))}return i?(releaseArray(l.array),releaseObject(l)):t&&releaseArray(l),o}var baseIndexOf=require("./baseIndexOf"),cacheIndexOf=require("./cacheIndexOf"),createCache=require("./createCache"),getArray=require("./getArray"),largeArraySize=require("./largeArraySize"),releaseArray=require("./releaseArray"),releaseObject=require("./releaseObject");module.exports=baseUniq;
  //# sourceMappingURL=baseUniq.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/uniq", ["../internals/baseUniq","../functions/createCallback"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/uniq.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function uniq(e,r,t,a){return"boolean"!=typeof r&&null!=r&&(a=t,t="function"!=typeof r&&a&&a[r]===e?null:r,r=!1),null!=t&&(t=createCallback(t,a,3)),baseUniq(e,r,t)}var baseUniq=require("../internals/baseUniq"),createCallback=require("../functions/createCallback");module.exports=uniq;
  //# sourceMappingURL=uniq.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/charAtCallback", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/charAtCallback.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function charAtCallback(e){return e.charCodeAt(0)}module.exports=charAtCallback;
  //# sourceMappingURL=charAtCallback.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/forEach", ["../internals/baseCreateCallback","../objects/forOwn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/forEach.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function forEach(e,r,t){var a=-1,n=e?e.length:0;if(r=r&&"undefined"==typeof t?r:baseCreateCallback(r,t,3),"number"==typeof n)for(;++a<n&&r(e[a],a,e)!==!1;);else forOwn(e,r);return e}var baseCreateCallback=require("../internals/baseCreateCallback"),forOwn=require("../objects/forOwn");module.exports=forEach;
  //# sourceMappingURL=forEach.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isString", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isString.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isString(e){return"string"==typeof e||e&&"object"==typeof e&&toString.call(e)==stringClass||!1}var stringClass="[object String]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isString;
  //# sourceMappingURL=isString.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/pluck", ["./map"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/pluck.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";var map=require("./map"),pluck=map;module.exports=pluck;
  //# sourceMappingURL=pluck.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/without", ["../internals/baseDifference","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/without.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function without(e){return baseDifference(e,slice(arguments,1))}var baseDifference=require("../internals/baseDifference"),slice=require("../internals/slice");module.exports=without;
  //# sourceMappingURL=without.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/xor", ["../internals/baseDifference","../internals/baseUniq","../objects/isArguments","../objects/isArray"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/xor.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function xor(){for(var e=-1,r=arguments.length;++e<r;){var t=arguments[e];if(isArray(t)||isArguments(t))var a=a?baseUniq(baseDifference(a,t).concat(baseDifference(t,a))):t}return a||[]}var baseDifference=require("../internals/baseDifference"),baseUniq=require("../internals/baseUniq"),isArguments=require("../objects/isArguments"),isArray=require("../objects/isArray");module.exports=xor;
  //# sourceMappingURL=xor.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/lodashWrapper", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/lodashWrapper.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function lodashWrapper(e,r){this.__chain__=!!r,this.__wrapped__=e}module.exports=lodashWrapper;
  //# sourceMappingURL=lodashWrapper.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/tap", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/tap.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  "format cjs";function tap(e,r){return r(e),e}module.exports=tap;
  //# sourceMappingURL=tap.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/wrapperValueOf", ["../collections/forEach","../support"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/wrapperValueOf.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  "format cjs";function wrapperValueOf(){return this.__wrapped__}var forEach=require("../collections/forEach"),support=require("../support");module.exports=wrapperValueOf;
  //# sourceMappingURL=wrapperValueOf.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/wrapperChain", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/wrapperChain.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  "format cjs";function wrapperChain(){return this.__chain__=!0,this}module.exports=wrapperChain;
  //# sourceMappingURL=wrapperChain.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/wrapperToString", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/wrapperToString.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  "format cjs";function wrapperToString(){return String(this.__wrapped__)}module.exports=wrapperToString;
  //# sourceMappingURL=wrapperToString.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/every", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/every.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function every(e,r,t){var a=!0;r=createCallback(r,t,3);var n=-1,o=e?e.length:0;if("number"==typeof o)for(;++n<o&&(a=!!r(e[n],n,e)););else forOwn(e,function(e,t,n){return a=!!r(e,t,n)});return a}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=every;
  //# sourceMappingURL=every.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/some", ["../functions/createCallback","../objects/forOwn","../objects/isArray"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/some.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function some(e,r,t){var a;r=createCallback(r,t,3);var n=-1,o=e?e.length:0;if("number"==typeof o)for(;++n<o&&!(a=r(e[n],n,e)););else forOwn(e,function(e,t,n){return!(a=r(e,t,n))});return!!a}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray");module.exports=some;
  //# sourceMappingURL=some.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/at", ["../internals/baseFlatten","../objects/isString"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/at.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function at(e){for(var r=arguments,t=-1,a=baseFlatten(r,!0,!1,1),n=r[2]&&r[2][r[1]]===e?1:a.length,s=Array(n);++t<n;)s[t]=e[a[t]];return s}var baseFlatten=require("../internals/baseFlatten"),isString=require("../objects/isString");module.exports=at;
  //# sourceMappingURL=at.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/contains", ["../internals/baseIndexOf","../objects/forOwn","../objects/isArray","../objects/isString"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/contains.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function contains(e,r,t){var a=-1,n=baseIndexOf,s=e?e.length:0,o=!1;return t=(0>t?nativeMax(0,s+t):t)||0,isArray(e)?o=n(e,r,t)>-1:"number"==typeof s?o=(isString(e)?e.indexOf(r,t):n(e,r,t))>-1:forOwn(e,function(e){return++a>=t?!(o=e===r):void 0}),o}var baseIndexOf=require("../internals/baseIndexOf"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isString=require("../objects/isString"),nativeMax=Math.max;module.exports=contains;
  //# sourceMappingURL=contains.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/createAggregator", ["../functions/createCallback","../objects/forOwn","../objects/isArray"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/createAggregator.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function createAggregator(e){return function(r,t,a){var n={};t=createCallback(t,a,3);var s=-1,o=r?r.length:0;if("number"==typeof o)for(;++s<o;){var i=r[s];e(n,i,t(i,s,r),r)}else forOwn(r,function(r,a,s){e(n,r,t(r,a,s),s)});return n}}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray");module.exports=createAggregator;
  //# sourceMappingURL=createAggregator.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/find", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/find.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function find(e,r,t){r=createCallback(r,t,3);var a=-1,n=e?e.length:0;if("number"!=typeof n){var o;return forOwn(e,function(e,t,a){return r(e,t,a)?(o=e,!1):void 0}),o}for(;++a<n;){var s=e[a];if(r(s,a,e))return s}}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=find;
  //# sourceMappingURL=find.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/forEachRight", ["../internals/baseCreateCallback","../objects/forOwn","../objects/isArray","../objects/isString","../objects/keys"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/forEachRight.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function forEachRight(e,r,t){var a=e?e.length:0;if(r=r&&"undefined"==typeof t?r:baseCreateCallback(r,t,3),"number"==typeof a)for(;a--&&r(e[a],a,e)!==!1;);else{var n=keys(e);a=n.length,forOwn(e,function(e,t,o){return t=n?n[--a]:--a,r(o[t],t,o)})}return e}var baseCreateCallback=require("../internals/baseCreateCallback"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isString=require("../objects/isString"),keys=require("../objects/keys");module.exports=forEachRight;
  //# sourceMappingURL=forEachRight.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/filter", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/filter.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function filter(e,r,t){var a=[];r=createCallback(r,t,3);var n=-1,o=e?e.length:0;if("number"==typeof o)for(;++n<o;){var s=e[n];r(s,n,e)&&a.push(s)}else forOwn(e,function(e,t,n){r(e,t,n)&&a.push(e)});return a}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=filter;
  //# sourceMappingURL=filter.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/findLast", ["../functions/createCallback","./forEachRight"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/findLast.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function findLast(e,r,t){var a;return r=createCallback(r,t,3),forEachRight(e,function(e,t,n){return r(e,t,n)?(a=e,!1):void 0}),a}var createCallback=require("../functions/createCallback"),forEachRight=require("./forEachRight");module.exports=findLast;
  //# sourceMappingURL=findLast.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/reduce", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/reduce.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function reduce(e,r,t,a){if(!e)return t;var n=arguments.length<3;r=createCallback(r,a,4);var o=-1,s=e.length;if("number"==typeof s)for(n&&(t=e[++o]);++o<s;)t=r(t,e[o],o,e);else forOwn(e,function(e,a,o){t=n?(n=!1,e):r(t,e,a,o)});return t}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=reduce;
  //# sourceMappingURL=reduce.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/reduceRight", ["../functions/createCallback","./forEachRight"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/reduceRight.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function reduceRight(e,r,t,a){var n=arguments.length<3;return r=createCallback(r,a,4),forEachRight(e,function(e,a,o){t=n?(n=!1,e):r(t,e,a,o)}),t}var createCallback=require("../functions/createCallback"),forEachRight=require("./forEachRight");module.exports=reduceRight;
  //# sourceMappingURL=reduceRight.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/groupBy", ["../internals/createAggregator"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/groupBy.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";var createAggregator=require("../internals/createAggregator"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,groupBy=createAggregator(function(e,r,t){(hasOwnProperty.call(e,t)?e[t]:e[t]=[]).push(r)});module.exports=groupBy;
  //# sourceMappingURL=groupBy.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/indexBy", ["../internals/createAggregator"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/indexBy.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";var createAggregator=require("../internals/createAggregator"),indexBy=createAggregator(function(e,r,t){e[t]=r});module.exports=indexBy;
  //# sourceMappingURL=indexBy.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/invoke", ["./forEach","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/invoke.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function invoke(e,r){var t=slice(arguments,2),a=-1,n="function"==typeof r,o=e?e.length:0,s=Array("number"==typeof o?o:0);return forEach(e,function(e){s[++a]=(n?r:e[r]).apply(e,t)}),s}var forEach=require("./forEach"),slice=require("../internals/slice");module.exports=invoke;
  //# sourceMappingURL=invoke.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/min", ["../internals/charAtCallback","../functions/createCallback","./forEach","../objects/forOwn","../objects/isArray","../objects/isString"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/min.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function min(e,r,t){var a=1/0,n=a;if("function"!=typeof r&&t&&t[r]===e&&(r=null),null==r&&isArray(e))for(var o=-1,s=e.length;++o<s;){var i=e[o];n>i&&(n=i)}else r=null==r&&isString(e)?charAtCallback:createCallback(r,t,3),forEach(e,function(e,t,o){var s=r(e,t,o);a>s&&(a=s,n=e)});return n}var charAtCallback=require("../internals/charAtCallback"),createCallback=require("../functions/createCallback"),forEach=require("./forEach"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isString=require("../objects/isString");module.exports=min;
  //# sourceMappingURL=min.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/reject", ["../functions/createCallback","./filter"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/reject.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function reject(e,r,t){return r=createCallback(r,t,3),filter(e,function(e,t,a){return!r(e,t,a)})}var createCallback=require("../functions/createCallback"),filter=require("./filter");module.exports=reject;
  //# sourceMappingURL=reject.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseRandom", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseRandom.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseRandom(e,r){return e+floor(nativeRandom()*(r-e+1))}var floor=Math.floor,nativeRandom=Math.random;module.exports=baseRandom;
  //# sourceMappingURL=baseRandom.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/shuffle", ["../internals/baseRandom","./forEach"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/shuffle.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function shuffle(e){var r=-1,t=e?e.length:0,a=Array("number"==typeof t?t:0);return forEach(e,function(e){var t=baseRandom(0,++r);a[r]=a[t],a[t]=e}),a}var baseRandom=require("../internals/baseRandom"),forEach=require("./forEach");module.exports=shuffle;
  //# sourceMappingURL=shuffle.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/values", ["./keys"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/values.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function values(e){for(var r=-1,t=keys(e),a=t.length,o=Array(a);++r<a;)o[r]=e[t[r]];return o}var keys=require("./keys");module.exports=values;
  //# sourceMappingURL=values.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/size", ["../objects/keys"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/size.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function size(e){var r=e?e.length:0;return"number"==typeof r?r:keys(e).length}var keys=require("../objects/keys");module.exports=size;
  //# sourceMappingURL=size.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/compareAscending", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/compareAscending.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function compareAscending(e,r){for(var t=e.criteria,a=r.criteria,n=-1,s=t.length;++n<s;){var o=t[n],i=a[n];if(o!==i){if(o>i||"undefined"==typeof o)return 1;if(i>o||"undefined"==typeof i)return-1}}return e.index-r.index}module.exports=compareAscending;
  //# sourceMappingURL=compareAscending.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/toArray", ["../objects/isString","../internals/slice","../objects/values"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/toArray.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function toArray(e){return e&&"number"==typeof e.length?slice(e):values(e)}var isString=require("../objects/isString"),slice=require("../internals/slice"),values=require("../objects/values");module.exports=toArray;
  //# sourceMappingURL=toArray.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/where", ["./filter"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/where.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";var filter=require("./filter"),where=filter;module.exports=where;
  //# sourceMappingURL=where.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/after", ["../objects/isFunction"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/after.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function after(e,r){if(!isFunction(r))throw new TypeError;return function(){return--e<1?r.apply(this,arguments):void 0}}var isFunction=require("../objects/isFunction");module.exports=after;
  //# sourceMappingURL=after.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/functions", ["./forIn","./isFunction"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/functions.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function functions(e){var r=[];return forIn(e,function(e,t){isFunction(e)&&r.push(t)}),r.sort()}var forIn=require("./forIn"),isFunction=require("./isFunction");module.exports=functions;
  //# sourceMappingURL=functions.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/bindKey", ["../internals/createWrapper","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/bindKey.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function bindKey(e,r){return arguments.length>2?createWrapper(r,19,slice(arguments,2),null,e):createWrapper(r,3,null,null,e)}var createWrapper=require("../internals/createWrapper"),slice=require("../internals/slice");module.exports=bindKey;
  //# sourceMappingURL=bindKey.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/compose", ["../objects/isFunction"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/compose.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function compose(){for(var e=arguments,r=e.length;r--;)if(!isFunction(e[r]))throw new TypeError;return function(){for(var r=arguments,t=e.length;t--;)r=[e[t].apply(this,r)];return r[0]}}var isFunction=require("../objects/isFunction");module.exports=compose;
  //# sourceMappingURL=compose.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/curry", ["../internals/createWrapper"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/curry.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function curry(e,r){return r="number"==typeof r?r:+r||e.length,createWrapper(e,4,null,null,null,r)}var createWrapper=require("../internals/createWrapper");module.exports=curry;
  //# sourceMappingURL=curry.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/now", ["../internals/isNative"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/now.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";var isNative=require("../internals/isNative"),now=isNative(now=Date.now)&&now||function(){return(new Date).getTime()};module.exports=now;
  //# sourceMappingURL=now.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/defer", ["../objects/isFunction","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/defer.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function defer(e){if(!isFunction(e))throw new TypeError;var r=slice(arguments,1);return setTimeout(function(){e.apply(void 0,r)},1)}var isFunction=require("../objects/isFunction"),slice=require("../internals/slice");module.exports=defer;
  //# sourceMappingURL=defer.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/delay", ["../objects/isFunction","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/delay.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function delay(e,r){if(!isFunction(e))throw new TypeError;var t=slice(arguments,2);return setTimeout(function(){e.apply(void 0,t)},r)}var isFunction=require("../objects/isFunction"),slice=require("../internals/slice");module.exports=delay;
  //# sourceMappingURL=delay.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/memoize", ["../objects/isFunction","../internals/keyPrefix"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/memoize.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function memoize(e,r){if(!isFunction(e))throw new TypeError;var t=function(){var a=t.cache,n=r?r.apply(this,arguments):keyPrefix+arguments[0];return hasOwnProperty.call(a,n)?a[n]:a[n]=e.apply(this,arguments)};return t.cache={},t}var isFunction=require("../objects/isFunction"),keyPrefix=require("../internals/keyPrefix"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=memoize;
  //# sourceMappingURL=memoize.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/once", ["../objects/isFunction"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/once.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function once(e){var r,t;if(!isFunction(e))throw new TypeError;return function(){return r?t:(r=!0,t=e.apply(this,arguments),e=null,t)}}var isFunction=require("../objects/isFunction");module.exports=once;
  //# sourceMappingURL=once.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/partial", ["../internals/createWrapper","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/partial.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function partial(e){return createWrapper(e,16,slice(arguments,1))}var createWrapper=require("../internals/createWrapper"),slice=require("../internals/slice");module.exports=partial;
  //# sourceMappingURL=partial.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/partialRight", ["../internals/createWrapper","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/partialRight.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function partialRight(e){return createWrapper(e,32,null,slice(arguments,1))}var createWrapper=require("../internals/createWrapper"),slice=require("../internals/slice");module.exports=partialRight;
  //# sourceMappingURL=partialRight.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/throttle", ["./debounce","../objects/isFunction","../objects/isObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/throttle.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function throttle(e,r,t){var a=!0,n=!0;if(!isFunction(e))throw new TypeError;return t===!1?a=!1:isObject(t)&&(a="leading"in t?t.leading:a,n="trailing"in t?t.trailing:n),debounceOptions.leading=a,debounceOptions.maxWait=r,debounceOptions.trailing=n,debounce(e,r,debounceOptions)}var debounce=require("./debounce"),isFunction=require("../objects/isFunction"),isObject=require("../objects/isObject"),debounceOptions={leading:!1,maxWait:0,trailing:!1};module.exports=throttle;
  //# sourceMappingURL=throttle.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/wrap", ["../internals/createWrapper"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/wrap.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function wrap(e,r){return createWrapper(r,16,[e])}var createWrapper=require("../internals/createWrapper");module.exports=wrap;
  //# sourceMappingURL=wrap.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/assign", ["../internals/baseCreateCallback","./keys","../internals/objectTypes"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/assign.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";var baseCreateCallback=require("../internals/baseCreateCallback"),keys=require("./keys"),objectTypes=require("../internals/objectTypes"),assign=function(e,r,t){var a,o=e,n=o;if(!o)return n;var s=arguments,i=0,c="number"==typeof t?2:s.length;if(c>3&&"function"==typeof s[c-2])var l=baseCreateCallback(s[--c-1],s[c--],2);else c>2&&"function"==typeof s[c-1]&&(l=s[--c]);for(;++i<c;)if(o=s[i],o&&objectTypes[typeof o])for(var u=-1,f=objectTypes[typeof o]&&keys(o),p=f?f.length:0;++u<p;)a=f[u],n[a]=l?l(n[a],o[a]):o[a];return n};module.exports=assign;
  //# sourceMappingURL=assign.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseClone", ["../objects/assign","../collections/forEach","../objects/forOwn","./getArray","../objects/isArray","../objects/isObject","./releaseArray","./slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseClone.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseClone(e,r,t,a,n){if(t){var o=t(e);if("undefined"!=typeof o)return o}var s=isObject(e);if(!s)return e;var i=toString.call(e);if(!cloneableClasses[i])return e;var l=ctorByClass[i];switch(i){case boolClass:case dateClass:return new l(+e);case numberClass:case stringClass:return new l(e);case regexpClass:return o=l(e.source,reFlags.exec(e)),o.lastIndex=e.lastIndex,o}var c=isArray(e);if(r){var u=!a;a||(a=getArray()),n||(n=getArray());for(var f=a.length;f--;)if(a[f]==e)return n[f];o=c?l(e.length):{}}else o=c?slice(e):assign({},e);return c&&(hasOwnProperty.call(e,"index")&&(o.index=e.index),hasOwnProperty.call(e,"input")&&(o.input=e.input)),r?(a.push(e),n.push(o),(c?forEach:forOwn)(e,function(e,s){o[s]=baseClone(e,r,t,a,n)}),u&&(releaseArray(a),releaseArray(n)),o):o}var assign=require("../objects/assign"),forEach=require("../collections/forEach"),forOwn=require("../objects/forOwn"),getArray=require("./getArray"),isArray=require("../objects/isArray"),isObject=require("../objects/isObject"),releaseArray=require("./releaseArray"),slice=require("./slice"),reFlags=/\w*$/,argsClass="[object Arguments]",arrayClass="[object Array]",boolClass="[object Boolean]",dateClass="[object Date]",funcClass="[object Function]",numberClass="[object Number]",objectClass="[object Object]",regexpClass="[object RegExp]",stringClass="[object String]",cloneableClasses={};cloneableClasses[funcClass]=!1,cloneableClasses[argsClass]=cloneableClasses[arrayClass]=cloneableClasses[boolClass]=cloneableClasses[dateClass]=cloneableClasses[numberClass]=cloneableClasses[objectClass]=cloneableClasses[regexpClass]=cloneableClasses[stringClass]=!0;var objectProto=Object.prototype,toString=objectProto.toString,hasOwnProperty=objectProto.hasOwnProperty,ctorByClass={};ctorByClass[arrayClass]=Array,ctorByClass[boolClass]=Boolean,ctorByClass[dateClass]=Date,ctorByClass[funcClass]=Function,ctorByClass[objectClass]=Object,ctorByClass[numberClass]=Number,ctorByClass[regexpClass]=RegExp,ctorByClass[stringClass]=String,module.exports=baseClone;
  //# sourceMappingURL=baseClone.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/cloneDeep", ["../internals/baseClone","../internals/baseCreateCallback"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/cloneDeep.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function cloneDeep(e,r,t){return baseClone(e,!0,"function"==typeof r&&baseCreateCallback(r,t,1))}var baseClone=require("../internals/baseClone"),baseCreateCallback=require("../internals/baseCreateCallback");module.exports=cloneDeep;
  //# sourceMappingURL=cloneDeep.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/create", ["./assign","../internals/baseCreate"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/create.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function create(e,r){var t=baseCreate(e);return r?assign(t,r):t}var assign=require("./assign"),baseCreate=require("../internals/baseCreate");module.exports=create;
  //# sourceMappingURL=create.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/defaults", ["./keys","../internals/objectTypes"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/defaults.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";var keys=require("./keys"),objectTypes=require("../internals/objectTypes"),defaults=function(e,r,t){var a,n=e,o=n;if(!n)return o;for(var s=arguments,i=0,c="number"==typeof t?2:s.length;++i<c;)if(n=s[i],n&&objectTypes[typeof n])for(var l=-1,u=objectTypes[typeof n]&&keys(n),f=u?u.length:0;++l<f;)a=u[l],"undefined"==typeof o[a]&&(o[a]=n[a]);return o};module.exports=defaults;
  //# sourceMappingURL=defaults.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/findKey", ["../functions/createCallback","./forOwn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/findKey.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function findKey(e,r,t){var a;return r=createCallback(r,t,3),forOwn(e,function(e,t,n){return r(e,t,n)?(a=t,!1):void 0}),a}var createCallback=require("../functions/createCallback"),forOwn=require("./forOwn");module.exports=findKey;
  //# sourceMappingURL=findKey.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/forOwnRight", ["../internals/baseCreateCallback","./keys"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/forOwnRight.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function forOwnRight(e,r,t){var a=keys(e),n=a.length;for(r=baseCreateCallback(r,t,3);n--;){var o=a[n];if(r(e[o],o,e)===!1)break}return e}var baseCreateCallback=require("../internals/baseCreateCallback"),keys=require("./keys");module.exports=forOwnRight;
  //# sourceMappingURL=forOwnRight.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/forInRight", ["../internals/baseCreateCallback","./forIn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/forInRight.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function forInRight(e,r,t){var a=[];forIn(e,function(e,r){a.push(r,e)});var n=a.length;for(r=baseCreateCallback(r,t,3);n--&&r(a[n--],a[n],e)!==!1;);return e}var baseCreateCallback=require("../internals/baseCreateCallback"),forIn=require("./forIn");module.exports=forInRight;
  //# sourceMappingURL=forInRight.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/has", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/has.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function has(e,r){return e?hasOwnProperty.call(e,r):!1}var objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;module.exports=has;
  //# sourceMappingURL=has.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/invert", ["./keys"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/invert.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function invert(e){for(var r=-1,t=keys(e),a=t.length,n={};++r<a;){var o=t[r];n[e[o]]=o}return n}var keys=require("./keys");module.exports=invert;
  //# sourceMappingURL=invert.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isBoolean", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isBoolean.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isBoolean(e){return e===!0||e===!1||e&&"object"==typeof e&&toString.call(e)==boolClass||!1}var boolClass="[object Boolean]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isBoolean;
  //# sourceMappingURL=isBoolean.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isDate", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isDate.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isDate(e){return e&&"object"==typeof e&&toString.call(e)==dateClass||!1}var dateClass="[object Date]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isDate;
  //# sourceMappingURL=isDate.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isElement", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isElement.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isElement(e){return e&&1===e.nodeType||!1}module.exports=isElement;
  //# sourceMappingURL=isElement.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isEmpty", ["./forOwn","./isFunction"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isEmpty.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isEmpty(e){var r=!0;if(!e)return r;var t=toString.call(e),a=e.length;return t==arrayClass||t==stringClass||t==argsClass||t==objectClass&&"number"==typeof a&&isFunction(e.splice)?!a:(forOwn(e,function(){return r=!1}),r)}var forOwn=require("./forOwn"),isFunction=require("./isFunction"),argsClass="[object Arguments]",arrayClass="[object Array]",objectClass="[object Object]",stringClass="[object String]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isEmpty;
  //# sourceMappingURL=isEmpty.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isEqual", ["../internals/baseCreateCallback","../internals/baseIsEqual"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isEqual.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isEqual(e,r,t,a){return baseIsEqual(e,r,"function"==typeof t&&baseCreateCallback(t,a,2))}var baseCreateCallback=require("../internals/baseCreateCallback"),baseIsEqual=require("../internals/baseIsEqual");module.exports=isEqual;
  //# sourceMappingURL=isEqual.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isFinite", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isFinite.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isFinite(e){return nativeIsFinite(e)&&!nativeIsNaN(parseFloat(e))}var nativeIsFinite=global.isFinite,nativeIsNaN=global.isNaN;module.exports=isFinite;
  //# sourceMappingURL=isFinite.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isNumber", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isNumber.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isNumber(e){return"number"==typeof e||e&&"object"==typeof e&&toString.call(e)==numberClass||!1}var numberClass="[object Number]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isNumber;
  //# sourceMappingURL=isNumber.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isNull", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isNull.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isNull(e){return null===e}module.exports=isNull;
  //# sourceMappingURL=isNull.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/shimIsPlainObject", ["../objects/forIn","../objects/isFunction"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/shimIsPlainObject.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function shimIsPlainObject(e){var r,t;return e&&toString.call(e)==objectClass&&(r=e.constructor,!isFunction(r)||r instanceof r)?(forIn(e,function(e,r){t=r}),"undefined"==typeof t||hasOwnProperty.call(e,t)):!1}var forIn=require("../objects/forIn"),isFunction=require("../objects/isFunction"),objectClass="[object Object]",objectProto=Object.prototype,toString=objectProto.toString,hasOwnProperty=objectProto.hasOwnProperty;module.exports=shimIsPlainObject;
  //# sourceMappingURL=shimIsPlainObject.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isRegExp", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isRegExp.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isRegExp(e){return e&&"object"==typeof e&&toString.call(e)==regexpClass||!1}var regexpClass="[object RegExp]",objectProto=Object.prototype,toString=objectProto.toString;module.exports=isRegExp;
  //# sourceMappingURL=isRegExp.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isUndefined", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isUndefined.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isUndefined(e){return"undefined"==typeof e}module.exports=isUndefined;
  //# sourceMappingURL=isUndefined.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/mapValues", ["../functions/createCallback","./forOwn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/mapValues.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function mapValues(e,r,t){var a={};return r=createCallback(r,t,3),forOwn(e,function(e,t,o){a[t]=r(e,t,o)}),a}var createCallback=require("../functions/createCallback"),forOwn=require("./forOwn");module.exports=mapValues;
  //# sourceMappingURL=mapValues.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseMerge", ["../collections/forEach","../objects/forOwn","../objects/isArray","../objects/isPlainObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseMerge.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseMerge(e,r,t,a,n){(isArray(r)?forEach:forOwn)(r,function(r,s){var o,i,l=r,c=e[s];if(r&&((i=isArray(r))||isPlainObject(r))){for(var u=a.length;u--;)if(o=a[u]==r){c=n[u];break}if(!o){var f;t&&(l=t(c,r),(f="undefined"!=typeof l)&&(c=l)),f||(c=i?isArray(c)?c:[]:isPlainObject(c)?c:{}),a.push(r),n.push(c),f||baseMerge(c,r,t,a,n)}}else t&&(l=t(c,r),"undefined"==typeof l&&(l=r)),"undefined"!=typeof l&&(c=l);e[s]=c})}var forEach=require("../collections/forEach"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isPlainObject=require("../objects/isPlainObject");module.exports=baseMerge;
  //# sourceMappingURL=baseMerge.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/omit", ["../internals/baseDifference","../internals/baseFlatten","../functions/createCallback","./forIn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/omit.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function omit(e,r,t){var a={};if("function"!=typeof r){var o=[];forIn(e,function(e,r){o.push(r)}),o=baseDifference(o,baseFlatten(arguments,!0,!1,1));for(var n=-1,s=o.length;++n<s;){var i=o[n];a[i]=e[i]}}else r=createCallback(r,t,3),forIn(e,function(e,t,o){r(e,t,o)||(a[t]=e)});return a}var baseDifference=require("../internals/baseDifference"),baseFlatten=require("../internals/baseFlatten"),createCallback=require("../functions/createCallback"),forIn=require("./forIn");module.exports=omit;
  //# sourceMappingURL=omit.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/pairs", ["./keys"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/pairs.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function pairs(e){for(var r=-1,t=keys(e),a=t.length,o=Array(a);++r<a;){var n=t[r];o[r]=[n,e[n]]}return o}var keys=require("./keys");module.exports=pairs;
  //# sourceMappingURL=pairs.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/pick", ["../internals/baseFlatten","../functions/createCallback","./forIn","./isObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/pick.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function pick(e,r,t){var a={};if("function"!=typeof r)for(var o=-1,n=baseFlatten(arguments,!0,!1,1),s=isObject(e)?n.length:0;++o<s;){var i=n[o];i in e&&(a[i]=e[i])}else r=createCallback(r,t,3),forIn(e,function(e,t,o){r(e,t,o)&&(a[t]=e)});return a}var baseFlatten=require("../internals/baseFlatten"),createCallback=require("../functions/createCallback"),forIn=require("./forIn"),isObject=require("./isObject");module.exports=pick;
  //# sourceMappingURL=pick.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/transform", ["../internals/baseCreate","../functions/createCallback","../collections/forEach","./forOwn","./isArray"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/transform.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function transform(e,r,t,a){var o=isArray(e);if(null==t)if(o)t=[];else{var n=e&&e.constructor,s=n&&n.prototype;t=baseCreate(s)}return r&&(r=createCallback(r,a,4),(o?forEach:forOwn)(e,function(e,a,o){return r(t,e,a,o)})),t}var baseCreate=require("../internals/baseCreate"),createCallback=require("../functions/createCallback"),forEach=require("../collections/forEach"),forOwn=require("./forOwn"),isArray=require("./isArray");module.exports=transform;
  //# sourceMappingURL=transform.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/constant", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/constant.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function constant(e){return function(){return e}}module.exports=constant;
  //# sourceMappingURL=constant.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/htmlEscapes", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/htmlEscapes.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var htmlEscapes={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};module.exports=htmlEscapes;
  //# sourceMappingURL=htmlEscapes.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/reUnescapedHtml", ["./htmlEscapes","../objects/keys"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/reUnescapedHtml.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var htmlEscapes=require("./htmlEscapes"),keys=require("../objects/keys"),reUnescapedHtml=RegExp("["+keys(htmlEscapes).join("")+"]","g");module.exports=reUnescapedHtml;
  //# sourceMappingURL=reUnescapedHtml.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/mixin", ["../collections/forEach","../objects/functions","../objects/isFunction","../objects/isObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/mixin.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function mixin(e,r,t){var a=!0,o=r&&functions(r);t===!1?a=!1:isObject(t)&&"chain"in t&&(a=t.chain);var n=e,s=isFunction(n);forEach(o,function(t){var o=e[t]=r[t];s&&(n.prototype[t]=function(){var r=this.__chain__,t=this.__wrapped__,s=[t];push.apply(s,arguments);var i=o.apply(e,s);if(a||r){if(t===i&&isObject(i))return this;i=new n(i),i.__chain__=r}return i})})}var forEach=require("../collections/forEach"),functions=require("../objects/functions"),isFunction=require("../objects/isFunction"),isObject=require("../objects/isObject"),arrayRef=[],push=arrayRef.push;module.exports=mixin;
  //# sourceMappingURL=mixin.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/noConflict", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/noConflict.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function noConflict(){return global._=oldDash,this}var oldDash=global._;module.exports=noConflict;
  //# sourceMappingURL=noConflict.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/parseInt", ["../objects/isString"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/parseInt.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";var isString=require("../objects/isString"),whitespace=" 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",reLeadingSpacesAndZeros=RegExp("^["+whitespace+"]*0+(?=.$)"),nativeParseInt=global.parseInt,parseInt=8==nativeParseInt(whitespace+"08")?nativeParseInt:function(e,r){return nativeParseInt(isString(e)?e.replace(reLeadingSpacesAndZeros,""):e,r||0)};module.exports=parseInt;
  //# sourceMappingURL=parseInt.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/random", ["../internals/baseRandom"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/random.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function random(e,r,t){var a=null==e,n=null==r;if(null==t&&("boolean"==typeof e&&n?(t=e,e=1):n||"boolean"!=typeof r||(t=r,n=!0)),a&&n&&(r=1),e=+e||0,n?(r=e,e=0):r=+r||0,t||e%1||r%1){var o=nativeRandom();return nativeMin(e+o*(r-e+parseFloat("1e-"+((o+"").length-1))),r)}return baseRandom(e,r)}var baseRandom=require("../internals/baseRandom"),nativeMin=Math.min,nativeRandom=Math.random;module.exports=random;
  //# sourceMappingURL=random.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/result", ["../objects/isFunction"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/result.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function result(e,r){if(e){var t=e[r];return isFunction(t)?e[r]():t}}var isFunction=require("../objects/isFunction");module.exports=result;
  //# sourceMappingURL=result.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/escapeStringChar", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/escapeStringChar.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function escapeStringChar(e){return"\\"+stringEscapes[e]}var stringEscapes={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"};module.exports=escapeStringChar;
  //# sourceMappingURL=escapeStringChar.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/reInterpolate", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/reInterpolate.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var reInterpolate=/<%=([\s\S]+?)%>/g;module.exports=reInterpolate;
  //# sourceMappingURL=reInterpolate.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/templateSettings", ["./escape","../internals/reInterpolate"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/templateSettings.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";var escape=require("./escape"),reInterpolate=require("../internals/reInterpolate"),templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:reInterpolate,variable:"",imports:{_:{escape:escape}}};module.exports=templateSettings;
  //# sourceMappingURL=templateSettings.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/times", ["../internals/baseCreateCallback"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/times.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function times(e,r,t){e=(e=+e)>-1?e:0;var a=-1,n=Array(e);for(r=baseCreateCallback(r,t,1);++a<e;)n[a]=r(a);return n}var baseCreateCallback=require("../internals/baseCreateCallback");module.exports=times;
  //# sourceMappingURL=times.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/htmlUnescapes", ["./htmlEscapes","../objects/invert"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/htmlUnescapes.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var htmlEscapes=require("./htmlEscapes"),invert=require("../objects/invert"),htmlUnescapes=invert(htmlEscapes);module.exports=htmlUnescapes;
  //# sourceMappingURL=htmlUnescapes.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/unescapeHtmlChar", ["./htmlUnescapes"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/unescapeHtmlChar.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function unescapeHtmlChar(e){return htmlUnescapes[e]}var htmlUnescapes=require("./htmlUnescapes");module.exports=unescapeHtmlChar;
  //# sourceMappingURL=unescapeHtmlChar.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/uniqueId", [], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/uniqueId.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function uniqueId(e){var r=++idCounter;return String(null==e?"":e)+r}var idCounter=0;module.exports=uniqueId;
  //# sourceMappingURL=uniqueId.js.map
  global.define = __define;
  return module.exports;
});

"format amd";!function(e,t){if("object"==typeof exports&&exports)t(exports);else{var n={};t(n),"function"==typeof define&&define.amd?define("github:janl/mustache.js@0.8.2/mustache", n):e.Mustache=n}}(this,function(e){function t(e,t){return f.call(e,t)}function n(e){return!t(g,e)}function r(e){return"function"==typeof e}function i(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function s(e){return String(e).replace(/[&<>"'\/]/g,function(e){return v[e]})}function o(e){if(!w(e)||2!==e.length)throw new Error("Invalid tags: "+e);return[new RegExp(i(e[0])+"\\s*"),new RegExp("\\s*"+i(e[1]))]}function a(t,r){function s(){if(j&&!C)for(;T.length;)delete E[T.pop()];else T=[];j=!1,C=!1}r=r||e.tags,t=t||"","string"==typeof r&&(r=r.split(y));for(var a,l,p,f,g,d,w=o(r),v=new h(t),U=[],E=[],T=[],j=!1,C=!1;!v.eos();){if(a=v.pos,p=v.scanUntil(w[0]))for(var A=0,R=p.length;R>A;++A)f=p.charAt(A),n(f)?T.push(E.length):C=!0,E.push(["text",f,a,a+1]),a+=1,"\n"===f&&s();if(!v.scan(w[0]))break;if(j=!0,l=v.scan(m)||"name",v.scan(k),"="===l?(p=v.scanUntil(b),v.scan(b),v.scanUntil(w[1])):"{"===l?(p=v.scanUntil(new RegExp("\\s*"+i("}"+r[1]))),v.scan(x),v.scanUntil(w[1]),l="&"):p=v.scanUntil(w[1]),!v.scan(w[1]))throw new Error("Unclosed tag at "+v.pos);if(g=[l,p,a,v.pos],E.push(g),"#"===l||"^"===l)U.push(g);else if("/"===l){if(d=U.pop(),!d)throw new Error('Unopened section "'+p+'" at '+a);if(d[1]!==p)throw new Error('Unclosed section "'+d[1]+'" at '+a)}else"name"===l||"{"===l||"&"===l?C=!0:"="===l&&(w=o(r=p.split(y)))}if(d=U.pop())throw new Error('Unclosed section "'+d[1]+'" at '+v.pos);return u(c(E))}function c(e){for(var t,n,r=[],i=0,s=e.length;s>i;++i)t=e[i],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function u(e){for(var t,n,r=[],i=r,s=[],o=0,a=e.length;a>o;++o)switch(t=e[o],t[0]){case"#":case"^":i.push(t),s.push(t),i=t[4]=[];break;case"/":n=s.pop(),n[5]=t[2],i=s.length>0?s[s.length-1][4]:r;break;default:i.push(t)}return r}function h(e){this.string=e,this.tail=e,this.pos=0}function l(e,t){this.view=null==e?{}:e,this.cache={".":this.view},this.parent=t}function p(){this.cache={}}var f=RegExp.prototype.test,g=/\S/,d=Object.prototype.toString,w=Array.isArray||function(e){return"[object Array]"===d.call(e)},v={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},k=/\s*/,y=/\s+/,b=/\s*=/,x=/\s*\}/,m=/#|\^|\/|>|\{|&|=|!/;h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(e){var t=this.tail.match(e);if(t&&0===t.index){var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n}return""},h.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},l.prototype.push=function(e){return new l(e,this)},l.prototype.lookup=function(e){var t;if(e in this.cache)t=this.cache[e];else{for(var n=this;n;){if(e.indexOf(".")>0){t=n.view;for(var i=e.split("."),s=0;null!=t&&s<i.length;)t=t[i[s++]]}else t=n.view[e];if(null!=t)break;n=n.parent}this.cache[e]=t}return r(t)&&(t=t.call(this.view)),t},p.prototype.clearCache=function(){this.cache={}},p.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=a(e,t)),r},p.prototype.render=function(e,t,n){var r=this.parse(e),i=t instanceof l?t:new l(t);return this.renderTokens(r,i,n,e)},p.prototype.renderTokens=function(t,n,i,s){function o(e){return h.render(e,n,i)}for(var a,c,u="",h=this,l=0,p=t.length;p>l;++l)switch(a=t[l],a[0]){case"#":if(c=n.lookup(a[1]),!c)continue;if(w(c))for(var f=0,g=c.length;g>f;++f)u+=this.renderTokens(a[4],n.push(c[f]),i,s);else if("object"==typeof c||"string"==typeof c)u+=this.renderTokens(a[4],n.push(c),i,s);else if(r(c)){if("string"!=typeof s)throw new Error("Cannot use higher-order sections without the original template");c=c.call(n.view,s.slice(a[3],a[5]),o),null!=c&&(u+=c)}else u+=this.renderTokens(a[4],n,i,s);break;case"^":c=n.lookup(a[1]),(!c||w(c)&&0===c.length)&&(u+=this.renderTokens(a[4],n,i,s));break;case">":if(!i)continue;c=r(i)?i(a[1]):i[a[1]],null!=c&&(u+=this.renderTokens(this.parse(c),n,i,c));break;case"&":c=n.lookup(a[1]),null!=c&&(u+=c);break;case"name":c=n.lookup(a[1]),null!=c&&(u+=e.escape(c));break;case"text":u+=a[1]}return u},e.name="mustache.js",e.version="0.8.1",e.tags=["{{","}}"];var U=new p;e.clearCache=function(){return U.clearCache()},e.parse=function(e,t){return U.parse(e,t)},e.render=function(e,t,n){return U.render(e,t,n)},e.to_html=function(t,n,i,s){var o=e.render(t,n,i);return r(s)?void s(o):o},e.escape=s,e.Scanner=h,e.Context=l,e.Writer=p});
//# sourceMappingURL=mustache.js.map

System.register("github:components/jquery@2.1.1", ["github:components/jquery@2.1.1/jquery.min"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/github/components/jquery@2.1.1.js";
    var __dirname = "jspm_packages/github/components";
  module.exports = require("github:components/jquery@2.1.1/jquery.min");
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/cacheIndexOf", ["./baseIndexOf","./keyPrefix"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/cacheIndexOf.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function cacheIndexOf(e,r){var t=typeof r;if(e=e.cache,"boolean"==t||null==r)return e[r]?0:-1;"number"!=t&&"string"!=t&&(t="object");var a="number"==t?r:keyPrefix+r;return e=(e=e[t])&&e[a],"object"==t?e&&baseIndexOf(e,r)>-1?0:-1:e?0:-1}var baseIndexOf=require("./baseIndexOf"),keyPrefix=require("./keyPrefix");module.exports=cacheIndexOf;
  //# sourceMappingURL=cacheIndexOf.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/getObject", ["./objectPool"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/getObject.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function getObject(){return objectPool.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}var objectPool=require("./objectPool");module.exports=getObject;
  //# sourceMappingURL=getObject.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/releaseObject", ["./maxPoolSize","./objectPool"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/releaseObject.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function releaseObject(e){var r=e.cache;r&&releaseObject(r),e.array=e.cache=e.criteria=e.object=e.number=e.string=e.value=null,objectPool.length<maxPoolSize&&objectPool.push(e)}var maxPoolSize=require("./maxPoolSize"),objectPool=require("./objectPool");module.exports=releaseObject;
  //# sourceMappingURL=releaseObject.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isArray", ["../internals/isNative"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isArray.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";var isNative=require("../internals/isNative"),arrayClass="[object Array]",objectProto=Object.prototype,toString=objectProto.toString,nativeIsArray=isNative(nativeIsArray=Array.isArray)&&nativeIsArray,isArray=nativeIsArray||function(e){return e&&"object"==typeof e&&"number"==typeof e.length&&toString.call(e)==arrayClass||!1};module.exports=isArray;
  //# sourceMappingURL=isArray.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isObject", ["../internals/objectTypes"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isObject.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isObject(e){return!(!e||!objectTypes[typeof e])}var objectTypes=require("../internals/objectTypes");module.exports=isObject;
  //# sourceMappingURL=isObject.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/getArray", ["./arrayPool"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/getArray.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function getArray(){return arrayPool.pop()||[]}var arrayPool=require("./arrayPool");module.exports=getArray;
  //# sourceMappingURL=getArray.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/keys", ["../internals/isNative","./isObject","../internals/shimKeys"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/keys.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";var isNative=require("../internals/isNative"),isObject=require("./isObject"),shimKeys=require("../internals/shimKeys"),nativeKeys=isNative(nativeKeys=Object.keys)&&nativeKeys,keys=nativeKeys?function(e){return isObject(e)?nativeKeys(e):[]}:shimKeys;module.exports=keys;
  //# sourceMappingURL=keys.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/map", ["../functions/createCallback","../objects/forOwn"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/map.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function map(e,r,t){var a=-1,n=e?e.length:0;if(r=createCallback(r,t,3),"number"==typeof n)for(var o=Array(n);++a<n;)o[a]=r(e[a],a,e);else o=[],forOwn(e,function(e,t,n){o[++a]=r(e,t,n)});return o}var createCallback=require("../functions/createCallback"),forOwn=require("../objects/forOwn");module.exports=map;
  //# sourceMappingURL=map.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/indexOf", ["../internals/baseIndexOf","./sortedIndex"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/indexOf.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function indexOf(e,r,t){if("number"==typeof t){var a=e?e.length:0;t=0>t?nativeMax(0,a+t):t||0}else if(t){var n=sortedIndex(e,r);return e[n]===r?n:-1}return baseIndexOf(e,r,t)}var baseIndexOf=require("../internals/baseIndexOf"),sortedIndex=require("./sortedIndex"),nativeMax=Math.max;module.exports=indexOf;
  //# sourceMappingURL=indexOf.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/union", ["../internals/baseFlatten","../internals/baseUniq"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/union.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function union(){return baseUniq(baseFlatten(arguments,!0,!0))}var baseFlatten=require("../internals/baseFlatten"),baseUniq=require("../internals/baseUniq");module.exports=union;
  //# sourceMappingURL=union.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/max", ["../internals/charAtCallback","../functions/createCallback","./forEach","../objects/forOwn","../objects/isArray","../objects/isString"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/max.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function max(e,r,t){var a=-1/0,n=a;if("function"!=typeof r&&t&&t[r]===e&&(r=null),null==r&&isArray(e))for(var o=-1,s=e.length;++o<s;){var i=e[o];i>n&&(n=i)}else r=null==r&&isString(e)?charAtCallback:createCallback(r,t,3),forEach(e,function(e,t,o){var s=r(e,t,o);s>a&&(a=s,n=e)});return n}var charAtCallback=require("../internals/charAtCallback"),createCallback=require("../functions/createCallback"),forEach=require("./forEach"),forOwn=require("../objects/forOwn"),isArray=require("../objects/isArray"),isString=require("../objects/isString");module.exports=max;
  //# sourceMappingURL=max.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining/chain", ["../internals/lodashWrapper"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining/chain.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining";
  "format cjs";function chain(e){return e=new lodashWrapper(e),e.__chain__=!0,e}var lodashWrapper=require("../internals/lodashWrapper");module.exports=chain;
  //# sourceMappingURL=chain.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/countBy", ["../internals/createAggregator"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/countBy.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";var createAggregator=require("../internals/createAggregator"),objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty,countBy=createAggregator(function(e,r,t){hasOwnProperty.call(e,t)?e[t]++:e[t]=1});module.exports=countBy;
  //# sourceMappingURL=countBy.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/sample", ["../internals/baseRandom","../objects/isString","./shuffle","../objects/values"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/sample.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function sample(e,r,t){if(e&&"number"!=typeof e.length&&(e=values(e)),null==r||t)return e?e[baseRandom(0,e.length-1)]:void 0;var a=shuffle(e);return a.length=nativeMin(nativeMax(0,r),a.length),a}var baseRandom=require("../internals/baseRandom"),isString=require("../objects/isString"),shuffle=require("./shuffle"),values=require("../objects/values"),nativeMax=Math.max,nativeMin=Math.min;module.exports=sample;
  //# sourceMappingURL=sample.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections/sortBy", ["../internals/compareAscending","../functions/createCallback","./forEach","../internals/getArray","../internals/getObject","../objects/isArray","./map","../internals/releaseArray","../internals/releaseObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections/sortBy.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/collections";
  "format cjs";function sortBy(e,r,t){var a=-1,n=isArray(r),o=e?e.length:0,s=Array("number"==typeof o?o:0);for(n||(r=createCallback(r,t,3)),forEach(e,function(e,t,o){var i=s[++a]=getObject();n?i.criteria=map(r,function(r){return e[r]}):(i.criteria=getArray())[0]=r(e,t,o),i.index=a,i.value=e}),o=s.length,s.sort(compareAscending);o--;){var i=s[o];s[o]=i.value,n||releaseArray(i.criteria),releaseObject(i)}return s}var compareAscending=require("../internals/compareAscending"),createCallback=require("../functions/createCallback"),forEach=require("./forEach"),getArray=require("../internals/getArray"),getObject=require("../internals/getObject"),isArray=require("../objects/isArray"),map=require("./map"),releaseArray=require("../internals/releaseArray"),releaseObject=require("../internals/releaseObject");module.exports=sortBy;
  //# sourceMappingURL=sortBy.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/bindAll", ["../internals/baseFlatten","../internals/createWrapper","../objects/functions"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/bindAll.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function bindAll(e){for(var r=arguments.length>1?baseFlatten(arguments,!0,!1,1):functions(e),t=-1,a=r.length;++t<a;){var n=r[t];e[n]=createWrapper(e[n],1,null,null,e)}return e}var baseFlatten=require("../internals/baseFlatten"),createWrapper=require("../internals/createWrapper"),functions=require("../objects/functions");module.exports=bindAll;
  //# sourceMappingURL=bindAll.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/debounce", ["../objects/isFunction","../objects/isObject","../utilities/now"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/debounce.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function debounce(e,r,t){var a,n,o,s,i,c,l,u=0,f=!1,p=!0;if(!isFunction(e))throw new TypeError;if(r=nativeMax(0,r)||0,t===!0){var b=!0;p=!1}else isObject(t)&&(b=t.leading,f="maxWait"in t&&(nativeMax(r,t.maxWait)||0),p="trailing"in t?t.trailing:p);var m=function(){var t=r-(now()-s);if(0>=t){n&&clearTimeout(n);var f=l;n=c=l=void 0,f&&(u=now(),o=e.apply(i,a),c||n||(a=i=null))}else c=setTimeout(m,t)},d=function(){c&&clearTimeout(c),n=c=l=void 0,(p||f!==r)&&(u=now(),o=e.apply(i,a),c||n||(a=i=null))};return function(){if(a=arguments,s=now(),i=this,l=p&&(c||!b),f===!1)var t=b&&!c;else{n||b||(u=s);var h=f-(s-u),y=0>=h;y?(n&&(n=clearTimeout(n)),u=s,o=e.apply(i,a)):n||(n=setTimeout(d,h))}return y&&c?c=clearTimeout(c):c||r===f||(c=setTimeout(m,r)),t&&(y=!0,o=e.apply(i,a)),!y||c||n||(a=i=null),o}}var isFunction=require("../objects/isFunction"),isObject=require("../objects/isObject"),now=require("../utilities/now"),nativeMax=Math.max;module.exports=debounce;
  //# sourceMappingURL=debounce.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/clone", ["../internals/baseClone","../internals/baseCreateCallback"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/clone.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function clone(e,r,t,a){return"boolean"!=typeof r&&null!=r&&(a=t,t=r,r=!1),baseClone(e,r,"function"==typeof t&&baseCreateCallback(t,a,1))}var baseClone=require("../internals/baseClone"),baseCreateCallback=require("../internals/baseCreateCallback");module.exports=clone;
  //# sourceMappingURL=clone.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/findLastKey", ["../functions/createCallback","./forOwnRight"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/findLastKey.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function findLastKey(e,r,t){var a;return r=createCallback(r,t,3),forOwnRight(e,function(e,t,n){return r(e,t,n)?(a=t,!1):void 0}),a}var createCallback=require("../functions/createCallback"),forOwnRight=require("./forOwnRight");module.exports=findLastKey;
  //# sourceMappingURL=findLastKey.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isNaN", ["./isNumber"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isNaN.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function isNaN(e){return isNumber(e)&&e!=+e}var isNumber=require("./isNumber");module.exports=isNaN;
  //# sourceMappingURL=isNaN.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/isPlainObject", ["../internals/isNative","../internals/shimIsPlainObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/isPlainObject.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";var isNative=require("../internals/isNative"),shimIsPlainObject=require("../internals/shimIsPlainObject"),objectClass="[object Object]",objectProto=Object.prototype,toString=objectProto.toString,getPrototypeOf=isNative(getPrototypeOf=Object.getPrototypeOf)&&getPrototypeOf,isPlainObject=getPrototypeOf?function(e){if(!e||toString.call(e)!=objectClass)return!1;var r=e.valueOf,t=isNative(r)&&(t=getPrototypeOf(r))&&getPrototypeOf(t);return t?e==t||getPrototypeOf(e)==t:shimIsPlainObject(e)}:shimIsPlainObject;module.exports=isPlainObject;
  //# sourceMappingURL=isPlainObject.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects/merge", ["../internals/baseCreateCallback","../internals/baseMerge","../internals/getArray","./isObject","../internals/releaseArray","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects/merge.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/objects";
  "format cjs";function merge(e){var r=arguments,t=2;if(!isObject(e))return e;if("number"!=typeof r[2]&&(t=r.length),t>3&&"function"==typeof r[t-2])var a=baseCreateCallback(r[--t-1],r[t--],2);else t>2&&"function"==typeof r[t-1]&&(a=r[--t]);for(var o=slice(arguments,1,t),n=-1,s=getArray(),i=getArray();++n<t;)baseMerge(e,o[n],a,s,i);return releaseArray(s),releaseArray(i),e}var baseCreateCallback=require("../internals/baseCreateCallback"),baseMerge=require("../internals/baseMerge"),getArray=require("../internals/getArray"),isObject=require("./isObject"),releaseArray=require("../internals/releaseArray"),slice=require("../internals/slice");module.exports=merge;
  //# sourceMappingURL=merge.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/escapeHtmlChar", ["./htmlEscapes"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/escapeHtmlChar.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function escapeHtmlChar(e){return htmlEscapes[e]}var htmlEscapes=require("./htmlEscapes");module.exports=escapeHtmlChar;
  //# sourceMappingURL=escapeHtmlChar.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/template", ["../objects/defaults","./escape","../internals/escapeStringChar","../objects/keys","../internals/reInterpolate","./templateSettings","../objects/values"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/template.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function template(e,r,t){var a=templateSettings.imports._.templateSettings||templateSettings;e=String(e||""),t=defaults({},t,a);var n,o=defaults({},t.imports,a.imports),s=keys(o),i=values(o),c=0,l=t.interpolate||reNoMatch,u="__p += '",f=RegExp((t.escape||reNoMatch).source+"|"+l.source+"|"+(l===reInterpolate?reEsTemplate:reNoMatch).source+"|"+(t.evaluate||reNoMatch).source+"|$","g");e.replace(f,function(r,t,a,o,s,i){return a||(a=o),u+=e.slice(c,i).replace(reUnescapedString,escapeStringChar),t&&(u+="' +\n__e("+t+") +\n'"),s&&(n=!0,u+="';\n"+s+";\n__p += '"),a&&(u+="' +\n((__t = ("+a+")) == null ? '' : __t) +\n'"),c=i+r.length,r}),u+="';\n";var p=t.variable,b=p;b||(p="obj",u="with ("+p+") {\n"+u+"\n}\n"),u=(n?u.replace(reEmptyStringLeading,""):u).replace(reEmptyStringMiddle,"$1").replace(reEmptyStringTrailing,"$1;"),u="function("+p+") {\n"+(b?"":p+" || ("+p+" = {});\n")+"var __t, __p = '', __e = _.escape"+(n?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+u+"return __p\n}";try{var d=Function(s,"return "+u).apply(void 0,i)}catch(m){throw m.source=u,m}return r?d(r):(d.source=u,d)}var defaults=require("../objects/defaults"),escape=require("./escape"),escapeStringChar=require("../internals/escapeStringChar"),keys=require("../objects/keys"),reInterpolate=require("../internals/reInterpolate"),templateSettings=require("./templateSettings"),values=require("../objects/values"),reEmptyStringLeading=/\b__p \+= '';/g,reEmptyStringMiddle=/\b(__p \+=) '' \+/g,reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g,reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,reNoMatch=/($^)/,reUnescapedString=/['\n\r\t\u2028\u2029\\]/g;module.exports=template;
  //# sourceMappingURL=template.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/reEscapedHtml", ["./htmlUnescapes","../objects/keys"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/reEscapedHtml.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";var htmlUnescapes=require("./htmlUnescapes"),keys=require("../objects/keys"),reEscapedHtml=RegExp("("+keys(htmlUnescapes).join("|")+")","g");module.exports=reEscapedHtml;
  //# sourceMappingURL=reEscapedHtml.js.map
  global.define = __define;
  return module.exports;
});

System.register("github:janl/mustache.js@0.8.2", ["github:janl/mustache.js@0.8.2/mustache"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/github/janl/mustache.js@0.8.2.js";
    var __dirname = "jspm_packages/github/janl";
  module.exports = require("github:janl/mustache.js@0.8.2/mustache");
  
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/createCache", ["./cachePush","./getObject","./releaseObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/createCache.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function createCache(e){var r=-1,t=e.length,a=e[0],n=e[t/2|0],s=e[t-1];if(a&&"object"==typeof a&&n&&"object"==typeof n&&s&&"object"==typeof s)return!1;var o=getObject();o["false"]=o["null"]=o["true"]=o.undefined=!1;var i=getObject();for(i.array=e,i.cache=o,i.push=cachePush;++r<t;)i.push(e[r]);return i}var cachePush=require("./cachePush"),getObject=require("./getObject"),releaseObject=require("./releaseObject");module.exports=createCache;
  //# sourceMappingURL=createCache.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseFlatten", ["../objects/isArguments","../objects/isArray"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseFlatten.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseFlatten(e,r,t,a){for(var n=(a||0)-1,s=e?e.length:0,o=[];++n<s;){var i=e[n];if(i&&"object"==typeof i&&"number"==typeof i.length&&(isArray(i)||isArguments(i))){r||(i=baseFlatten(i,r,t));var l=-1,c=i.length,u=o.length;for(o.length+=c;++l<c;)o[u++]=i[l]}else t||o.push(i)}return o}var isArguments=require("../objects/isArguments"),isArray=require("../objects/isArray");module.exports=baseFlatten;
  //# sourceMappingURL=baseFlatten.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseCreate", ["./isNative","../objects/isObject","../utilities/noop"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseCreate.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseCreate(e){return isObject(e)?nativeCreate(e):{}}var isNative=require("./isNative"),isObject=require("../objects/isObject"),noop=require("../utilities/noop"),nativeCreate=isNative(nativeCreate=Object.create)&&nativeCreate;nativeCreate||(baseCreate=function(){function e(){}return function(r){if(isObject(r)){e.prototype=r;var t=new e;e.prototype=null}return t||global.Object()}}()),module.exports=baseCreate;
  //# sourceMappingURL=baseCreate.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseIsEqual", ["../objects/forIn","./getArray","../objects/isFunction","./objectTypes","./releaseArray"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseIsEqual.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseIsEqual(e,r,t,a,n,s){if(t){var o=t(e,r);if("undefined"!=typeof o)return!!o}if(e===r)return 0!==e||1/e==1/r;var i=typeof e,l=typeof r;if(!(e!==e||e&&objectTypes[i]||r&&objectTypes[l]))return!1;if(null==e||null==r)return e===r;var c=toString.call(e),u=toString.call(r);if(c==argsClass&&(c=objectClass),u==argsClass&&(u=objectClass),c!=u)return!1;switch(c){case boolClass:case dateClass:return+e==+r;case numberClass:return e!=+e?r!=+r:0==e?1/e==1/r:e==+r;case regexpClass:case stringClass:return e==String(r)}var f=c==arrayClass;if(!f){var p=hasOwnProperty.call(e,"__wrapped__"),b=hasOwnProperty.call(r,"__wrapped__");if(p||b)return baseIsEqual(p?e.__wrapped__:e,b?r.__wrapped__:r,t,a,n,s);if(c!=objectClass)return!1;var d=e.constructor,h=r.constructor;if(d!=h&&!(isFunction(d)&&d instanceof d&&isFunction(h)&&h instanceof h)&&"constructor"in e&&"constructor"in r)return!1}var m=!n;n||(n=getArray()),s||(s=getArray());for(var y=n.length;y--;)if(n[y]==e)return s[y]==r;var g=0;if(o=!0,n.push(e),s.push(r),f){if(y=e.length,g=r.length,o=g==y,o||a)for(;g--;){var j=y,q=r[g];if(a)for(;j--&&!(o=baseIsEqual(e[j],q,t,a,n,s)););else if(!(o=baseIsEqual(e[g],q,t,a,n,s)))break}}else forIn(r,function(r,i,l){return hasOwnProperty.call(l,i)?(g++,o=hasOwnProperty.call(e,i)&&baseIsEqual(e[i],r,t,a,n,s)):void 0}),o&&!a&&forIn(e,function(e,r,t){return hasOwnProperty.call(t,r)?o=--g>-1:void 0});return n.pop(),s.pop(),m&&(releaseArray(n),releaseArray(s)),o}var forIn=require("../objects/forIn"),getArray=require("./getArray"),isFunction=require("../objects/isFunction"),objectTypes=require("./objectTypes"),releaseArray=require("./releaseArray"),argsClass="[object Arguments]",arrayClass="[object Array]",boolClass="[object Boolean]",dateClass="[object Date]",numberClass="[object Number]",objectClass="[object Object]",regexpClass="[object RegExp]",stringClass="[object String]",objectProto=Object.prototype,toString=objectProto.toString,hasOwnProperty=objectProto.hasOwnProperty;module.exports=baseIsEqual;
  //# sourceMappingURL=baseIsEqual.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/flatten", ["../internals/baseFlatten","../collections/map"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/flatten.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function flatten(e,r,t,a){return"boolean"!=typeof r&&null!=r&&(a=t,t="function"!=typeof r&&a&&a[r]===e?null:r,r=!1),null!=t&&(e=map(e,t,a)),baseFlatten(e,r)}var baseFlatten=require("../internals/baseFlatten"),map=require("../collections/map");module.exports=flatten;
  //# sourceMappingURL=flatten.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/zip", ["../collections/max","../collections/pluck"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/zip.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function zip(){for(var e=arguments.length>1?arguments:arguments[0],r=-1,t=e?max(pluck(e,"length")):0,a=Array(0>t?0:t);++r<t;)a[r]=pluck(e,r);return a}var max=require("../collections/max"),pluck=require("../collections/pluck");module.exports=zip;
  //# sourceMappingURL=zip.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/chaining", ["./chaining/chain","./chaining/tap","./chaining/wrapperValueOf","./chaining/wrapperChain","./chaining/wrapperToString","./chaining/wrapperValueOf"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/chaining.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  "format cjs";module.exports={chain:require("./chaining/chain"),tap:require("./chaining/tap"),value:require("./chaining/wrapperValueOf"),wrapperChain:require("./chaining/wrapperChain"),wrapperToString:require("./chaining/wrapperToString"),wrapperValueOf:require("./chaining/wrapperValueOf")};
  //# sourceMappingURL=chaining.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/collections", ["./collections/every","./collections/some","./collections/at","./collections/map","./collections/contains","./collections/countBy","./collections/find","./collections/forEach","./collections/forEachRight","./collections/every","./collections/filter","./collections/find","./collections/findLast","./collections/find","./collections/reduce","./collections/reduceRight","./collections/forEach","./collections/forEachRight","./collections/groupBy","./collections/contains","./collections/indexBy","./collections/reduce","./collections/invoke","./collections/map","./collections/max","./collections/min","./collections/pluck","./collections/reduce","./collections/reduceRight","./collections/reject","./collections/sample","./collections/filter","./collections/shuffle","./collections/size","./collections/some","./collections/sortBy","./collections/toArray","./collections/where"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/collections.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  "format cjs";module.exports={all:require("./collections/every"),any:require("./collections/some"),at:require("./collections/at"),collect:require("./collections/map"),contains:require("./collections/contains"),countBy:require("./collections/countBy"),detect:require("./collections/find"),each:require("./collections/forEach"),eachRight:require("./collections/forEachRight"),every:require("./collections/every"),filter:require("./collections/filter"),find:require("./collections/find"),findLast:require("./collections/findLast"),findWhere:require("./collections/find"),foldl:require("./collections/reduce"),foldr:require("./collections/reduceRight"),forEach:require("./collections/forEach"),forEachRight:require("./collections/forEachRight"),groupBy:require("./collections/groupBy"),include:require("./collections/contains"),indexBy:require("./collections/indexBy"),inject:require("./collections/reduce"),invoke:require("./collections/invoke"),map:require("./collections/map"),max:require("./collections/max"),min:require("./collections/min"),pluck:require("./collections/pluck"),reduce:require("./collections/reduce"),reduceRight:require("./collections/reduceRight"),reject:require("./collections/reject"),sample:require("./collections/sample"),select:require("./collections/filter"),shuffle:require("./collections/shuffle"),size:require("./collections/size"),some:require("./collections/some"),sortBy:require("./collections/sortBy"),toArray:require("./collections/toArray"),where:require("./collections/where")};
  //# sourceMappingURL=collections.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions", ["./functions/after","./functions/bind","./functions/bindAll","./functions/bindKey","./functions/compose","./functions/createCallback","./functions/curry","./functions/debounce","./functions/defer","./functions/delay","./functions/memoize","./functions/once","./functions/partial","./functions/partialRight","./functions/throttle","./functions/wrap"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  "format cjs";module.exports={after:require("./functions/after"),bind:require("./functions/bind"),bindAll:require("./functions/bindAll"),bindKey:require("./functions/bindKey"),compose:require("./functions/compose"),createCallback:require("./functions/createCallback"),curry:require("./functions/curry"),debounce:require("./functions/debounce"),defer:require("./functions/defer"),delay:require("./functions/delay"),memoize:require("./functions/memoize"),once:require("./functions/once"),partial:require("./functions/partial"),partialRight:require("./functions/partialRight"),throttle:require("./functions/throttle"),wrap:require("./functions/wrap")};
  //# sourceMappingURL=functions.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/objects", ["./objects/assign","./objects/clone","./objects/cloneDeep","./objects/create","./objects/defaults","./objects/assign","./objects/findKey","./objects/findLastKey","./objects/forIn","./objects/forInRight","./objects/forOwn","./objects/forOwnRight","./objects/functions","./objects/has","./objects/invert","./objects/isArguments","./objects/isArray","./objects/isBoolean","./objects/isDate","./objects/isElement","./objects/isEmpty","./objects/isEqual","./objects/isFinite","./objects/isFunction","./objects/isNaN","./objects/isNull","./objects/isNumber","./objects/isObject","./objects/isPlainObject","./objects/isRegExp","./objects/isString","./objects/isUndefined","./objects/keys","./objects/mapValues","./objects/merge","./objects/functions","./objects/omit","./objects/pairs","./objects/pick","./objects/transform","./objects/values"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/objects.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  "format cjs";module.exports={assign:require("./objects/assign"),clone:require("./objects/clone"),cloneDeep:require("./objects/cloneDeep"),create:require("./objects/create"),defaults:require("./objects/defaults"),extend:require("./objects/assign"),findKey:require("./objects/findKey"),findLastKey:require("./objects/findLastKey"),forIn:require("./objects/forIn"),forInRight:require("./objects/forInRight"),forOwn:require("./objects/forOwn"),forOwnRight:require("./objects/forOwnRight"),functions:require("./objects/functions"),has:require("./objects/has"),invert:require("./objects/invert"),isArguments:require("./objects/isArguments"),isArray:require("./objects/isArray"),isBoolean:require("./objects/isBoolean"),isDate:require("./objects/isDate"),isElement:require("./objects/isElement"),isEmpty:require("./objects/isEmpty"),isEqual:require("./objects/isEqual"),isFinite:require("./objects/isFinite"),isFunction:require("./objects/isFunction"),isNaN:require("./objects/isNaN"),isNull:require("./objects/isNull"),isNumber:require("./objects/isNumber"),isObject:require("./objects/isObject"),isPlainObject:require("./objects/isPlainObject"),isRegExp:require("./objects/isRegExp"),isString:require("./objects/isString"),isUndefined:require("./objects/isUndefined"),keys:require("./objects/keys"),mapValues:require("./objects/mapValues"),merge:require("./objects/merge"),methods:require("./objects/functions"),omit:require("./objects/omit"),pairs:require("./objects/pairs"),pick:require("./objects/pick"),transform:require("./objects/transform"),values:require("./objects/values")};
  //# sourceMappingURL=objects.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/escape", ["../internals/escapeHtmlChar","../objects/keys","../internals/reUnescapedHtml"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/escape.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function escape(e){return null==e?"":String(e).replace(reUnescapedHtml,escapeHtmlChar)}var escapeHtmlChar=require("../internals/escapeHtmlChar"),keys=require("../objects/keys"),reUnescapedHtml=require("../internals/reUnescapedHtml");module.exports=escape;
  //# sourceMappingURL=escape.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities/unescape", ["../objects/keys","../internals/reEscapedHtml","../internals/unescapeHtmlChar"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities/unescape.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities";
  "format cjs";function unescape(e){return null==e?"":String(e).replace(reEscapedHtml,unescapeHtmlChar)}var keys=require("../objects/keys"),reEscapedHtml=require("../internals/reEscapedHtml"),unescapeHtmlChar=require("../internals/unescapeHtmlChar");module.exports=unescape;
  //# sourceMappingURL=unescape.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseDifference", ["./baseIndexOf","./cacheIndexOf","./createCache","./largeArraySize","./releaseObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseDifference.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseDifference(e,r){var t=-1,a=baseIndexOf,n=e?e.length:0,o=n>=largeArraySize,s=[];if(o){var i=createCache(r);i?(a=cacheIndexOf,r=i):o=!1}for(;++t<n;){var l=e[t];a(r,l)<0&&s.push(l)}return o&&releaseObject(r),s}var baseIndexOf=require("./baseIndexOf"),cacheIndexOf=require("./cacheIndexOf"),createCache=require("./createCache"),largeArraySize=require("./largeArraySize"),releaseObject=require("./releaseObject");module.exports=baseDifference;
  //# sourceMappingURL=baseDifference.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseBind", ["./baseCreate","../objects/isObject","./setBindData","./slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseBind.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseBind(e){function r(){if(a){var e=slice(a);push.apply(e,arguments)}if(this instanceof r){var o=baseCreate(t.prototype),s=t.apply(o,e||arguments);return isObject(s)?s:o}return t.apply(n,e||arguments)}var t=e[0],a=e[2],n=e[4];return setBindData(r,e),r}var baseCreate=require("./baseCreate"),isObject=require("../objects/isObject"),setBindData=require("./setBindData"),slice=require("./slice"),arrayRef=[],push=arrayRef.push;module.exports=baseBind;
  //# sourceMappingURL=baseBind.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/utilities", ["./utilities/constant","./functions/createCallback","./utilities/escape","./utilities/identity","./utilities/mixin","./utilities/noConflict","./utilities/noop","./utilities/now","./utilities/parseInt","./utilities/property","./utilities/random","./utilities/result","./utilities/template","./utilities/templateSettings","./utilities/times","./utilities/unescape","./utilities/uniqueId"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/utilities.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  "format cjs";module.exports={constant:require("./utilities/constant"),createCallback:require("./functions/createCallback"),escape:require("./utilities/escape"),identity:require("./utilities/identity"),mixin:require("./utilities/mixin"),noConflict:require("./utilities/noConflict"),noop:require("./utilities/noop"),now:require("./utilities/now"),parseInt:require("./utilities/parseInt"),property:require("./utilities/property"),random:require("./utilities/random"),result:require("./utilities/result"),template:require("./utilities/template"),templateSettings:require("./utilities/templateSettings"),times:require("./utilities/times"),unescape:require("./utilities/unescape"),uniqueId:require("./utilities/uniqueId")};
  //# sourceMappingURL=utilities.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/difference", ["../internals/baseDifference","../internals/baseFlatten"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/difference.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function difference(e){return baseDifference(e,baseFlatten(arguments,!0,!0,1))}var baseDifference=require("../internals/baseDifference"),baseFlatten=require("../internals/baseFlatten");module.exports=difference;
  //# sourceMappingURL=difference.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/createWrapper", ["./baseBind","./baseCreateWrapper","../objects/isFunction","./slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/createWrapper.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function createWrapper(e,r,t,a,n,s){var o=1&r,i=2&r,l=4&r,c=16&r,u=32&r;if(!i&&!isFunction(e))throw new TypeError;c&&!t.length&&(r&=-17,c=t=!1),u&&!a.length&&(r&=-33,u=a=!1);var f=e&&e.__bindData__;if(f&&f!==!0)return f=slice(f),f[2]&&(f[2]=slice(f[2])),f[3]&&(f[3]=slice(f[3])),!o||1&f[1]||(f[4]=n),!o&&1&f[1]&&(r|=8),!l||4&f[1]||(f[5]=s),c&&push.apply(f[2]||(f[2]=[]),t),u&&unshift.apply(f[3]||(f[3]=[]),a),f[1]|=r,createWrapper.apply(null,f);var p=1==r||17===r?baseBind:baseCreateWrapper;return p([e,r,t,a,n,s])}var baseBind=require("./baseBind"),baseCreateWrapper=require("./baseCreateWrapper"),isFunction=require("../objects/isFunction"),slice=require("./slice"),arrayRef=[],push=arrayRef.push,unshift=arrayRef.unshift;module.exports=createWrapper;
  //# sourceMappingURL=createWrapper.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/bind", ["../internals/createWrapper","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/bind.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function bind(e,r){return arguments.length>2?createWrapper(e,17,slice(arguments,2),null,r):createWrapper(e,1,null,null,r)}var createWrapper=require("../internals/createWrapper"),slice=require("../internals/slice");module.exports=bind;
  //# sourceMappingURL=bind.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/internals/baseCreateCallback", ["../functions/bind","../utilities/identity","./setBindData","../support"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/internals/baseCreateCallback.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/internals";
  "format cjs";function baseCreateCallback(e,r,t){if("function"!=typeof e)return identity;if("undefined"==typeof r||!("prototype"in e))return e;var a=e.__bindData__;if("undefined"==typeof a&&(support.funcNames&&(a=!e.name),a=a||!support.funcDecomp,!a)){var n=fnToString.call(e);support.funcNames||(a=!reFuncName.test(n)),a||(a=reThis.test(n),setBindData(e,a))}if(a===!1||a!==!0&&1&a[1])return e;switch(t){case 1:return function(t){return e.call(r,t)};case 2:return function(t,a){return e.call(r,t,a)};case 3:return function(t,a,n){return e.call(r,t,a,n)};case 4:return function(t,a,n,o){return e.call(r,t,a,n,o)}}return bind(e,r)}var bind=require("../functions/bind"),identity=require("../utilities/identity"),setBindData=require("./setBindData"),support=require("../support"),reFuncName=/^\s*function[ \n\r\t]+\w/,reThis=/\bthis\b/,fnToString=Function.prototype.toString;module.exports=baseCreateCallback;
  //# sourceMappingURL=baseCreateCallback.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/functions/createCallback", ["../internals/baseCreateCallback","../internals/baseIsEqual","../objects/isObject","../objects/keys","../utilities/property"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/functions/createCallback.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/functions";
  "format cjs";function createCallback(e,r,t){var a=typeof e;if(null==e||"function"==a)return baseCreateCallback(e,r,t);if("object"!=a)return property(e);var n=keys(e),o=n[0],s=e[o];return 1!=n.length||s!==s||isObject(s)?function(r){for(var t=n.length,a=!1;t--&&(a=baseIsEqual(r[n[t]],e[n[t]],null,!0)););return a}:function(e){var r=e[o];return s===r&&(0!==s||1/s==1/r)}}var baseCreateCallback=require("../internals/baseCreateCallback"),baseIsEqual=require("../internals/baseIsEqual"),isObject=require("../objects/isObject"),keys=require("../objects/keys"),property=require("../utilities/property");module.exports=createCallback;
  //# sourceMappingURL=createCallback.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays/rest", ["../functions/createCallback","../internals/slice"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays/rest.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays";
  "format cjs";function rest(e,r,t){if("number"!=typeof r&&null!=r){var a=0,n=-1,s=e?e.length:0;for(r=createCallback(r,t,3);++n<s&&r(e[n],n,e);)a++}else a=null==r||t?1:nativeMax(0,r);return slice(e,a)}var createCallback=require("../functions/createCallback"),slice=require("../internals/slice"),nativeMax=Math.max;module.exports=rest;
  //# sourceMappingURL=rest.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/arrays", ["./arrays/compact","./arrays/difference","./arrays/rest","./arrays/findIndex","./arrays/findLastIndex","./arrays/first","./arrays/flatten","./arrays/first","./arrays/indexOf","./arrays/initial","./arrays/intersection","./arrays/last","./arrays/lastIndexOf","./arrays/zipObject","./arrays/pull","./arrays/range","./arrays/remove","./arrays/rest","./arrays/sortedIndex","./arrays/rest","./arrays/first","./arrays/union","./arrays/uniq","./arrays/uniq","./arrays/zip","./arrays/without","./arrays/xor","./arrays/zip","./arrays/zipObject"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/arrays.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  "format cjs";module.exports={compact:require("./arrays/compact"),difference:require("./arrays/difference"),drop:require("./arrays/rest"),findIndex:require("./arrays/findIndex"),findLastIndex:require("./arrays/findLastIndex"),first:require("./arrays/first"),flatten:require("./arrays/flatten"),head:require("./arrays/first"),indexOf:require("./arrays/indexOf"),initial:require("./arrays/initial"),intersection:require("./arrays/intersection"),last:require("./arrays/last"),lastIndexOf:require("./arrays/lastIndexOf"),object:require("./arrays/zipObject"),pull:require("./arrays/pull"),range:require("./arrays/range"),remove:require("./arrays/remove"),rest:require("./arrays/rest"),sortedIndex:require("./arrays/sortedIndex"),tail:require("./arrays/rest"),take:require("./arrays/first"),union:require("./arrays/union"),uniq:require("./arrays/uniq"),unique:require("./arrays/uniq"),unzip:require("./arrays/zip"),without:require("./arrays/without"),xor:require("./arrays/xor"),zip:require("./arrays/zip"),zipObject:require("./arrays/zipObject")};
  //# sourceMappingURL=arrays.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1/modern/index", ["./arrays","./chaining","./collections","./functions","./objects","./utilities","./collections/forEach","./objects/forOwn","./objects/isArray","./internals/lodashWrapper","./utilities/mixin","./support","./utilities/templateSettings"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1/modern/index.js";
    var __dirname = "jspm_packages/npm/lodash-node@2.4.1/modern";
  "format cjs";function lodash(e){return e&&"object"==typeof e&&!isArray(e)&&hasOwnProperty.call(e,"__wrapped__")?e:new lodashWrapper(e)}var arrays=require("./arrays"),chaining=require("./chaining"),collections=require("./collections"),functions=require("./functions"),objects=require("./objects"),utilities=require("./utilities"),forEach=require("./collections/forEach"),forOwn=require("./objects/forOwn"),isArray=require("./objects/isArray"),lodashWrapper=require("./internals/lodashWrapper"),mixin=require("./utilities/mixin"),support=require("./support"),templateSettings=require("./utilities/templateSettings"),arrayRef=[],objectProto=Object.prototype,hasOwnProperty=objectProto.hasOwnProperty;lodashWrapper.prototype=lodash.prototype,mixin=function(e){var r=objects.functions;return function(t,a,n){return a&&(n||r(a).length)||(null==n&&(n=a),a=t,t=lodash),e(t,a,n)}}(mixin),lodash.after=functions.after,lodash.assign=objects.assign,lodash.at=collections.at,lodash.bind=functions.bind,lodash.bindAll=functions.bindAll,lodash.bindKey=functions.bindKey,lodash.chain=chaining.chain,lodash.compact=arrays.compact,lodash.compose=functions.compose,lodash.constant=utilities.constant,lodash.countBy=collections.countBy,lodash.create=objects.create,lodash.createCallback=functions.createCallback,lodash.curry=functions.curry,lodash.debounce=functions.debounce,lodash.defaults=objects.defaults,lodash.defer=functions.defer,lodash.delay=functions.delay,lodash.difference=arrays.difference,lodash.filter=collections.filter,lodash.flatten=arrays.flatten,lodash.forEach=forEach,lodash.forEachRight=collections.forEachRight,lodash.forIn=objects.forIn,lodash.forInRight=objects.forInRight,lodash.forOwn=forOwn,lodash.forOwnRight=objects.forOwnRight,lodash.functions=objects.functions,lodash.groupBy=collections.groupBy,lodash.indexBy=collections.indexBy,lodash.initial=arrays.initial,lodash.intersection=arrays.intersection,lodash.invert=objects.invert,lodash.invoke=collections.invoke,lodash.keys=objects.keys,lodash.map=collections.map,lodash.mapValues=objects.mapValues,lodash.max=collections.max,lodash.memoize=functions.memoize,lodash.merge=objects.merge,lodash.min=collections.min,lodash.omit=objects.omit,lodash.once=functions.once,lodash.pairs=objects.pairs,lodash.partial=functions.partial,lodash.partialRight=functions.partialRight,lodash.pick=objects.pick,lodash.pluck=collections.pluck,lodash.property=utilities.property,lodash.pull=arrays.pull,lodash.range=arrays.range,lodash.reject=collections.reject,lodash.remove=arrays.remove,lodash.rest=arrays.rest,lodash.shuffle=collections.shuffle,lodash.sortBy=collections.sortBy,lodash.tap=chaining.tap,lodash.throttle=functions.throttle,lodash.times=utilities.times,lodash.toArray=collections.toArray,lodash.transform=objects.transform,lodash.union=arrays.union,lodash.uniq=arrays.uniq,lodash.values=objects.values,lodash.where=collections.where,lodash.without=arrays.without,lodash.wrap=functions.wrap,lodash.xor=arrays.xor,lodash.zip=arrays.zip,lodash.zipObject=arrays.zipObject,lodash.collect=collections.map,lodash.drop=arrays.rest,lodash.each=forEach,lodash.eachRight=collections.forEachRight,lodash.extend=objects.assign,lodash.methods=objects.functions,lodash.object=arrays.zipObject,lodash.select=collections.filter,lodash.tail=arrays.rest,lodash.unique=arrays.uniq,lodash.unzip=arrays.zip,mixin(lodash),lodash.clone=objects.clone,lodash.cloneDeep=objects.cloneDeep,lodash.contains=collections.contains,lodash.escape=utilities.escape,lodash.every=collections.every,lodash.find=collections.find,lodash.findIndex=arrays.findIndex,lodash.findKey=objects.findKey,lodash.findLast=collections.findLast,lodash.findLastIndex=arrays.findLastIndex,lodash.findLastKey=objects.findLastKey,lodash.has=objects.has,lodash.identity=utilities.identity,lodash.indexOf=arrays.indexOf,lodash.isArguments=objects.isArguments,lodash.isArray=isArray,lodash.isBoolean=objects.isBoolean,lodash.isDate=objects.isDate,lodash.isElement=objects.isElement,lodash.isEmpty=objects.isEmpty,lodash.isEqual=objects.isEqual,lodash.isFinite=objects.isFinite,lodash.isFunction=objects.isFunction,lodash.isNaN=objects.isNaN,lodash.isNull=objects.isNull,lodash.isNumber=objects.isNumber,lodash.isObject=objects.isObject,lodash.isPlainObject=objects.isPlainObject,lodash.isRegExp=objects.isRegExp,lodash.isString=objects.isString,lodash.isUndefined=objects.isUndefined,lodash.lastIndexOf=arrays.lastIndexOf,lodash.mixin=mixin,lodash.noConflict=utilities.noConflict,lodash.noop=utilities.noop,lodash.now=utilities.now,lodash.parseInt=utilities.parseInt,lodash.random=utilities.random,lodash.reduce=collections.reduce,lodash.reduceRight=collections.reduceRight,lodash.result=utilities.result,lodash.size=collections.size,lodash.some=collections.some,lodash.sortedIndex=arrays.sortedIndex,lodash.template=utilities.template,lodash.unescape=utilities.unescape,lodash.uniqueId=utilities.uniqueId,lodash.all=collections.every,lodash.any=collections.some,lodash.detect=collections.find,lodash.findWhere=collections.find,lodash.foldl=collections.reduce,lodash.foldr=collections.reduceRight,lodash.include=collections.contains,lodash.inject=collections.reduce,mixin(function(){var e={};return forOwn(lodash,function(r,t){lodash.prototype[t]||(e[t]=r)}),e}(),!1),lodash.first=arrays.first,lodash.last=arrays.last,lodash.sample=collections.sample,lodash.take=arrays.first,lodash.head=arrays.first,forOwn(lodash,function(e,r){var t="sample"!==r;lodash.prototype[r]||(lodash.prototype[r]=function(r,a){var n=this.__chain__,o=e(this.__wrapped__,r,a);return n||null!=r&&(!a||t&&"function"==typeof r)?new lodashWrapper(o,n):o})}),lodash.VERSION="2.4.1",lodash.prototype.chain=chaining.wrapperChain,lodash.prototype.toString=chaining.wrapperToString,lodash.prototype.value=chaining.wrapperValueOf,lodash.prototype.valueOf=chaining.wrapperValueOf,forEach(["join","pop","shift"],function(e){var r=arrayRef[e];lodash.prototype[e]=function(){var e=this.__chain__,t=r.apply(this.__wrapped__,arguments);return e?new lodashWrapper(t,e):t}}),forEach(["push","reverse","sort","unshift"],function(e){var r=arrayRef[e];lodash.prototype[e]=function(){return r.apply(this.__wrapped__,arguments),this}}),forEach(["concat","slice","splice"],function(e){var r=arrayRef[e];lodash.prototype[e]=function(){return new lodashWrapper(r.apply(this.__wrapped__,arguments),this.__chain__)}}),lodash.support=support,(lodash.templateSettings=utilities.templateSettings).imports._=lodash,module.exports=lodash;
  //# sourceMappingURL=index.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:lodash-node@2.4.1", ["npm:lodash-node@2.4.1/modern/index"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/lodash-node@2.4.1.js";
    var __dirname = "jspm_packages/npm";
  module.exports = require("npm:lodash-node@2.4.1/modern/index");
  
  global.define = __define;
  return module.exports;
});

System.register("npm:backbone@1.1.2/backbone", ["underscore"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/backbone@1.1.2/backbone.js";
    var __dirname = "jspm_packages/npm/backbone@1.1.2";
  "format cjs";!function(e,r){if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(t,a,n){e.Backbone=r(e,n,t,a)});else if("undefined"!=typeof exports){var t=require("underscore");r(e,exports,t)}else e.Backbone=r(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}(this,function(e,r,t,a){{var n=e.Backbone,i=[],s=(i.push,i.slice);i.splice}r.VERSION="1.1.2",r.$=a,r.noConflict=function(){return e.Backbone=n,this},r.emulateHTTP=!1,r.emulateJSON=!1;var o=r.Events={on:function(e,r,t){if(!l(this,"on",e,[r,t])||!r)return this;this._events||(this._events={});var a=this._events[e]||(this._events[e]=[]);return a.push({callback:r,context:t,ctx:t||this}),this},once:function(e,r,a){if(!l(this,"once",e,[r,a])||!r)return this;var n=this,i=t.once(function(){n.off(e,i),r.apply(this,arguments)});return i._callback=r,this.on(e,i,a)},off:function(e,r,a){var n,i,s,o,c,u,f,p;if(!this._events||!l(this,"off",e,[r,a]))return this;if(!e&&!r&&!a)return this._events=void 0,this;for(o=e?[e]:t.keys(this._events),c=0,u=o.length;u>c;c++)if(e=o[c],s=this._events[e]){if(this._events[e]=n=[],r||a)for(f=0,p=s.length;p>f;f++)i=s[f],(r&&r!==i.callback&&r!==i.callback._callback||a&&a!==i.context)&&n.push(i);n.length||delete this._events[e]}return this},trigger:function(e){if(!this._events)return this;var r=s.call(arguments,1);if(!l(this,"trigger",e,r))return this;var t=this._events[e],a=this._events.all;return t&&u(t,r),a&&u(a,arguments),this},stopListening:function(e,r,a){var n=this._listeningTo;if(!n)return this;var i=!r&&!a;a||"object"!=typeof r||(a=this),e&&((n={})[e._listenId]=e);for(var s in n)e=n[s],e.off(r,a,this),(i||t.isEmpty(e._events))&&delete this._listeningTo[s];return this}},c=/\s+/,l=function(e,r,t,a){if(!t)return!0;if("object"==typeof t){for(var n in t)e[r].apply(e,[n,t[n]].concat(a));return!1}if(c.test(t)){for(var i=t.split(c),s=0,o=i.length;o>s;s++)e[r].apply(e,[i[s]].concat(a));return!1}return!0},u=function(e,r){var t,a=-1,n=e.length,i=r[0],s=r[1],o=r[2];switch(r.length){case 0:for(;++a<n;)(t=e[a]).callback.call(t.ctx);return;case 1:for(;++a<n;)(t=e[a]).callback.call(t.ctx,i);return;case 2:for(;++a<n;)(t=e[a]).callback.call(t.ctx,i,s);return;case 3:for(;++a<n;)(t=e[a]).callback.call(t.ctx,i,s,o);return;default:for(;++a<n;)(t=e[a]).callback.apply(t.ctx,r);return}},f={listenTo:"on",listenToOnce:"once"};t.each(f,function(e,r){o[r]=function(r,a,n){var i=this._listeningTo||(this._listeningTo={}),s=r._listenId||(r._listenId=t.uniqueId("l"));return i[s]=r,n||"object"!=typeof a||(n=this),r[e](a,n,this),this}}),o.bind=o.on,o.unbind=o.off,t.extend(r,o);var p=r.Model=function(e,r){var a=e||{};r||(r={}),this.cid=t.uniqueId("c"),this.attributes={},r.collection&&(this.collection=r.collection),r.parse&&(a=this.parse(a,r)||{}),a=t.defaults({},a,t.result(this,"defaults")),this.set(a,r),this.changed={},this.initialize.apply(this,arguments)};t.extend(p.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(){return t.clone(this.attributes)},sync:function(){return r.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return t.escape(this.get(e))},has:function(e){return null!=this.get(e)},set:function(e,r,a){var n,i,s,o,c,l,u,f;if(null==e)return this;if("object"==typeof e?(i=e,a=r):(i={})[e]=r,a||(a={}),!this._validate(i,a))return!1;s=a.unset,c=a.silent,o=[],l=this._changing,this._changing=!0,l||(this._previousAttributes=t.clone(this.attributes),this.changed={}),f=this.attributes,u=this._previousAttributes,this.idAttribute in i&&(this.id=i[this.idAttribute]);for(n in i)r=i[n],t.isEqual(f[n],r)||o.push(n),t.isEqual(u[n],r)?delete this.changed[n]:this.changed[n]=r,s?delete f[n]:f[n]=r;if(!c){o.length&&(this._pending=a);for(var p=0,h=o.length;h>p;p++)this.trigger("change:"+o[p],this,f[o[p]],a)}if(l)return this;if(!c)for(;this._pending;)a=this._pending,this._pending=!1,this.trigger("change",this,a);return this._pending=!1,this._changing=!1,this},unset:function(e,r){return this.set(e,void 0,t.extend({},r,{unset:!0}))},clear:function(e){var r={};for(var a in this.attributes)r[a]=void 0;return this.set(r,t.extend({},e,{unset:!0}))},hasChanged:function(e){return null==e?!t.isEmpty(this.changed):t.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?t.clone(this.changed):!1;var r,a=!1,n=this._changing?this._previousAttributes:this.attributes;for(var i in e)t.isEqual(n[i],r=e[i])||((a||(a={}))[i]=r);return a},previous:function(e){return null!=e&&this._previousAttributes?this._previousAttributes[e]:null},previousAttributes:function(){return t.clone(this._previousAttributes)},fetch:function(e){e=e?t.clone(e):{},void 0===e.parse&&(e.parse=!0);var r=this,a=e.success;return e.success=function(t){return r.set(r.parse(t,e),e)?(a&&a(r,t,e),void r.trigger("sync",r,t,e)):!1},M(this,e),this.sync("read",this,e)},save:function(e,r,a){var n,i,s,o=this.attributes;if(null==e||"object"==typeof e?(n=e,a=r):(n={})[e]=r,a=t.extend({validate:!0},a),n&&!a.wait){if(!this.set(n,a))return!1}else if(!this._validate(n,a))return!1;n&&a.wait&&(this.attributes=t.extend({},o,n)),void 0===a.parse&&(a.parse=!0);var c=this,l=a.success;return a.success=function(e){c.attributes=o;var r=c.parse(e,a);return a.wait&&(r=t.extend(n||{},r)),t.isObject(r)&&!c.set(r,a)?!1:(l&&l(c,e,a),void c.trigger("sync",c,e,a))},M(this,a),i=this.isNew()?"create":a.patch?"patch":"update","patch"===i&&(a.attrs=n),s=this.sync(i,this,a),n&&a.wait&&(this.attributes=o),s},destroy:function(e){e=e?t.clone(e):{};var r=this,a=e.success,n=function(){r.trigger("destroy",r,r.collection,e)};if(e.success=function(t){(e.wait||r.isNew())&&n(),a&&a(r,t,e),r.isNew()||r.trigger("sync",r,t,e)},this.isNew())return e.success(),!1;M(this,e);var i=this.sync("delete",this,e);return e.wait||n(),i},url:function(){var e=t.result(this,"urlRoot")||t.result(this.collection,"url")||T();return this.isNew()?e:e.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(e){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(e){return this._validate({},t.extend(e||{},{validate:!0}))},_validate:function(e,r){if(!r.validate||!this.validate)return!0;e=t.extend({},this.attributes,e);var a=this.validationError=this.validate(e,r)||null;return a?(this.trigger("invalid",this,a,t.extend(r,{validationError:a})),!1):!0}});var h=["keys","values","pairs","invert","pick","omit"];t.each(h,function(e){p.prototype[e]=function(){var r=s.call(arguments);return r.unshift(this.attributes),t[e].apply(t,r)}});var d=r.Collection=function(e,r){r||(r={}),r.model&&(this.model=r.model),void 0!==r.comparator&&(this.comparator=r.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,t.extend({silent:!0},r))},b={add:!0,remove:!0,merge:!0},m={add:!0,remove:!1};t.extend(d.prototype,o,{model:p,initialize:function(){},toJSON:function(e){return this.map(function(r){return r.toJSON(e)})},sync:function(){return r.sync.apply(this,arguments)},add:function(e,r){return this.set(e,t.extend({merge:!1},r,m))},remove:function(e,r){var a=!t.isArray(e);e=a?[e]:t.clone(e),r||(r={});var n,i,s,o;for(n=0,i=e.length;i>n;n++)o=e[n]=this.get(e[n]),o&&(delete this._byId[o.id],delete this._byId[o.cid],s=this.indexOf(o),this.models.splice(s,1),this.length--,r.silent||(r.index=s,o.trigger("remove",o,this,r)),this._removeReference(o,r));return a?e[0]:e},set:function(e,r){r=t.defaults({},r,b),r.parse&&(e=this.parse(e,r));var a=!t.isArray(e);e=a?e?[e]:[]:t.clone(e);var n,i,s,o,c,l,u,f=r.at,h=this.model,d=this.comparator&&null==f&&r.sort!==!1,m=t.isString(this.comparator)?this.comparator:null,y=[],g=[],v={},j=r.add,q=r.merge,x=r.remove,C=!d&&j&&x?[]:!1;for(n=0,i=e.length;i>n;n++){if(c=e[n]||{},s=c instanceof p?o=c:c[h.prototype.idAttribute||"id"],l=this.get(s))x&&(v[l.cid]=!0),q&&(c=c===o?o.attributes:c,r.parse&&(c=l.parse(c,r)),l.set(c,r),d&&!u&&l.hasChanged(m)&&(u=!0)),e[n]=l;else if(j){if(o=e[n]=this._prepareModel(c,r),!o)continue;y.push(o),this._addReference(o,r)}o=l||o,!C||!o.isNew()&&v[o.id]||C.push(o),v[o.id]=!0}if(x){for(n=0,i=this.length;i>n;++n)v[(o=this.models[n]).cid]||g.push(o);g.length&&this.remove(g,r)}if(y.length||C&&C.length)if(d&&(u=!0),this.length+=y.length,null!=f)for(n=0,i=y.length;i>n;n++)this.models.splice(f+n,0,y[n]);else{C&&(this.models.length=0);var O=C||y;for(n=0,i=O.length;i>n;n++)this.models.push(O[n])}if(u&&this.sort({silent:!0}),!r.silent){for(n=0,i=y.length;i>n;n++)(o=y[n]).trigger("add",o,this,r);(u||C&&C.length)&&this.trigger("sort",this,r)}return a?e[0]:e},reset:function(e,r){r||(r={});for(var a=0,n=this.models.length;n>a;a++)this._removeReference(this.models[a],r);return r.previousModels=this.models,this._reset(),e=this.add(e,t.extend({silent:!0},r)),r.silent||this.trigger("reset",this,r),e},push:function(e,r){return this.add(e,t.extend({at:this.length},r))},pop:function(e){var r=this.at(this.length-1);return this.remove(r,e),r},unshift:function(e,r){return this.add(e,t.extend({at:0},r))},shift:function(e){var r=this.at(0);return this.remove(r,e),r},slice:function(){return s.apply(this.models,arguments)},get:function(e){return null==e?void 0:this._byId[e]||this._byId[e.id]||this._byId[e.cid]},at:function(e){return this.models[e]},where:function(e,r){return t.isEmpty(e)?r?void 0:[]:this[r?"find":"filter"](function(r){for(var t in e)if(e[t]!==r.get(t))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),t.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(t.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},pluck:function(e){return t.invoke(this.models,"get",e)},fetch:function(e){e=e?t.clone(e):{},void 0===e.parse&&(e.parse=!0);var r=e.success,a=this;return e.success=function(t){var n=e.reset?"reset":"set";a[n](t,e),r&&r(a,t,e),a.trigger("sync",a,t,e)},M(this,e),this.sync("read",this,e)},create:function(e,r){if(r=r?t.clone(r):{},!(e=this._prepareModel(e,r)))return!1;r.wait||this.add(e,r);var a=this,n=r.success;return r.success=function(e,t){r.wait&&a.add(e,r),n&&n(e,t,r)},e.save(null,r),e},parse:function(e){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,r){if(e instanceof p)return e;r=r?t.clone(r):{},r.collection=this;var a=new this.model(e,r);return a.validationError?(this.trigger("invalid",this,a.validationError,r),!1):a},_addReference:function(e){this._byId[e.cid]=e,null!=e.id&&(this._byId[e.id]=e),e.collection||(e.collection=this),e.on("all",this._onModelEvent,this)},_removeReference:function(e){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,r,t,a){("add"!==e&&"remove"!==e||t===this)&&("destroy"===e&&this.remove(r,a),r&&e==="change:"+r.idAttribute&&(delete this._byId[r.previous(r.idAttribute)],null!=r.id&&(this._byId[r.id]=r)),this.trigger.apply(this,arguments))}});var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];t.each(y,function(e){d.prototype[e]=function(){var r=s.call(arguments);return r.unshift(this.models),t[e].apply(t,r)}});var g=["groupBy","countBy","sortBy","indexBy"];t.each(g,function(e){d.prototype[e]=function(r,a){var n=t.isFunction(r)?r:function(e){return e.get(r)};return t[e](this.models,n,a)}});var v=r.View=function(e){this.cid=t.uniqueId("view"),e||(e={}),t.extend(this,t.pick(e,q)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},j=/^(\S+)\s*(.*)$/,q=["model","collection","el","id","attributes","className","tagName","events"];t.extend(v.prototype,o,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(e,t){return this.$el&&this.undelegateEvents(),this.$el=e instanceof r.$?e:r.$(e),this.el=this.$el[0],t!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=t.result(this,"events")))return this;this.undelegateEvents();for(var r in e){var a=e[r];if(t.isFunction(a)||(a=this[e[r]]),a){var n=r.match(j),i=n[1],s=n[2];a=t.bind(a,this),i+=".delegateEvents"+this.cid,""===s?this.$el.on(i,a):this.$el.on(i,s,a)}}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(this.el)this.setElement(t.result(this,"el"),!1);else{var e=t.extend({},t.result(this,"attributes"));this.id&&(e.id=t.result(this,"id")),this.className&&(e["class"]=t.result(this,"className"));var a=r.$("<"+t.result(this,"tagName")+">").attr(e);this.setElement(a,!1)}}}),r.sync=function(e,a,n){var i=C[e];t.defaults(n||(n={}),{emulateHTTP:r.emulateHTTP,emulateJSON:r.emulateJSON});var s={type:i,dataType:"json"};if(n.url||(s.url=t.result(a,"url")||T()),null!=n.data||!a||"create"!==e&&"update"!==e&&"patch"!==e||(s.contentType="application/json",s.data=JSON.stringify(n.attrs||a.toJSON(n))),n.emulateJSON&&(s.contentType="application/x-www-form-urlencoded",s.data=s.data?{model:s.data}:{}),n.emulateHTTP&&("PUT"===i||"DELETE"===i||"PATCH"===i)){s.type="POST",n.emulateJSON&&(s.data._method=i);var o=n.beforeSend;n.beforeSend=function(e){return e.setRequestHeader("X-HTTP-Method-Override",i),o?o.apply(this,arguments):void 0}}"GET"===s.type||n.emulateJSON||(s.processData=!1),"PATCH"===s.type&&x&&(s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var c=n.xhr=r.ajax(t.extend(s,n));return a.trigger("request",a,c,n),c};var x=!("undefined"==typeof window||!window.ActiveXObject||window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent),C={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};r.ajax=function(){return r.$.ajax.apply(r.$,arguments)};var O=r.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},w=/\((.*?)\)/g,k=/(\(\?)?:\w+/g,A=/\*\w+/g,_=/[\-{}\[\]+?.,\\\^$|#\s]/g;t.extend(O.prototype,o,{initialize:function(){},route:function(e,a,n){t.isRegExp(e)||(e=this._routeToRegExp(e)),t.isFunction(a)&&(n=a,a=""),n||(n=this[a]);var i=this;return r.history.route(e,function(t){var s=i._extractParameters(e,t);i.execute(n,s),i.trigger.apply(i,["route:"+a].concat(s)),i.trigger("route",a,s),r.history.trigger("route",i,a,s)}),this},execute:function(e,r){e&&e.apply(this,r)},navigate:function(e,t){return r.history.navigate(e,t),this},_bindRoutes:function(){if(this.routes){this.routes=t.result(this,"routes");for(var e,r=t.keys(this.routes);null!=(e=r.pop());)this.route(e,this.routes[e])}},_routeToRegExp:function(e){return e=e.replace(_,"\\$&").replace(w,"(?:$1)?").replace(k,function(e,r){return r?e:"([^/?]+)"}).replace(A,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(e,r){var a=e.exec(r).slice(1);return t.map(a,function(e,r){return r===a.length-1?e||null:e?decodeURIComponent(e):null})}});var E=r.History=function(){this.handlers=[],t.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},I=/^[#\/]|\s+$/g,P=/^\/+|\/+$/g,S=/msie [\w.]+/,F=/\/$/,R=/#.*$/;E.started=!1,t.extend(E.prototype,o,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(e){var r=(e||this).location.href.match(/#(.*)$/);return r?r[1]:""},getFragment:function(e,r){if(null==e)if(this._hasPushState||!this._wantsHashChange||r){e=decodeURI(this.location.pathname+this.location.search);var t=this.root.replace(F,"");e.indexOf(t)||(e=e.slice(t.length))}else e=this.getHash();return e.replace(I,"")},start:function(e){if(E.started)throw new Error("Backbone.history has already been started");E.started=!0,this.options=t.extend({root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var a=this.getFragment(),n=document.documentMode,i=S.exec(navigator.userAgent.toLowerCase())&&(!n||7>=n);if(this.root=("/"+this.root+"/").replace(P,"/"),i&&this._wantsHashChange){var s=r.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=s.hide().appendTo("body")[0].contentWindow,this.navigate(a)}this._hasPushState?r.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!i?r.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=a;var o=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&o.hash&&(this.fragment=this.getHash().replace(I,""),this.history.replaceState({},document.title,this.root+this.fragment))}return this.options.silent?void 0:this.loadUrl()},stop:function(){r.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),E.started=!1},route:function(e,r){this.handlers.unshift({route:e,callback:r})},checkUrl:function(){var e=this.getFragment();return e===this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e===this.fragment?!1:(this.iframe&&this.navigate(e),void this.loadUrl())},loadUrl:function(e){return e=this.fragment=this.getFragment(e),t.any(this.handlers,function(r){return r.route.test(e)?(r.callback(e),!0):void 0})},navigate:function(e,r){if(!E.started)return!1;r&&r!==!0||(r={trigger:!!r});var t=this.root+(e=this.getFragment(e||""));if(e=e.replace(R,""),this.fragment!==e){if(this.fragment=e,""===e&&"/"!==t&&(t=t.slice(0,-1)),this._hasPushState)this.history[r.replace?"replaceState":"pushState"]({},document.title,t);else{if(!this._wantsHashChange)return this.location.assign(t);this._updateHash(this.location,e,r.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(r.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,r.replace))}return r.trigger?this.loadUrl(e):void 0}},_updateHash:function(e,r,t){if(t){var a=e.href.replace(/(javascript:|#).*$/,"");e.replace(a+"#"+r)}else e.hash="#"+r}}),r.history=new E;var N=function(e,r){var a,n=this;a=e&&t.has(e,"constructor")?e.constructor:function(){return n.apply(this,arguments)},t.extend(a,n,r);var i=function(){this.constructor=a};return i.prototype=n.prototype,a.prototype=new i,e&&t.extend(a.prototype,e),a.__super__=n.prototype,a};p.extend=d.extend=O.extend=v.extend=E.extend=N;var T=function(){throw new Error('A "url" property or function must be specified')},M=function(e,r){var t=r.error;r.error=function(a){t&&t(e,a,r),e.trigger("error",e,a,r)}};return r});
  //# sourceMappingURL=backbone.js.map
  global.define = __define;
  return module.exports;
});

System.register("npm:backbone@1.1.2", ["npm:backbone@1.1.2/backbone"], true, function(require, exports, __moduleName) {
  var global = System.global;
  var __define = global.define;
  global.define = undefined;
  var module = { exports: exports };
  var process = System.get("@@nodeProcess")["default"];
    var __filename = "jspm_packages/npm/backbone@1.1.2.js";
    var __dirname = "jspm_packages/npm";
  module.exports = require("npm:backbone@1.1.2/backbone");
  
  global.define = __define;
  return module.exports;
});
