'use strict';

snsBoard.controller('SNSLibraryController', function SNSLibraryController($scope, FacebookSDK, TwitterSDK){
  var _sdk = {
    facebook : FacebookSDK,
    twitter : TwitterSDK
  };
  
  $scope.signin = function(type){
    _sdk[type].signin();
  };
  
});
