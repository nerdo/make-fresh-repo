const childProcess = require('child_process')

const nilOutput = {debug: () => {}}

module.exports = function (command, cwd, output = nilOutput) {
  return new Promise((resolve, reject) => {
    output.debug(`${cwd || process.cwd()}# ${command}`)
    childProcess.exec(
      command,
      {
        cwd
      },
      (err, stdout, stderr) => {
        if (err) {
          reject(new Error(`${err}\nSTDOUT: ${stdout}\nSTDERR: ${stderr}`))
        } else {
          output.debug(stdout)
          resolve(stdout, stderr)
        }
      }
    )
  })
}
