# Termo-UI
This is the UI for the [termo-api](https://github.com/ebenoist/termo-api) backend, a DIY RaspberryPi driven thermostat.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)

You will also need a `config/secrets.json` file, see `config/secrets.json.example`

You will need a [termo-api backend](https://github.com/ebenoist/termo-api) and a termo unit.

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

### Building

* `ember build`

### Deploying
`$ script/deploy`
*Note* See deploy script for server setup

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
