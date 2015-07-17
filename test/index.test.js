'use strict';

var path = require('path'),
    yeoman = require('yeoman-generator'),
    helpers = yeoman.test,
    assert = yeoman.assert;

describe('JSHint Generator', function() {

    it('can be required without throwing', function() {
        require('../');
    });

    describe('when generating a JSHint config file', function() {
        var expectedFiles = ['.jshintrc'],
            expectedContent,
            runGen,
            options,
            jshintOptions;

        beforeEach(function() {
            runGen = helpers
                .run(path.join(__dirname, '../'))
                .inDir(path.join(__dirname, '.tmp'));

            options = {
                'skip-install-message': true,
                'skip-install': true,
                'skip-message': true
            };

            jshintOptions = [
                'varstmt',
                'esnext',
                'browser',
                'browserify',
                'jasmine',
                'jquery',
                'mocha',
                'node',
                'phantom'
            ];
        });

        function createMatcher(option, value) {
            return new RegExp('"' + option + '"\\s+: ' + value);
        }

        describe('with default prompts', function() {

            beforeEach(function() {
                expectedContent = jshintOptions.map(function(option) {
                    return ['.jshintrc', createMatcher(option, false)];
                });
            });

            it('should create expected files', function(done) {
                runGen
                    .withOptions(options)
                    .on('end', function() {
                        assert.file(expectedFiles);
                        assert.fileContent(expectedContent);
                        done();
                    });
            });
        });

        describe('with specified prompts', function() {
            var prompts;

            beforeEach(function() {
                prompts = {
                    esnext: true,
                    environments: [
                        'varstmt',
                        'esnext',
                        'browser',
                        'browserify',
                        'jasmine',
                        'jquery',
                        'mocha',
                        'node',
                        'phantom'
                    ]
                };
                expectedContent = jshintOptions.map(function(option) {
                    return ['.jshintrc', createMatcher(option, true)];
                });
            });

            it('should create expected files', function(done) {
                runGen
                    .withOptions(options)
                    .withPrompts(prompts)
                    .on('end', function() {
                        assert.file(expectedFiles);
                        assert.fileContent(expectedContent);
                        done();
                    });
            });
        });
    });
});
