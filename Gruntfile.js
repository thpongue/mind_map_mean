module.exports = function(grunt) {
	grunt.initConfig({
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
					{expand: true, flatten: true, src: ['node_modules/angular/angular.js'], dest: 'build/libs/'},
				],
			},
		},

		// js - annotate angular stuff so that minification doesn't wreck it
		ngAnnotate: {
			demo: {
				files: {
					'code/tmp/main.js.annotated':['code/js/main.js']	
				}
			}
		},
		// uglify
		uglify: {
			options: {
				mangle: true
			},
			something: {
				files: {
					'code/tmp/main.js.uglified': ['code/tmp/main.js.annotated']
				}
			}
		},
		// js - put into a single source file
		browserify: {
			'build/js/app.js': ['code/tmp/main.js.uglified']
		},

		// css - sass precompilation
		sass:	{
			dist: {
				files: {
					'build/css/main.css': 'code/scss/main.scss'
				}
			}
		},
	
		// TODO : fix browserify
		// TODO : run unit tests with a headless browser
		// TODO : linting
		// TODO : code coverage
		
		watch: {
			files: [ 'code/**/*'] ,
			tasks: [ 'build' ]
		}
	})

	// look in package.json and infer all grunt.loadNpmTasks 
	require('load-grunt-tasks')(grunt);
	grunt.registerTask('build', ['clean:before', 'copy', 'ngAnnotate', 'uglify', 'browserify', 'sass', 'clean:after' ]);
	grunt.registerTask('default', ['build']);

	// watch
	grunt.loadNpmTasks('grunt-contrib-watch');
}
