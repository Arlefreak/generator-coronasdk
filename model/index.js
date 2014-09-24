'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var ModelGenerator = yeoman.generators.NamedBase.extend({
	init: function() {
		console.log(chalk.magenta('Creating the ' + this.name + ' game model.'));
	},

	files: function() {
		this.template('_model.lua', 'src/models/' + this.name + '.lua');
	}
});

module.exports = ModelGenerator;