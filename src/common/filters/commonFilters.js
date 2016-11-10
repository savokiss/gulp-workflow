'use strict';
/**
 * Created by savokiss on 2016-11-10.
 */
commonModule.filter('gender', function(input){
  var hash = {
    M: '男',
    F: '女',
    O: '未知'
  };
  return hash[input] || input;
});
