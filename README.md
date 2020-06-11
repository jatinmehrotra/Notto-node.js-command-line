# Notes-node.js-command-line
This repository contains a simple note-taking application that uses command-line arguments for CRUD operations concerning user given notes.

## Installation

OS X & Linux & Windows:
*  Open terminal and enter these commands

1. git clone https://github.com/jatinmehrotra/Notes-node.js-command-line.git
2. cd to/your/project/directory
3. npm install

## Usage example
1. To Create/Add a note.
*  node --experimental-modules app.mjs add --title='Hello' --body='Hello everyone'
2. To Read a note.
*  node --experimental-modules app.mjs read --title='Hello'
3. To Update a note
*  node --experimental-modules app.mjs update node --title='Hello World' --body='Hello World'
4. T0 Delete a note
*  node --experimental-modules app.mjs remove --title='Hello World
5. To List all notes
*  node --experimental-modules app.mjs list



## Development setup

Describe how to install all development dependencies and how to run an automated test-suite of some kind. Potentially do this for multiple platforms.

```sh
make install
npm test
```

## Release History

* 0.2.1
    * CHANGE: Update docs (module code remains unchanged)
* 0.2.0
    * CHANGE: Remove `setDefaultXYZ()`
    * ADD: Add `init()`
* 0.1.1
    * FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
* 0.1.0
    * The first proper release
    * CHANGE: Rename `foo()` to `bar()`
* 0.0.1
    * Work in progress

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
