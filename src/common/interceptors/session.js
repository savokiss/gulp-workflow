'use strict';
/**
 * Created by savokiss on 2016-11-10.
 */
commonModule.factory('SessionInterceptor', function ($rootScope, $log, $q, SessionService) {

  return {
    // optional method
    request: function (config) {
      // do something on success
      if (config.url.indexOf('pacs') !== -1) {
        if (config.method == 'POST') {
          config.url += '?JSESSIONID=' + SessionService.getSid();
        } else if (config.method == 'GET') {
          config.url += '&&JSESSIONID=' + SessionService.getSid();
        }
      }
      return config;
    }
  };

});
