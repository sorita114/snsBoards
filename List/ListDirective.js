(function(window, snsBoard){
  'use strict';
  
  snsBoard.directive('ListTemplate', function(){
    return{
      restrict : 'E',
      templateUrl : './_list.html'
    };
  });
})(window, snsBoard);
