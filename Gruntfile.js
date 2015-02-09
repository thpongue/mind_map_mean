module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			'build/app.js': ['js/app.js']
		}
	})
	grunt.loadNpmTasks('grunt-browserify')
}
