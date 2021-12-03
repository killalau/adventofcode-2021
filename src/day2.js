const path = require("path");
const { openFile } = require("./utils/file")

exports.run = async function run() {
    const reader = openFile(path.resolve(__dirname, "../data/input-day2.txt"));
    let line = 0;
    let position = 0;
    let depth = 0;
    let aim = 0;
    for await (const str of reader) {
        let [cmd, num] = str.split(" ");
        num = parseInt(num);
        if (cmd === 'forward') {
            position += num;
            depth += aim * num;
        } else if (cmd === 'down') {
            aim += num;
        } else {
            aim -= num;
        }
        line++;
    }
    console.log(position * depth);
}