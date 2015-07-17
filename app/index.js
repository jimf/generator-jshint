'use strict';

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

    askFor: function() {
        var done = this.async(),
            prompts;

        prompts = [
            {
                name: 'esnext',
                message: 'Allow ES.next (ES2015/ES6) syntax',
                type: 'confirm',
                default: false
            },
            {
                name: 'environments',
                message: 'Choose intended environments',
                type: 'checkbox',
                choices: [{
                    name: 'browser',
                    message: 'Web Browser (window, document, etc)',
                    checked: false
                }, {
                    name: 'browserify',
                    message: 'Browserify (node.js code in the browser)',
                    checked: false
                }, {
                    name: 'jasmine',
                    message: 'Jasmine',
                    checked: false
                }, {
                    name: 'jquery',
                    message: 'jQuery',
                    checked: false
                }, {
                    name: 'mocha',
                    message: 'Mocha',
                    checked: false
                }, {
                    name: 'node',
                    message: 'Node.js',
                    checked: false
                }, {
                    name: 'phantom',
                    message: 'PhantomJS',
                    checked: false
                }]
            },
        ];

        this.prompt(prompts, function(responses) {
            Object.keys(responses).forEach(function(option) {
                this._setJshintOption(option, responses[option]);
            }, this);
            done();
        }.bind(this));
    },

    jshintrc: function() {
        this.template('_jshintrc', '.jshintrc');
    },

    _setJshintOption: function(option, value) {
        this.jshintOptions = this.jshintOptions || {};

        switch (option) {
            case 'esnext':
                if (value) {
                    this.jshintOptions.varstmt = true;
                    this.jshintOptions.esnext = true;
                } else {
                    this.jshintOptions.varstmt = false;
                    this.jshintOptions.esnext = false;
                }
                break;

            case 'environments':
                this._setJshintEnvOptions(value);
                break;
        }
    },

    _setJshintEnvOptions: function(environments) {
        environments = environments || [];
        var envs = {
            browser: false,
            browserify: false,
            jasmine: false,
            jquery: false,
            mocha: false,
            node: false,
            phantom: false
        };

        environments.forEach(function(env) {
            envs[env] = true;
        });

        Object.keys(envs).forEach(function(env) {
            this.jshintOptions[env] = envs[env];
        }, this);
    }
});
