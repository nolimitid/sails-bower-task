/**
 * Expand Sails features with Bower Package Manager.
 *
 * ---------------------------------------------------------------
 *
 * This grunt task is configured to automaticaly install bower_component's
 * inside Sails data structure that compatible with Asset Pipeline.
 * 
 * 
 *
 */
module.exports = function(grunt) {
    var path    = require('path'),
        _       = require('lodash');
    
	grunt.config.set('bower', {
        install: {
          options: {
              targetDir: './assets',
              layout: function(type, component, source){
                  var extRegex  = /[0-9a-z]{1,5}$/i,
                      extension = source.match(extRegex).toString();
                  
                  var depend    = ['angular', 'jquery'],
                      js        = ['js'],
                      styles    = ['css', 'less'],
                      fonts     = ['eot', 'svg', 'ttf', 'woff'];
                  
                  //dependencies first
                  if(_.contains(depend, component)) return path.join('js', 'dependencies', component);
                  //other libraries later
                  else if(_.contains(js, extension)) return path.join('js', 'bower', component);
                  else if(_.contains(styles, extension)) return path.join('styles', 'bower', component);
                  else if(_.contains(fonts, extension)) {  
                      //then bower fonts
                      if(component === 'bootstrap') {
                        return path.join('styles', 'bower', 'fonts');
                      }
                      else return path.join('fonts');
                  }
                  else return path.join('bower', component);
              }
          }
        }
      });

	grunt.loadNpmTasks('grunt-bower-task');
};
