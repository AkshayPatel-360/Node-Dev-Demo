const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// Customize yargs version 

yargs.version('1.1.0')

// Add, Remove , read ,list

yargs.command({
        command:'add',
        describe: 'Add a new note',
        builder:{
            title:{
                describe:'Note title',
                demandOption: true,
                type: 'string'
            }
        },

        handler: function(argv){
            console.log('Adding a new note',argv)
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