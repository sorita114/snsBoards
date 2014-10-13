'use strict';

snsBoard.factory('TwitterSDK', function(){
  return {
    signin : function(){
      console.log('twiiter signin~');
    },
    signout: function(){
      console.log('twitter signout');
    },
    post : function(){
      console.log('twiiter post~');
    },
    sharing : function(){
      console.log('twiiter sharing~');
    }
  };
});
