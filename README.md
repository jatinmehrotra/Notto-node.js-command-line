# Notto-node.js-command-line

This repository contains a simple note-taking application that uses command-line arguments for CRUD operations concerning user given notes.


## Table of Contents 

> The  `README` contains the following info.
- [General Info](#general-info)
- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [Release History](#release-history)
- [License And Author Info](#license-and-author-info)



## General Info





## Built With
*  <a href="http://yargs.js.org/" target="_blank">**Yargs Library 15.3.1**</a> - helps you build interactive command line tools, by parsing arguments.
*  <a href="https://github.com/chalk/chalk" target="_blank">**Chalk Library 4.1.0**</a> - helps to customize Terminal string styling. 
*  <a href="https://nodejs.org/api/fs.html" target="_blank">**Fs module**</a> - helps to interact with the file system in a manner closely modeled around standard POSIX functions.




## Installation
OS X & Linux & Windows:
*  Open terminal and enter these commands

> Clone this repo to your local machine  

```shell
  git clone `https://github.com/jatinmehrotra/Notes-node.js-command-line.git`
```
> Change Directory and install npm packages

```shell
  cd to/your/project/directory
  npm install
```


## Usage

> To Create/Add a note.
```shell
  node --experimental-modules app.mjs add --title='Hello' --body='Hello everyone'
```
    
> To Read a note.
```shell
  node --experimental-modules app.mjs read --title='Hello'
```  
> To Update a note
```shell
  node --experimental-modules app.mjs update node --title='Hello World' --body='Hello World'
```   
> To Delete a note
```shell
  node --experimental-modules app.mjs remove --title='Hello World
```  

  
> To List all notes
```shell
  
   *  node --experimental-modules app.mjs list
``` 


## Release History
* 0.1.0
    * The first proper release
---


## License And Author Info

Jatin Mehrotra  – jatinjmehrotra@gmail.com

Distributed under the GNU General Public License v3.0 license. See ``LICENSE`` for more information.

[https://github.com/jatinmehrotra/repositories](https://github.com/jatinmehrotra)

