const path = require("path");
const { openFile } = require("./utils/file")

exports.run = async function run() {
    const reader = openFile(path.resolve(__dirname, "../data/input-day3.txt"));
    let line = 0;
    let count1 = [];
    for await (const str of reader) {
        for (let i = 0; i < str.length; i++) {
            let n = str[i];
            if (n === '1') {
                count1[i] = (count1[i] || 0) + 1;
            } else {
                count1[i] = count1[i] || 0;
            }
        }
        line++;
    }

    let half = line / 2;
    let gamma = count1.map(d => d > half ? '1' : '0').join('');
    let epsilon = count1.map(d => d < half ? '1' : '0').join('');
    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2);
    console.log(gamma * epsilon);
}