const chalk = require("chalk");
const yargs = require("yargs");
const notesUtilities = require("./notes");


yargs.command({
    command: "read",
    describe: "Read a notes",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",

        }
    },
    handler(argv) {
        notesUtilities.readNote(argv.title);
    }
})
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",

        },
    },
    handler(argv) {
        notesUtilities.removeNote(argv.title);
    }
})

yargs.command({
    command: "list",
    describe: "List the notes",
    handler() {
        notesUtilities.listNotes();


    }
})

yargs.command({
    command: "add",
    describe: "Adding a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",

        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string",

        }
    },
    handler(argv) {
        notesUtilities.addNotes(argv.title, argv.body);
    }
})



// console.log(yargs.argv); //=> option 1
yargs.parse()               //=> option 2


