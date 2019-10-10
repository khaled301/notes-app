const chalk = require('chalk');
const getNotes = require('./notes');

const log = console.log;

const msg = getNotes();

log(chalk.blue.inverse.bold(msg));


