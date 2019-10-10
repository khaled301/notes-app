const chalk = require('chalk');
const getNotes = require('./notes');
const log = console.log;


const command = process.argv[2];

if( command === 'add'){

    log('Adding a note!');

} else if( command === 'remove' ) {

    log('Removing a note!');

}

log(process.argv);
