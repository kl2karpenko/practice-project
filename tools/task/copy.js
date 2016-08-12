module.exports = function (grunt) {
	grunt.loadNpmTasks("grunt-extend-config");

	// Configuration for tasks
	grunt.extendConfig({
		copy: {
			html: {
				expand: true,
				src: ['template.html'],
				dest: '<%= project.buildDir %>/',
				rename: function(dest, src) {
					// use the source directory to create the file
					// example with your directory structure
					//   dest = 'dev/js/'
					//   src = 'module1/js/main.js'
					return '<%= project.buildDir %>/index.html';
				}
			},
			img: {
				expand: true,
				src: ['img/*.*'],
				dest: '<%= project.buildDir %>'
			}
		}
	}); // End of config

	// copy files from one dir to another
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('copy:all', [
		'copy:html',
		'copy:img'
	]);
};