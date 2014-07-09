es6-workflow-please
===================

a messy space to attempt a clean es6 workflow.

I want to:

- write in es6, including it's over-engineered Module syntax
- import and use es6 modules, as well as the existing formats (CommonJS, AMD, globals)
- load modules async for unit-test pages, and dynamic module loading
- minimal dependencies
- minimal path mapping
- a sane build script/task that:

  * bubbles useful errors
  * generates sourcemaps
  * allows for packaging

- be able to use all module formats in both built and raw formats --p(x) traceur && traceur-runtime
- version reporting for maintaining freshness

### notes

jspm and System.js look like they'll deliver everything a boy could want, but will they catch on?  

## TO get working:

- !text for templating inside ES6 modules. [not yet implemented](https://github.com/jspm/jspm-cli/issues/62)
- bring `jspm bundle ...` into a task runner (gulp, or grunt). using npm run for now
- decide on, and organize a folder structure: dist => public/js ?
- 
### Issues
- lodash loading individual modules, makes for noisy http traffic
- 
