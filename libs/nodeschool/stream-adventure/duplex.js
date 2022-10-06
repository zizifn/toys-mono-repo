

const { spawn } = require('child_process')
const duplex2 = require('duplexer2')

module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    const cmdProcess = spawn(cmd, args);
    // joining together the stdin and stdout here

    return duplex2(cmdProcess.stdin, cmdProcess.stdout)
}