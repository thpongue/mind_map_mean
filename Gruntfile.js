module.exports = function(grunt) {
	grunt.initConfig({
		// clean up tasks for before (remove everything from build) and after (remove tmp folder for transitional files)
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
					{expand: true, flatten: true, src: ['code/templates/*'], dest: 'build/templates/'},
					{expand: true, flatten: true, src: ['code/views/*'], dest: 'build/views/'},
					{expand: true, flatten: true, src: ['node_modules/angular/angular.js'], dest: 'build/libs/'},
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
		// uglify
		uglify: {
			options: {
				mangle: true
			},
			something: {
				files: {
					'code/tmp/main.js': ['code/tmp/main.js']
				}
			}
		},
		// js - put into a single source file
		browserify: {
			'build/js/app.js': ['code/tmp/main.js']
		},


		// css - sass precompilation
		sass:	{
			dist: {
				files: {
					'build/css/main.css': 'code/scss/main.scss'
				}
			}
		},
	
		watch: {
			files: [ 'code/**/*', 'Gruntfile.js'] ,
			tasks: [ 'devBuild' ]
		}
	})

	// look in package.json and infer all grunt.loadNpmTasks 
	require('load-grunt-tasks')(grunt);
	grunt.registerTask('devBuild', ['clean:before', 'copy', 'ngAnnotate', 'browserify', 'sass', 'clean:after' ]);
	grunt.registerTask('prodBuild', ['clean:before', 'copy', 'ngAnnotate', 'uglify', 'browserify', 'sass', 'clean:after' ]);
	grunt.registerTask('default', ['devBuild']);

	// watch
	grunt.loadNpmTasks('grunt-contrib-watch');
}
