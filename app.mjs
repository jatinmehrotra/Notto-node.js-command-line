import {
  addNotes,
  removeNotes
} from "./utils.mjs";
import validator from "validator";
import chalk from "chalk";
import yargs from "yargs";


yargs.command({
  command: "add",
  describe: "To add a note!!!",
  builder: {
    title: {
      describe: "Enter Title of note which needs to be added",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "To enter body for note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "To remove a note!!!",
  builder: {
    title: {
      describe: "enter title of note which needs to be removed",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    removeNotes(argv.title);

  },
});

yargs.command({
  command: "list",
  describe: "To list all note!!!",
  handler() {
    console.log("Here is the listing!!!");
  },
});

yargs.command({
  command: "read",
  describe: "To read a note!!!",
  handler() {
    console.log("here is the note!!!");
  },
});

yargs.parse();