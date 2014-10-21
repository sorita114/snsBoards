login.service('FacebookSDK', function(){
  this.signin = function(){
    console.log('facebook signin~');
  };
  this.signout = function(){
    console.log('facebook signout~');
  };
  this.post = function(){
    console.log('facebook post~');
  };
  this.sharing = function(){
    console.log('facebook sharing~');
  };
});

login.service('TwitterSDK', function(){
  this.signin = function(){
    console.log('twiiter signin~');
  };
  this.signout = function(){
    console.log('twitter signout');
  };
  this.post = function(){
    console.log('twiiter post~');
  };
  this.sharing = function(){
    console.log('twiiter sharing~');
  };
});
