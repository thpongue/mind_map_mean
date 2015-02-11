module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		// clean up tasks for before (remove everything from build) and after (remove tmp folders for transitional files)
		clean: {
			before: ['build/*'],
			after: ['code/tmp']
		},

		// move index.html into build
		copy: {
			main: {
				files: [
					// includes files within path
					{expand: true, flatten: true, src: ['code/index.html'], dest: 'build/'},
					{expand: true, flatten: true, src: ['code/libs/angular.js'], dest: 'build/libs/'},
				],
			},
		},

		// js - annotate angular stuff so that minification doesn't wreck it
		ngAnnotate: {
			demo: {
				files: {
					'code/tmp/main.js':['code/js/main.js']	
				}
			}
		},
		// js - put into a single source file
		browserify: {
			'build/js/app.js': ['tmp/main.js']
		},

		// css - sass precompilation
		sass:	{
			dist: {
				files: {
					'build/css/main.css': 'code/scss/main.scss'
				}
			}
		},
	
		// TODO : minify js	
		// TODO : fix browserify
		// TODO : run unit tests
		// TODO : can I simplify the watch code here?

		watch: {
			files: [ 'code/**/*.js', 'code/**/*.css', 'code/index.html'] ,
			tasks: [ 'build' ]
		}
	})

	// main build tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-ng-annotate');
	// TODO: minify js
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('build', ['clean:before', 'copy', 'ngAnnotate', 'browserify', 'sass', 'clean:after']);
	grunt.registerTask('default', ['build']);

	// watch
	grunt.loadNpmTasks('grunt-contrib-watch');
}
