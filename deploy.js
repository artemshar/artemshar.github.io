var ghpages = require('gh-pages');

const options = {
  branch: 'master',
  repo: 'https://github.com/artemshar/artemshar.github.io.git'
}

ghpages.publish('build', options, function(err) {});