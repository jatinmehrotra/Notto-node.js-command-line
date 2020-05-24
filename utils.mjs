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
  let duplicatearray = notesArray.filter((note) => note.title === title);
  if (duplicatearray.length > 0) {
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

let saveNotes = (notesArray) => {
  let stringifiednote = JSON.stringify(notesArray);
  fs.writeFileSync("notes.json", stringifiednote);
};

export { addNotes, removeNotes };
