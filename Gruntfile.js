odule.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		ngAnnotate: {
			demo: {
				files: {
					'js/main.js.annotated':['js/main.js']	
				}
			}
		},
		browserify: {
			'build/app.js': ['js/main.js.annotated']
		}
	})
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-browserify')

	grunt.registerTask('default', ['ngAnnotate', 'browserify']);
}
