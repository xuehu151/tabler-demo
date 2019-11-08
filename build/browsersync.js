/*
 * Tabler (v0.9.0): browsersync.js
 * Copyright 2018-2019 The Tabler Authors
 * Copyright 2018-2019 codecalm
 * Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
 */

const bs = require('browser-sync').create();

bs.init({
  watch: true,
  server: {
    routes: {
      '/': 'tmp',
      '/dist': 'dist',
      '/dist/fonts': 'fonts',
      '/libs': 'static/libs',
      '/img': 'static/img',
      '/node_modules': 'node_modules',
    },
  },
  files: ['tmp/**/*', 'dist/css/*.css', 'dist/js/*.js'],
  watchOptions: {
    ignoreInitial: true,
  },
  notify: false,
  open: false,
  snippetOptions: {
    rule: {
      match: /<\/head>/i,
      fn: function (snippet, match) {
        return snippet + match;
      }
    }
  }
});
