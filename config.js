System.config({
  "paths": {
    "*": "*.js",
    "es6-workflow-please/*": "app/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "backbone": "npm:backbone@1.1.2",
    "jquery": "github:components/jquery@2.1.3",
    "lodash": "npm:lodash@3.0.1",
    "mustache": "github:janl/mustache.js@1.0.0",
    "text": "github:systemjs/plugin-text@0.0.2",
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:backbone@1.1.2": {
      "process": "github:jspm/nodelibs-process@0.1.0",
      "underscore": "npm:lodash@3.0.1"
    },
    "npm:lodash@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

