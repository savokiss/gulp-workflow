'use strict';
/**
 * Created by savokiss on 2016-11-10.
 */
var DEMO = angular.module('DEMO', [
  'DEMO.common',
  'DEMO.auth'
]);

DEMO.controller('AppController', function($scope, $log){
  $log.log('This is AppController');
});
