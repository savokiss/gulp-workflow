'use strict';
/**
 * Created by savokiss on 2016-05-31.
 */

//localStorage封装,api保持与原生一致
commonModule.factory('Storage', function ($log) {

  return {
    setItem: setItem,
    getItem: getItem,
    removeItem: removeItem,
    clear: clear,
    getLength: getLength
  };

  function setItem(key, value) {
    if (typeof value == 'object') {
      value = angular.toJson(value);
    }
    window.localStorage.setItem(key, value);

  }

  //TODO 这里默认从json转换了
  function getItem(key) {
    var item = window.localStorage.getItem(key);
    if (_isJSON(item)) {
      item = angular.fromJson(item);
    }
    return item;
  }


  function removeItem(key) {
    var item = window.localStorage.getItem(key);
    if (item) {
      window.localStorage.removeItem(key);
      return true;
    } else {
      return false;
    }
  }

  function clear(){
    return window.localStorage.clear();
  }

  function getLength(){
    return window.localStorage.length;
  }

  function _isJSON(item) {
    return /{.*}/.test(item);
  }

});
