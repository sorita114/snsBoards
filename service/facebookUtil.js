'use strict';

snsBoard.factory('FacebookSDK', function(){
  return {
    signin : function(){
      console.log('facebook signin~');
    },
    signout : function(){
      console.log('facebook signout~');
    },
    post : function(){
      console.log('facebook post~');
    },
    sharing : function(){
      console.log('facebook sharing~');
    }
  };
});
