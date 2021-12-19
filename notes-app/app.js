const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version 

yargs.version('1.1.0')

// Add, Remove , read ,list

yargs.command({
        command:'add',
        describe: 'Add a new note',
        handler: function(){
            console.log('Adding a new note')
        }
})

yargs.command({
        command:'remove',
        describe:'Removing a note',
        handler: function(){
            console.log('Removing the note')
        }

})


yargs.command({
        command:'read',
        describe:'Reading a  note',
        handler: function(){
            console.log('Reading a note')
        }
})

yargs.command({
    command:'list',
    describe:'Listing out all notes',
    handler: function(){
        console.log('Listing a note')
    }
})


console.log(yargs.argv)