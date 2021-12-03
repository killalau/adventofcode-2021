const path = require("path");
const { openFile } = require("./utils/file")

exports.run = async function run() {
    const reader = openFile(path.resolve(__dirname, "../data/day1-input.txt"));
    let line = 0;
    let window = [];
    let prev = null;
    let count = 0;
    for await (const str of reader) {
        let num = parseInt(str);
        if (prev !== null) {
            let sum = window[1] + window[2] + num;
            if (sum > prev) {
                count++;
            }
        }
        if (window.length === 3) window.shift();
        window.push(num);
        if (window.length === 3) prev = window[0] + window[1] + window[2];
        line++;
    }
    console.log(count);
}