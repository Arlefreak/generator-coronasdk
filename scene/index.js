'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var SceneGenerator = yeoman.generators.NamedBase.extend({
	init: function() {
		console.log(chalk.magenta('Creating the ' + this.name + ' game scene.'));
	},

	files: function() {
		this.template('_scene.lua', 'src/scenes/' + this.name + '.lua');
	}
});

module.exports = SceneGenerator;