module.exports = function(grunt) {
	grunt.file.setBase("../");

	// 1. Общая конфигурация
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			// 2. Настройки для склеивания файлов
			dist: {
				src: [
					'js/*/*.js' // Все js-файлы в директории libs
				],
				dest: 'js/app.js'
			}
		},

		less: {
			options: {
				paths: [ 'css' ],
				compress: {},
				report: 'min',
				sourceMap: true
			},

			production: {
				files: {
					'build/app.css': 'css/app.less'
				}
			}
		},

		watch: {
			files: "css/*",
			tasks: ["less"]
		},

		uglify: {
			options: {
				compress: {},
				preserveComments: 'some',
				report: 'min'
			},

			project: {
				src: 'js/app.js',
				dest: 'build/app.min.js'
			}
		},

		jshint: {

			project: {
				options: {
					jshintrc: '.jshintrc'
				},

				files: {
					src: [ 'js/*.js', '!js/lib/bootstrap.js' ]
				}
			}

		}

	});

	// 3. Сообщаем, какие плагины мы собираемся использовать
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// 4. Определяем задачу по умолчанию, которая будет выполняться при запуске команды grunt в терминале.
	grunt.registerTask('default', ['concat', 'less', 'uglify', 'watch']);

};