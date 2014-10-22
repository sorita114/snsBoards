login.controller('LoginCtrl', ['$scope','FacebookSDK','TwitterSDK', function($scope,facebookSDK, twitterSDK){
    $scope.signin = function(type){
      switch(type){
        case 'facebook' :
          facebookSDK.signin();
          break;
        case 'twitter' :
          twitterSDK.signin();
          break;
      }
    };
}]);
