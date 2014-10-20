(function(window, snsBoard){
  'use strict';
  
  snsBoard.directive('formTemplate', function(){
    return {
      restrict : 'E',
      templateUrl : './_form.html'
    };
  });
})(window, snsBoard);
