(function(window, snsBoard){
  'use strict';
  
  snsBoard.factory('localStorageService', function(){
    var STORAGE_ID = 'snsBoard';
    
    return {
      get : function(){
        return angular.fromJson(localStorage.getItem(STORAGE_ID));
      },
      set : function(datas){
        localStorgae.setItem(STORAGE_ID, angular.toJson(datas));
      }
    };
  });
})(window, snsBoard);
