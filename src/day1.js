const path = require("path");
const { openFile } = require("./utils/file")

exports.run = async function run() {
    const reader = openFile(path.resolve(__dirname, "../data/day1-input.txt"));
    let line = 0;
    let prev = null;
    let count = 0;
    for await (const str of reader) {
        let num = parseInt(str);
        if (prev !== null) {
            if (num > prev) {
                count++;
            }
        }
        prev = num;
        line++;
    }
    console.log(count);
}