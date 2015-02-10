module.exports = function(grunt) {
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
		},
		watch: {
			files: [ 'js/**/*.js', 'css/**/*.css', 'index.html'] ,
			tasks: [ 'build' ]
		}
	})
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('build', ['ngAnnotate', 'browserify']);
	grunt.registerTask('default', ['build']);
}
