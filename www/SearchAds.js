var exec = require('cordova/exec');

function initialize(onSuccess, onError) {
    // to use in Promise way
  if (!onSuccess) {
      return new Promise(function (resolve, reject) {
          initialize(resolve, reject);
      });
  }

    exec(onSuccess, onError, 'SearchAds', 'initialize');
}

exports.initialize = initialize;
