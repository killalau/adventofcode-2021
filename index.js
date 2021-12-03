const path = require('path');

const scriptName = process.argv[2];
const script = require(path.resolve(__dirname, 'src', scriptName));
script.run();