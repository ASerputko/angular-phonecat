//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      '**/*.module.js',
      '*!(.module|.spec).js',
      '!(bower_components)/**/*!(.module|.spec).js',
      '**/*.spec.js'
    ],

    singleRun: true,

    autoWatch: false,

    frameworks: ['jasmine'],

    reporters: ['progress', 'coverage'],

    preprocessors: {
      '!(bower_components)/**/*.js': ['coverage']
    },

    browsers: ['PhantomJS'],

    coverageReporter: {
      reporters: [
        {type: "html", dir: "../", subdir:"reports/coverage/"},
        {type: "lcov", dir: "../", subdir:"reports/coverage/"},
        {type: "cobertura", dir: "../", subdir:"reports/coverage/"},
        {type: "text-summary"}
      ]
    },

    plugins: [
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-jasmine'
    ]

  });
};
