System.config({
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "mustache": "github:janl/mustache.js@^0.8.2",
    "text": "github:systemjs/plugin-text@^0.0.2",
    "jquery": "github:components/jquery@^2.1.1",
    "backbone": "npm:backbone@^1.1.2",
    "npm:backbone@1.1.2": {
      "underscore": "npm:underscore@^1.5.0"
    },
    "npm:underscore@1.7.0": {},
    "github:jspm/nodelibs@0.0.3": {
      "Base64": "npm:Base64@0.2",
      "ieee754": "npm:ieee754@^1.1.1",
      "inherits": "npm:inherits@^2.0.1",
      "base64-js": "npm:base64-js@0.0",
      "json": "github:systemjs/plugin-json@master"
    },
    "npm:Base64@0.2.1": {},
    "npm:ieee754@1.1.3": {},
    "npm:inherits@2.0.1": {},
    "npm:base64-js@0.0.7": {}
  }
});

System.config({
  "versions": {
    "github:janl/mustache.js": "0.8.2",
    "github:systemjs/plugin-text": "0.0.2",
    "github:components/jquery": "2.1.1",
    "npm:backbone": "1.1.2",
    "npm:underscore": "1.7.0",
    "github:jspm/nodelibs": "0.0.3",
    "npm:Base64": "0.2.1",
    "npm:ieee754": "1.1.3",
    "npm:inherits": "2.0.1",
    "npm:base64-js": "0.0.7",
    "github:systemjs/plugin-json": "master"
  }
});

