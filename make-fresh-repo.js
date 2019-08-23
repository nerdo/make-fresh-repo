#!/usr/bin/env node

const path = require('path')
const makeFreshRepo = require('./makeFreshRepo')

if (process.argv.length < 3) {
  console.log('You must pass a path to create the fresh repo in.')
  process.exit(-1)
}

const sourcePath = process.cwd()
const targetPath = (path.resolve(sourcePath, process.argv[2]) + '/').replace(/\/{2,}$/, '/')

if (targetPath.startsWith(`${sourcePath}/`)) {
  console.log('You cannot create a fresh copy of the repo within itself.')
  process.exit(-2)
}

console.log(`Creating a fresh copy of the repo ${sourcePath} in ${targetPath}...`)
makeFreshRepo(sourcePath, targetPath)
