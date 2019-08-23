const run = require('./run')

// Based on https://tekkie.ro/methodology/use-git-checkout-index-initialise-project-from-boilerplate-repository/
module.exports = function (sourcePath, targetPath, commitMessage = 'initial commit') {
  return run(`git checkout-index -f -a --prefix=${targetPath}`, sourcePath, console)
    .then(() => run('git init', targetPath, console))
    .then(() => run('git add .', targetPath, console))
    .then(() => run('git commit -m\'${commitMessage}\'', targetPath, console))
}
