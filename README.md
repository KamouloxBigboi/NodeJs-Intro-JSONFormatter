The purpose of the project here is to build some CLI (Command Line) utilities using simple JavaScript program :)


## 🧹 JSON Formatter

0. Install [`nodejs`](https://nodejs.org/en/download/package-manager) and `npm` (included in `nodejs` distribution) on your machine.

1. Create a new project folder `json-tidy`, then generate a `package.json` using the command [`npm init`](https://docs.npmjs.com/cli/v8/commands/npm-init) (and `git init` and commit each step of your work).

2. Create a `my_dirty_example.json` file containing valid but unformatted JSON data.

3. Create an empty `my_magical_program.js`, and make it print "Hello, World!" in the console when running `node my_magical_program.js`

4. Node.js provide default modules (always available and don't require to `npm install` them) like [`fs`](https://nodejs.org/api/fs.html), use it to load the `my_dirty_example.json` file (using [`fs.readFileSync`](https://nodejs.org/api/fs.html#fsreadfilesyncpath-options)) and parse into a variable (using [`JSON.parse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)).

5. Try to [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) the variable and to print it, what does it look like? Is there any [_magical_](https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript) option to pretty-print it?

6. Write the result into an `output.json` file (using [`fs.writeFileSync`](https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)) **CONGRATULATIONS \o/**w

7. We want to not modify our script at each usage but rather to pass as an argument (there is a [something]() in a default module to retrieve argument list) the input JSON file path, e.g. `node my_magical_program.js ./minified.json` or `node my_magical_program.js ../foo/bar/unindented.json`

8. The second argument is the name of the output JSON file path, could we make it optional?

9. When the first argument is `--help` we want to print to screen a little text which explain how to use our tool ;)

**BONUS** (at your option):

- use `readFile` and `writeFile` instead of `readFileSync` and `writeFileSync` (should force you to use [`await`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await) operator) ;

- start your script by the [_shebang_](https://en.wikipedia.org/wiki/Shebang_(Unix)) `#! /usr/bin/env node` and [`chmod +x`](https://nodejs.dev/learn/run-nodejs-scripts-from-the-command-line) it to be able to do `./my_script.js` rather than `node my_script.js` ;

- rather than doing `./my_script.js input.json output.json`, use [shell redirection](https://www.gnu.org/software/bash/manual/html_node/Redirections.html) `./my_script.js < input.json > output.json` (should simplify a lot your script).

- can you write a simple test that validated your program work on a simple example (with another script, either node or shell)? 
