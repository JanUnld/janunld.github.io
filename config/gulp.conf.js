#!/bin/env node
module.exports = {
  sass: {
    source: { base: 'assets/sass/' },
    destination: {
      base: 'assets/css/',
      filename: 'janunld-github-io.min.css'
    }
  },
  bower: {
    source: {
      base: './',
      filename: 'index.html'
    }
  }
};