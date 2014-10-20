(function(window, snsBoard){
  'use strict';
  
  snsBoard.directive('PagingTemplate', function(){
    return{
      restrict : 'E',
      templateUrl : './directive/pagination.html'
    };
  });
})(window, snsBoard);
