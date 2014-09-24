'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var CosoronaSdkGenerator = yeoman.generators.Base.extend({
	init: function() {
		this.pkg = require('../package.json');

		this.on('end', function() {
			if (!this.options['skip-install']) {
				this.installDependencies();
			}
		});
	},
	askFor: function() {
		var done = this.async();

		// have Yeoman greet the user
		this.log(this.yeoman);

		// replace it with a short and sweet description of your generator
		this.log(chalk.magenta('You\'re using the fantastic CoronaSDK generator.'));

		var prompts = [{
			type: 'input',
			name: 'projectName',
			message: 'What is the name of your project?',
			default: this.appname
		}, {
			type: 'confirm',
			name: 'orientation',
			message: 'would it be landscape(y) or portrait(n)?',
			default: false
		}, ];

		this.prompt(prompts, function(props) {
			this.projectName = props.projectName;
			if (props.orientation) {
				this.orientation = 'landscape';
			} else {
				this.orientation = 'portrait';
			}
			done();
		}.bind(this));
	},
	scaffoldFolders: function() {
		this.mkdir('src');
		this.mkdir('src/scenes');
		this.mkdir('src/models');
		this.mkdir('src/controllers');
		this.mkdir('res');
		this.mkdir('res/img');
		this.mkdir('res/music');
		this.mkdir('res/sound');
	},
	app: function() {
		// base files
		this.directory('rootRes/','.');
		this.log('Orientation' + this.orientation);
		this.template('Gruntfile.js', 'Gruntfile.js');

		this.template('_bower.json', 'bower.json');
		this.template('_config.json', 'config.json');
		this.template('_package.json', 'package.json');
		this.template('_main.lua', 'main.lua');
		this.template('_config.lua', 'config.lua');
		this.template('_build.settings', 'build.settings');


		// game files
		this.copy('src/scenes/home.lua');

	},
	runtime: function() {
		this.copy('bowerrc', '.bowerrc');
		this.copy('gitignore', '.gitignore');
	},
});

module.exports = CosoronaSdkGenerator;