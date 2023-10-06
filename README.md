# Table of Contents

* [Typescript Bible](./TYPESCRIPT_BIBLE.md)
* [Lesson 1: Adding Example](./00-adding-example/ADDING.md)
* [Lesson 2: Core Types](./01-core-types/CORE_TYPES.md)

# Overall Notes
## Project Setup
* This project is split up into many directories ordered by lesson number.
* Within each 'lesson directory,' we will have a base folder to start from, and a final folder that is the result of note-taking and following the lesson.
* You may need to setup tsconfig.json files within each directory to make them work without errors when compiling.
    * Just include the files you want to compile.

### When creating a new directory
```
pnpm init
```
* This will create a package.json file with:
```json
// includes a bunch of this basic stuff
{
  "name": "01-core-types",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

```
pnpm add -D typescript @types/node
```
* Creates the pnpm-lock.yaml file
* Creates the node_modules directory.
* Adds the below line to the package.json file:
```json
  "devDependencies": {
    "@types/node": "^20.8.2",
    "typescript": "^5.2.2"
  }
```
* Namely, the "devDependencies" part.

```
test.ts
tsc test.ts
node test.js
```
* Now, you can create a typescript file, compile it, and run it with node such as in the example above.

### Optional
```
npm install prompt-sync
```
* Install this to get user input.

## Important Notes
* Each file will have *WAY* more comments than necessary.
    * This is to explain concepts though, and not for normal project readability.
