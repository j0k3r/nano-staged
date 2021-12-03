#!/usr/bin/env node

import runner from './run.js'

// Do not terminate main process on SIGINT
process.on('SIGINT', () => {})

function run() {
  let options = {}
  let arg = process.argv[2]

  if (arg === '-c' || arg === '--config') {
    options.configPath = process.argv[3]
  }

  return runner(options)
}

run().catch((err) => {
  console.log(err)
  process.exitCode = 1
})