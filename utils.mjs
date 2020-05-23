import fs from "fs";
import {
    TIMEOUT
} from "dns";

function loadNotes() {
    try {
        let bufferdata = fs.readFileSync('notes.json');
        let intermediatedata = bufferdata.toString();
        let parseddata = JSON.parse(intermediatedata);
        return parseddata;
    } catch (e) {
        return []
        ''
    }
}

let addNotes = function (title, body) {
    let notesArray = loadNotes();
    let duplicatearray = notesArray.filter(function (note) {
        return note.title === title;
    })
    if (duplicatearray.length > 0) {
        console.log("its a duplicate note");
    } else {
        notesArray.push({
            title: title,
            body: body
        })
        console.log('note added');
    }
    console.log(notesArray);

    saveNotes(notesArray);

}

let saveNotes = function (notesArray) {
    let stringifiednote = JSON.stringify(notesArray);
    fs.writeFileSync('notes.json', stringifiednote);

}

export {
    addNotes
};