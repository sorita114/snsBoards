'use strict';

snsBoard.factory('localStorageService', function(){
  var STORAGE_ID = 'snsBoard';
  
  return {
    get : function(){
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '{}');
    },
    set : function(datas){
      localStorgae.setItem(STORAGE_ID, JSON.stringify(datas));
    }
  }
});
