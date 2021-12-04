const path = require("path");
const { openFile } = require("./utils/file")

exports.run = async function run() {
    const reader = openFile(path.resolve(__dirname, "../data/input-day3.txt"));
    let line = 0;
    let lines = [];
    let count1 = [];
    for await (const str of reader) {
        lines.push(str);
        line++;
    }

    const oxygen = filterByBitCriteria(lines, 0, 1);
    const co2 = filterByBitCriteria(lines, 0, 0);

    console.log(oxygen * co2);
}

function countDigit(lines, index) {
    return lines.reduce((sum, line) => {
        return sum + parseInt(line[index]);
    }, 0);
}

function filterByBitCriteria(lines, index, bit1) {
    if (lines.length === 1) return parseInt(lines[0], 2);

    let half = lines.length / 2;
    let count1 = countDigit(lines, index);
    let filtered;
    if (bit1) {
        filtered = lines.filter(line => {
            if (count1 === half) {
                return line[index] === `${bit1}`;
            } else {
                return line[index] === (count1 > half ? '1' : '0');
            }
        });
    } else {
        filtered = lines.filter(line => {
            if (count1 === half) {
                return line[index] === `${bit1}`;
            } else {
                return line[index] === (count1 > half ? '0' : '1');
            }
        });
    }
    return filterByBitCriteria(filtered, index + 1, bit1);
}