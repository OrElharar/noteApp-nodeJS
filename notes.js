const fs = require("fs");
const chalk = require("chalk");


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (err) {
        return [];
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON);
}

const listNotes = () => {
    const list = loadNotes();
    const allTitles = [];
    list.forEach(note => { allTitles.push(note.title) });
    list.length > 0 ? console.log(chalk.green.inverse("Your notes"), "\n" + list) : console.log(chalk.red.inverse("Your list is empty!"));
}

const addNotes = function (title, body) {
    const notes = loadNotes();
    const duplicatedNote = notes.find((note) => { return (note.title === title) })
    debugger
    if (duplicatedNote == null) {
        notes.push({
            title,
            body
        })
        saveNotes(notes);
        console.log(chalk.green.inverse("Note added!"));
    }
    else {
        console.log(chalk.red.inverse("Title is already taken!"));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => { return (note.title !== title) })
    if (notesToKeep.length < notes.length) {
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse("Note removed!"));
    }
    else {
        console.log(chalk.red.inverse("No note found!"));
    }

}

const readNote = (title) => {
    const notes = loadNotes();
    const wantedNote = notes.find((note) => { return (note.title === title) });
    (wantedNote == null) ? console.log(chalk.bgRed.inverse("File not found!")) :
        console.log(chalk.bgGreen.inverse(wantedNote.title), "\n" + wantedNote.body)
}

module.exports = {
    listNotes,
    addNotes,
    removeNote,
    readNote,
};
