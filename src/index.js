#!/usr/bin/env node
const child_process = require('child_process');

function gitCheckout(gitBranchName) {
  try {
    child_process.execSync(`git checkout ${gitBranchName}`, { stdio: 'inherit' });
    return true
  } catch (e) {
    return false;
  }
}

function gitPullOrigin(gitBranchName) {
  try {
    child_process.execSync(`git pull origin ${gitBranchName}`, { stdio: 'inherit' });
    return true
  } catch (e) {
    return false;
  }
}

texts = {
  USAGE:
    `usage: gcp <git branch name> [--help]

Execute 'git checkout <git branch name>; git pull origin <git branch name>' in one command.

Happy coding!`,
};

// ***** MAIN: *****
main();

function main() {
  const gitBranchName = process.argv[2];
  if (gitBranchName === "--help") {
    console.log(texts.USAGE);
    return;
  }

  gitCheckout(gitBranchName) && gitPullOrigin(gitBranchName);
}
