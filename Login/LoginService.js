login.service('FacebookSDK',['UserInfo', function(userInfo){
  this.signin = function(){
    console.log('facebook signin~');
    userInfo.name = 'hyyoon';
    userInfo.profileImage = '../public/image/profile1.jpg';
    userInfo.email = 'sorita114@gmail.com';
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
}]);

login.service('TwitterSDK',['UserInfo', function(userInfo){
  this.signin = function(){
    console.log('twiiter signin~');
    userInfo.name = 'hyyoon';
    userInfo.profileImage = '../public/image/profile1.jpg';
    userInfo.email = 'sorita114@gmail.com';
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
}]);
