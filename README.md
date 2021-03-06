# generator-jshint

A personal [Yeoman][] generator for creating JSHint configuration files. This
generator is customized to my liking, intentionally exposing a limited amount
of configurability. As such, it will not be published to npm.

[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![Dependency Status][dep-badge]][dep-status]

## Installation

First be sure to have yo installed:

    $ npm install yo -g

Then, to install **generator-jshint**, clone this repository, build, and link:

    $ git clone https://github.com/jimf/generator-jshint.git & cd $_
    $ npm install
    $ npm link

## Usage

    $ yo jshint

Answer the short series of prompts, first indicating whether the given project
will be making use of ES2015 (ES6) features, and then which environment(s) the
code will be running in. The process can be aborted at any time with ^C.

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/generator-jshint/master.svg
[build-status]: https://travis-ci.org/jimf/generator-jshint
[coverage-badge]: https://img.shields.io/coveralls/jimf/generator-jshint.svg
[coverage-result]: https://coveralls.io/r/jimf/generator-jshint
[dep-badge]: https://img.shields.io/david/jimf/generator-jshint.svg
[dep-status]: https://david-dm.org/jimf/generator-jshint
[Yeoman]: http://yeoman.io/
