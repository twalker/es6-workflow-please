System.config({
  "paths": {
    "*": "*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "github:*": "jspm_packages/github/*.js"
  }
});

System.config({
  "map": {
    "backbone": "npm:backbone@^1.1.2",
    "lodash": "npm:lodash-node@^2.4.1",
    "jquery": "github:components/jquery@^2.1.1",
    "npm:lodash-node@2.4.1": {},
    "npm:backbone@1.1.2": {
      "underscore": "npm:lodash-node@^2.4.1"
    },
    "github:jspm/nodelibs@0.0.2": {
      "Base64": "npm:Base64@0.2",
      "ieee754": "npm:ieee754@^1.1.1",
      "inherits": "npm:inherits@^2.0.1",
      "json": "github:systemjs/plugin-json@master",
      "text": "github:systemjs/plugin-text@master",
      "base64-js": "npm:base64-js@^0.0.4"
    },
    "npm:ieee754@1.1.3": {},
    "npm:Base64@0.2.1": {},
    "npm:inherits@2.0.1": {},
    "npm:base64-js@0.0.4": {},
    "mustache": "github:janl/mustache.js@^0.8.2",
    "github:systemjs/plugin-text": "github:systemjs/plugin-text@master"
  }
});

System.config({
  "versions": {
    "npm:backbone": "1.1.2",
    "npm:lodash-node": "2.4.1",
    "github:components/jquery": "2.1.1",
    "github:jspm/nodelibs": "0.0.2",
    "npm:Base64": "0.2.1",
    "npm:ieee754": "1.1.3",
    "npm:inherits": "2.0.1",
    "github:systemjs/plugin-json": "master",
    "github:systemjs/plugin-text": "master",
    "npm:base64-js": "0.0.4",
    "github:janl/mustache.js": "0.8.2"
  }
});

