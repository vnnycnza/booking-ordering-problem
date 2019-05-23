# Booking Ordering Problem
Solution to Smove's [Booking Ordering Problem](https://github.com/itatsmove/smovechallenge/blob/master/challenges/bookingordering.md)

### Tech Stack
- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/) for Package Management
- [Mocha](https://mochajs.org/)/[nyc](https://www.npmjs.com/package/nyc) for Unit Tests

### Solution


#### Installing dependencies
```
$ npm install
```

#### Running the app
The app takes in JSON input file in `input/bookingordering.json` and then prints the expected output both in the terminal and in the output file found in `output/orderedbookings.json`.
```
$ npm start
```
Changing the input file can be possible by updating `input/bookingordering.json` or by updating the input filepath in package.json under `scripts.start`. You can also update the output file as seen below:
```
"scripts": {
    "start": "node app.js <input_filepath> <output_filepath>",
    ....
},
```
#### Run unit test
Ensure that modules are already installed via `npm install` before running unit tests.
```
$ npm test
```
