const fs = require('fs');
const path = require('path');

// takes in data and creates a note to add to notes.json
function createNote(data, notesArray) {
    const note = data;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
}

// checks element for matching id and deletes note
function delNote(id, notes) {
    let notesArray = notes.filter(element => {
        if (element.id == id) {
            return false;
        } else {
            return true;
        }
    })

    // re-index 
    let index = 0;
    notesArray.forEach(note => {
        note.id = index;
        index += 1;
    });

    // write to file
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return notesArray;
}

module.exports = {
    createNote,
    delNote
}