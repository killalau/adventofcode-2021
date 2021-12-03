const fs = require('fs');
const readline = require('readline');

exports.openFile = function (filepath) {
    const fileStream = fs.createReadStream(filepath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    return rl;
}