import fs from "fs";
import {
  addNotes
} from "./utils.mjs";
import validator from "validator";
import chalk from "chalk";
import yargs from "yargs";

yargs.command({
  command: "add",
  describe: "To add a note!!!",
  builder: {
    title: {
      describe: "To enter Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "To enter body for note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "To remove a note!!!",
  handler: function () {
    console.log("note removed!!!");
  },
});

yargs.command({
  command: "list",
  describe: "To list all note!!!",
  handler: function () {
    console.log("Here is the listing!!!");
  },
});

yargs.command({
  command: "read",
  describe: "To read a note!!!",
  handler: function () {
    console.log("here is the note!!!");
  },
});

yargs.parse();