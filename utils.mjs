import fs from "fs";
import chalk from "chalk";

let loadNotes = () => {
    try {
        let bufferdata = fs.readFileSync("notes.json");
        let intermediatedata = bufferdata.toString();
        let parseddata = JSON.parse(intermediatedata);
        return parseddata;
    } catch (e) {
        return [];
        ("");
    }
};

let addNotes = (title, body) => {
    let notesArray = loadNotes();
    let duplicateNote = notesArray.find(note => note.title === title);
    if (duplicateNote) {
        console.log("its a duplicate note");
    } else {
        notesArray.push({
            title: title,
            body: body,
        });
        console.log("note added");
    }
    console.log(notesArray);

    saveNotes(notesArray);
};
let removeNotes = (title) => {
    let notesArray = loadNotes();
    let removednotesarray = notesArray.filter(function (note) {
        return note.title !== title;
    });

    if (notesArray.length == removednotesarray.length) {
        console.log(chalk.red.bold.inverse("no note found"));
    } else {
        console.log(chalk.green.bold.inverse("note deleted"));
    }
    saveNotes(removednotesarray);
};

let listNotes = () => {
    console.log(chalk.magenta.inverse.bold('Here are your notes Sir!!!'));
    let notesArray = loadNotes();
    notesArray.forEach(element => {
        console.log('Title:', element.title);

    });
};

let readNote = (title) => {
    let notesArray = loadNotes();
    let notetoberead = notesArray.find(note => note.title === title)
    if (notetoberead === undefined) {
        console.log(chalk.red.bold.inverse("No note Found!!!"));

    } else {
        console.log(chalk.yellow.bold('title:'), chalk.yellow.bold.inverse(notetoberead.title), "body:", notetoberead.body);
    }
}

let saveNotes = (notesArray) => {
    let stringifiednote = JSON.stringify(notesArray);
    fs.writeFileSync("notes.json", stringifiednote);
};

export {
    addNotes,
    removeNotes,
    listNotes,
    readNote
};