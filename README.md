#Sails Bower Task

Sails Bower Task is a grunt task configured to automaticaly install bower_component's inside Sails data structure that compatible with Asset Pipeline.

##Installation
1. Create your new Sails Application `sails new [AppName]` or use existing Sails Application
2. Inside your project directory install bower as usual `bower init`
3. Copy `bower.js` from this repository to your project's task directory
4. Now you can use Bower as usual like `bower install jquery --save`
5. Then run `grunt bower` to inject bower_component's dependencies to your project that compatible with Sails Asset Pipeline

##License
MIT License